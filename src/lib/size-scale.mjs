const BEHIND = 5;
const HEIGHT_FRAC = 0.9;
const WIDTH_FRAC_WITH_BEHIND = 0.64;
const WIDTH_FRAC_ALONE = 0.88;
const MIN_BEHIND_PX = 48;
const BEHIND_FADE = [1, 0.8, 0.65, 0.5, 0.38, 0.28];
const LICENCE_TOKENS = [
  'CC BY-SA 4.0',
  'CC BY-SA 2.0',
  'CC BY 3.0',
  'CC BY 2.0',
  'public domain',
  'общественное достояние',
  'domena publiczna',
  'publiskais īpašums',
  'CC0 1.0',
];

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function lerpLog(a, b, t) {
  if (!(a > 0) || !(b > 0)) return lerp(a, b, t);
  return Math.exp(lerp(Math.log(a), Math.log(b), t));
}

function ease(t) {
  return t < 0.5 ? 2 * t * t : 1 - ((-2 * t + 2) ** 2) / 2;
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function tickStep(span) {
  if (!(span > 0)) return 1;
  const target = span / 4;
  const mag = 10 ** Math.floor(Math.log10(target));
  const n = target / mag;
  const nice = n <= 1 ? 1 : n <= 2 ? 2 : n <= 2.5 ? 2.5 : n <= 5 ? 5 : 10;
  return nice * mag;
}

function formatTick(value, comma) {
  const rounded = Math.round(value * 1000) / 1000;
  let text = Number.isInteger(rounded) ? String(rounded) : String(Math.round(rounded * 10) / 10);
  if (text.endsWith('.0')) text = text.slice(0, -2);
  if (comma) text = text.replace('.', ',');
  return text;
}

function mount(root) {
  if (root.dataset.ready === '1') return;
  root.dataset.ready = '1';

  const configNode = root.querySelector('[data-size-config]');
  const animals = [...root.querySelectorAll('[data-animal]')];
  const meta = JSON.parse(configNode.textContent);
  if (meta.length !== animals.length || meta.length === 0) return;

  const chart = root.querySelector('[data-chart]');
  const plot = root.querySelector('[data-plot]');
  const grid = root.querySelector('[data-grid]');
  const yTicks = root.querySelector('[data-yticks]');
  const xTicks = root.querySelector('[data-xticks]');
  const tailGap = root.querySelector('[data-tailgap]');
  const nameEl = root.querySelector('[data-name]');
  const captionEl = root.querySelector('[data-caption]');
  const creditEl = root.querySelector('[data-credit]');
  const hLabel = root.querySelector('[data-h-label]');
  const lLabel = root.querySelector('[data-l-label]');
  const hValue = root.querySelector('[data-h-value]');
  const lValue = root.querySelector('[data-l-value]');
  const positionEl = root.querySelector('[data-position]');
  const openEl = root.querySelector('[data-open]');
  const sourcesEl = root.querySelector('[data-sources]');
  const live = root.querySelector('[data-live]');
  const prev = root.querySelector('[data-dir="-1"]');
  const next = root.querySelector('[data-dir="1"]');
  const range = root.querySelector('[data-range]');
  const comma = root.dataset.comma === '1';
  const positionPattern = root.dataset.position || '{n}';

  let plotW = 0;
  let plotH = 0;
  let index = 0;
  let token = 0;
  let syncing = false;
  let booted = false;

  root.classList.add('is-enhanced');

  function drawn(i) {
    const animal = meta[i];
    if (animal.photo && animal.photoOn !== false) return animal.photo;
    return animal.sil;
  }

  function fadeFor(front, i) {
    const distance = front - i;
    if (distance < 0 || distance >= BEHIND_FADE.length) return 0;
    return BEHIND_FADE[distance];
  }

  function measure() {
    plotW = plot.clientWidth;
    plotH = plot.clientHeight;
  }

  function scaleFor(front) {
    const first = Math.max(0, front - BEHIND);
    let tallest = 0;
    for (let i = first; i <= front; i += 1) {
      tallest = Math.max(tallest, drawn(i).drawnAboveM);
    }
    const behind = front - first;
    const widthFrac = behind > 0 ? WIDTH_FRAC_WITH_BEHIND : WIDTH_FRAC_ALONE;
    const byHeight = (plotH * HEIGHT_FRAC) / tallest;
    const byLength = (plotW * widthFrac) / drawn(front).drawnLenM;
    return Math.min(byHeight, byLength);
  }

  function frameFor(front) {
    const px = scaleFor(front);
    const first = Math.max(0, front - BEHIND);
    const frontGeom = drawn(front);
    const frontW = frontGeom.drawnLenM * px;
    const behindCount = front - first;
    let frontLeft = behindCount === 0
      ? Math.max(8, (plotW - frontW) / 2)
      : Math.max(8, plotW - frontW - 10);
    if (frontLeft + frontW > plotW - 8) frontLeft = Math.max(8, plotW - frontW - 8);
    const room = Math.max(0, frontLeft - 4);
    const step = behindCount > 0 ? Math.min(plotW * 0.105, 96, room / behindCount) : 0;
    const frontH = frontGeom.vbH * frontGeom.mPerUnit * px;
    const frontLonger = Math.max(frontW, frontH);
    const boxes = new Map();
    for (let i = first; i <= front; i += 1) {
      const animal = drawn(i);
      let w = animal.vbW * animal.mPerUnit * px;
      let h = animal.vbH * animal.mPerUnit * px;
      if (i < front) {
        const longer = Math.max(w, h);
        const cap = Math.min(MIN_BEHIND_PX, frontLonger * 0.5);
        if (longer > 0 && longer < cap) {
          const boost = cap / longer;
          w *= boost;
          h *= boost;
        }
        const groundFracNow = animal.groundY / animal.vbH;
        const above = groundFracNow * h;
        const maxAbove = plotH * 0.62;
        if (above > maxAbove && above > 0) {
          const shrink = maxAbove / above;
          w *= shrink;
          h *= shrink;
        }
      }
      const groundFrac = animal.groundY / animal.vbH;
      boxes.set(i, {
        left: frontLeft - (front - i) * step,
        top: plotH - groundFrac * h,
        w,
        h,
        groundFrac,
      });
    }
    return { px, boxes };
  }

  function growBox(box, groundFrac, g) {
    const w = box.w * g;
    const h = box.h * g;
    return {
      left: box.left + (box.w - w),
      top: plotH - groundFrac * h,
      w,
      h,
    };
  }

  function applyBox(el, box, opacity, front) {
    el.classList.add('is-on');
    el.classList.toggle('is-front', front);
    el.style.left = `${box.left}px`;
    el.style.top = `${box.top}px`;
    el.style.inlineSize = `${box.w}px`;
    el.style.blockSize = `${box.h}px`;
    el.style.opacity = '1';
    el.querySelectorAll('.size-scale-drawn').forEach((node) => {
      node.style.opacity = String(opacity);
    });
    const img = el.querySelector('img');
    if (img && img.loading === 'lazy') img.loading = 'eager';
  }

  function render(from, to, p) {
    measure();
    if (!(plotW > 0) || !(plotH > 0)) return;
    const t = prefersReducedMotion() ? 1 : ease(p);
    const start = frameFor(from);
    const end = frameFor(to);
    let tailPx = 0;

    animals.forEach((el, i) => {
      const geom = drawn(i);
      const groundFrac = geom.groundY / geom.vbH;
      const inStart = start.boxes.has(i);
      const inEnd = end.boxes.has(i);
      const leavingFront = i === from && from > to && inStart;
      el.style.zIndex = String(i + 2);
      if (leavingFront) {
        if (t >= 1) {
          el.classList.remove('is-on', 'is-front');
          return;
        }
        const g = lerp(1, 0.2, t);
        const box = growBox(start.boxes.get(i), groundFrac, g);
        applyBox(el, box, lerp(1, 0, t), false);
        tailPx = Math.max(tailPx, (1 - groundFrac) * box.h);
        return;
      }
      if (i > to || (!inStart && !inEnd)) {
        el.classList.remove('is-on', 'is-front');
        return;
      }
      if (inEnd && i === to && to > from) {
        const g = lerp(0.2, 1, t);
        const box = growBox(end.boxes.get(i), groundFrac, g);
        applyBox(el, box, t, true);
        tailPx = Math.max(tailPx, (1 - groundFrac) * box.h);
        return;
      }
      if (inStart && inEnd) {
        const a = start.boxes.get(i);
        const b = end.boxes.get(i);
        const h = lerpLog(a.h, b.h, t);
        const w = lerpLog(a.w, b.w, t);
        applyBox(el, {
          left: lerp(a.left, b.left, t),
          top: plotH - groundFrac * h,
          w,
          h,
        }, lerp(fadeFor(from, i), fadeFor(to, i), t), i === to);
        tailPx = Math.max(tailPx, (1 - groundFrac) * h);
        return;
      }
      if (inEnd) {
        const box = end.boxes.get(i);
        applyBox(el, box, lerp(0, fadeFor(to, i), t), i === to);
        tailPx = Math.max(tailPx, box.h - groundFrac * box.h);
        return;
      }
      if (t >= 1) {
        el.classList.remove('is-on', 'is-front');
        return;
      }
      applyBox(el, start.boxes.get(i), lerp(fadeFor(from, i), 0, t), false);
      const box = start.boxes.get(i);
      tailPx = Math.max(tailPx, (1 - groundFrac) * box.h);
    });

    const px = lerpLog(start.px, end.px, t);
    drawAxis(px, tailPx);
    root.classList.add('is-ready');
  }

  function drawAxis(px, tailPx) {
    tailGap.style.blockSize = `${Math.max(18, Math.ceil(tailPx + 6))}px`;
    const ySpan = plotH / px;
    const xSpan = plotW / px;
    const yStep = tickStep(ySpan);
    const xStep = tickStep(xSpan);
    grid.replaceChildren();
    yTicks.replaceChildren();
    xTicks.replaceChildren();

    for (let value = 0; value <= ySpan + yStep * 0.01; value += yStep) {
      const y = plotH - value * px;
      if (y < -2 || y > plotH + 2) continue;
      const line = document.createElement('span');
      line.className = 'size-scale-grid-h';
      line.style.top = `${y}px`;
      grid.append(line);
      const label = document.createElement('span');
      label.className = 'size-scale-tick size-scale-tick-y';
      label.style.top = `${y}px`;
      label.textContent = formatTick(value, comma);
      yTicks.append(label);
    }

    for (let value = 0; value <= xSpan + xStep * 0.01; value += xStep) {
      const x = value * px;
      if (x < 0 || x > plotW + 1) continue;
      const line = document.createElement('span');
      line.className = 'size-scale-grid-v';
      line.style.left = `${x}px`;
      grid.append(line);
      if (x > plotW - 14 && value !== 0) continue;
      const label = document.createElement('span');
      label.className = 'size-scale-tick size-scale-tick-x';
      label.style.left = `${x}px`;
      label.textContent = formatTick(value, comma);
      xTicks.append(label);
    }
  }

  function positionText(n) {
    return positionPattern.replaceAll('{n}', String(n));
  }

  function announcement(animal, position) {
    return `${animal.name}, ${position}. ${animal.heightLabel} ${animal.heightText}. ${animal.lengthLabel} ${animal.lengthText}.`;
  }

  function fillSources(animal) {
    sourcesEl.replaceChildren();
    for (const source of animal.sources) {
      const item = document.createElement('li');
      if (source.href) {
        const link = document.createElement('a');
        link.href = source.href;
        link.rel = 'noopener noreferrer';
        link.textContent = source.label;
        item.append(link);
      } else {
        item.textContent = source.label;
      }
      sourcesEl.append(item);
    }
  }

  function appendFilePage(animal, failed) {
    if (failed || !animal.filePageHref || !animal.filePageLabel) return;
    creditEl.append(document.createTextNode(' '));
    const fileLink = document.createElement('a');
    fileLink.href = animal.filePageHref;
    fileLink.rel = 'noopener noreferrer';
    fileLink.textContent = animal.filePageLabel;
    creditEl.append(fileLink);
  }

  function appendCreditText(text, href) {
    if (!href) {
      creditEl.append(document.createTextNode(text));
      return;
    }
    let token = '';
    let at = -1;
    for (const candidate of LICENCE_TOKENS) {
      const found = text.lastIndexOf(candidate);
      if (found >= 0) {
        token = candidate;
        at = found;
        break;
      }
    }
    if (at < 0) {
      creditEl.append(document.createTextNode(text));
      return;
    }
    creditEl.append(document.createTextNode(text.slice(0, at)));
    const link = document.createElement('a');
    link.href = href;
    link.rel = 'noopener noreferrer';
    link.textContent = token;
    creditEl.append(link);
    creditEl.append(document.createTextNode(text.slice(at + token.length)));
  }

  function fillCredit(animal) {
    const failed = animal.photo && animal.photoOn === false;
    const text = failed ? animal.silhouetteCredit : animal.credit;
    const href = failed ? '' : animal.licenceHref;
    const changes = failed ? '' : (animal.changes || '');
    creditEl.replaceChildren();
    appendCreditText(text, href);
    appendFilePage(animal, failed);
    if (!changes) return;
    const line = document.createElement('span');
    line.className = 'size-scale-changes';
    line.textContent = changes;
    creditEl.append(line);
  }

  function syncText() {
    const animal = meta[index];
    const position = positionText(index + 1);
    nameEl.textContent = animal.name;
    captionEl.textContent = animal.caption;
    fillCredit(animal);
    hLabel.textContent = animal.heightLabel;
    lLabel.textContent = animal.lengthLabel;
    hValue.textContent = animal.heightText;
    lValue.textContent = animal.lengthText;
    positionEl.textContent = position;
    openEl.href = animal.href;
    fillSources(animal);
    prev.disabled = index === 0;
    next.disabled = index === meta.length - 1;
    syncing = true;
    range.value = String(index);
    syncing = false;
    const text = announcement(animal, position);
    range.setAttribute('aria-valuetext', text);
    root.dataset.index = String(index);
    if (!booted) {
      booted = true;
      if (live.textContent !== text) live.textContent = text;
      return;
    }
    live.textContent = text;
  }

  function goTo(nextIndex) {
    const dest = clamp(nextIndex, 0, meta.length - 1);
    if (dest === index && token === 0) return;
    const from = index;
    index = dest;
    const id = ++token;
    syncText();
    if (prefersReducedMotion() || from === dest) {
      render(dest, dest, 1);
      token = 0;
      return;
    }
    const started = performance.now();
    const duration = 460;
    const step = (now) => {
      if (id !== token) return;
      const p = Math.min(1, (now - started) / duration);
      render(from, dest, p);
      if (p < 1) requestAnimationFrame(step);
      else token = 0;
    };
    requestAnimationFrame(step);
  }

  prev.addEventListener('click', () => goTo(index - 1));
  next.addEventListener('click', () => goTo(index + 1));
  range.addEventListener('input', () => {
    if (syncing) return;
    goTo(Number(range.value));
  });

  root.addEventListener('keydown', (event) => {
    if (event.altKey || event.metaKey || event.ctrlKey) return;
    const tag = event.target.closest('a, summary, textarea');
    if (tag) return;
    const onRange = event.target === range;
    let dest = null;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') dest = index + 1;
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') dest = index - 1;
    else if (event.key === 'Home') dest = 0;
    else if (event.key === 'End') dest = meta.length - 1;
    else if (event.key === 'PageDown') dest = index + 5;
    else if (event.key === 'PageUp') dest = index - 5;
    if (dest === null) return;
    if (onRange && (event.key === 'ArrowRight' || event.key === 'ArrowLeft' || event.key === 'ArrowUp' || event.key === 'ArrowDown')) {
      return;
    }
    event.preventDefault();
    goTo(dest);
  });

  let startX = 0;
  let startY = 0;
  let tracking = false;
  let swiped = false;

  chart.addEventListener('pointerdown', (event) => {
    if (event.button !== 0) return;
    tracking = true;
    swiped = false;
    startX = event.clientX;
    startY = event.clientY;
  });
  chart.addEventListener('pointermove', (event) => {
    if (!tracking) return;
    if (Math.abs(event.clientX - startX) > 12) swiped = true;
  });
  chart.addEventListener('pointerup', (event) => {
    if (!tracking) return;
    tracking = false;
    const dx = event.clientX - startX;
    const dy = event.clientY - startY;
    if (swiped && Math.abs(dx) > 46 && Math.abs(dx) > Math.abs(dy) * 1.15) {
      goTo(index + (dx < 0 ? 1 : -1));
    }
  });
  chart.addEventListener('pointercancel', () => {
    tracking = false;
  });
  chart.addEventListener('click', (event) => {
    if (!swiped) return;
    event.preventDefault();
    event.stopPropagation();
    swiped = false;
  }, true);

  let wheelLock = 0;
  chart.addEventListener('wheel', (event) => {
    const horizontal = Math.abs(event.deltaX) > Math.abs(event.deltaY) || event.shiftKey;
    if (!horizontal) return;
    event.preventDefault();
    const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
    if (Math.abs(delta) < 6) return;
    const now = performance.now();
    if (now < wheelLock) return;
    wheelLock = now + 340;
    goTo(index + (delta > 0 ? 1 : -1));
  }, { passive: false });

  function failPhoto(el, i) {
    if (meta[i].photoOn === false) return;
    meta[i].photoOn = false;
    el.classList.add('photo-failed');
    if (index === i) fillCredit(meta[i]);
    if (token === 0) render(index, index, 1);
  }

  animals.forEach((el, i) => {
    const img = el.querySelector('[data-photo] img');
    if (!img || !meta[i].photo) return;
    meta[i].photoOn = true;
    img.addEventListener('error', () => failPhoto(el, i));
    if (img.complete && img.naturalWidth === 0) failPhoto(el, i);
  });

  const observer = new ResizeObserver(() => {
    if (token !== 0) return;
    render(index, index, 1);
  });
  observer.observe(plot);

  render(0, 0, 1);
  syncText();
}

document.querySelectorAll('[data-size-scale]').forEach(mount);
