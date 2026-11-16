// Client behaviour for ValueScale: tabs, square selection, keyboard, swipe.
const pageStep = 5;

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function positionText(pattern, n, total) {
  return pattern.replaceAll('{n}', String(n)).replaceAll('{total}', String(total));
}

function mount(root) {
  if (root.dataset.ready === '1') return;
  const configNode = root.querySelector('[data-value-config]');
  const squares = [...root.querySelectorAll('[data-item]')];
  const labels = [...root.querySelectorAll('[data-label]')];
  if (!configNode || squares.length === 0) return;
  const items = JSON.parse(configNode.textContent);
  if (!Array.isArray(items) || items.length !== squares.length || items.length !== labels.length) return;
  root.dataset.ready = '1';
  root.classList.add('is-enhanced');

  const nameEl = root.querySelector('[data-name]');
  const valueEl = root.querySelector('[data-value-line]');
  const hookEl = root.querySelector('[data-hook]');
  const detailEl = root.querySelector('[data-detail]');
  const captionEl = root.querySelector('[data-caption]');
  const creditEl = root.querySelector('[data-credit]');
  const sourcesEl = root.querySelector('[data-sources]');
  const positionEl = root.querySelector('[data-position]');
  const live = root.querySelector('[data-live]');
  const prev = root.querySelector('[data-dir="-1"]');
  const next = root.querySelector('[data-dir="1"]');
  const range = root.querySelector('[data-range]');
  const chart = root.querySelector('[data-chart]');
  const pattern = root.dataset.positionPattern || '{n}';

  let index = 0;
  let booted = false;
  let syncing = false;

  function announcement(item, position) {
    return `${item.name}. ${position}. ${item.valueLine}`;
  }

  function fillCredit(item) {
    creditEl.replaceChildren();
    if (!item.licenceLabel || !item.licenceHref) {
      creditEl.textContent = `${item.creditBefore || ''}${item.licenceLabel || ''}${item.creditAfter || ''}`;
      return;
    }
    creditEl.append(document.createTextNode(item.creditBefore));
    const link = document.createElement('a');
    link.href = item.licenceHref;
    link.rel = 'noopener noreferrer';
    link.textContent = item.licenceLabel;
    creditEl.append(link);
    creditEl.append(document.createTextNode(item.creditAfter));
  }

  function fillSources(item) {
    sourcesEl.replaceChildren();
    for (const source of item.sources) {
      const row = document.createElement('li');
      if (source.href) {
        const link = document.createElement('a');
        link.href = source.href;
        link.rel = 'noopener noreferrer';
        link.textContent = source.label;
        row.append(link);
      } else {
        row.textContent = source.label;
      }
      sourcesEl.append(row);
    }
  }

  function paint() {
    const item = items[index];
    const position = positionText(pattern, index + 1, items.length);
    squares.forEach((el, i) => {
      const on = i === index;
      el.classList.toggle('is-selected', on);
      el.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    labels.forEach((el, i) => el.classList.toggle('is-selected', i === index));
    nameEl.textContent = item.name;
    valueEl.textContent = item.valueLine;
    hookEl.textContent = item.hook;
    detailEl.textContent = item.detail;
    captionEl.textContent = item.caption;
    fillCredit(item);
    fillSources(item);
    positionEl.textContent = position;
    prev.disabled = index === 0;
    next.disabled = index === items.length - 1;
    syncing = true;
    range.value = String(index);
    syncing = false;
    const text = announcement(item, position);
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
    const dest = clamp(nextIndex, 0, items.length - 1);
    if (dest === index) return;
    index = dest;
    paint();
  }

  prev.addEventListener('click', () => goTo(index - 1));
  next.addEventListener('click', () => goTo(index + 1));
  range.addEventListener('input', () => {
    if (syncing) return;
    goTo(Number(range.value));
  });
  squares.forEach((el, i) => {
    el.addEventListener('click', () => {
      if (root.dataset.swiped === '1') {
        root.dataset.swiped = '0';
        return;
      }
      goTo(i);
    });
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
    else if (event.key === 'End') dest = items.length - 1;
    else if (event.key === 'PageDown') dest = index + pageStep;
    else if (event.key === 'PageUp') dest = index - pageStep;
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

  chart.addEventListener('pointerdown', (event) => {
    if (event.button !== 0) return;
    tracking = true;
    root.dataset.swiped = '0';
    startX = event.clientX;
    startY = event.clientY;
  });
  chart.addEventListener('pointerup', (event) => {
    if (!tracking) return;
    tracking = false;
    const dx = event.clientX - startX;
    const dy = event.clientY - startY;
    if (Math.abs(dx) > 46 && Math.abs(dx) > Math.abs(dy) * 1.15) {
      root.dataset.swiped = '1';
      goTo(index + (dx < 0 ? 1 : -1));
    }
  });
  chart.addEventListener('pointercancel', () => {
    tracking = false;
  });

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

  squares.forEach((el) => {
    const img = el.querySelector('img');
    if (!img) return;
    img.addEventListener('error', () => {
      img.remove();
      el.classList.add('is-missing-photo');
    });
  });

  paint();
}

function mountSwitch(root) {
  const bar = root.querySelector('[data-value-switch]');
  if (!bar || bar.dataset.ready === '1') return;
  bar.dataset.ready = '1';
  const panels = [...root.querySelectorAll('[data-value-group]')];
  const buttons = [...bar.querySelectorAll('[data-group]')];
  const show = (id) => {
    for (const panel of panels) panel.hidden = panel.dataset.valueGroup !== id;
    for (const button of buttons) {
      const on = button.dataset.group === id;
      button.classList.toggle('is-active', on);
      button.setAttribute('aria-selected', on ? 'true' : 'false');
      button.tabIndex = on ? 0 : -1;
    }
  };
  if (root.dataset.defaultTab) show(root.dataset.defaultTab);
  bar.addEventListener('click', (event) => {
    const button = event.target.closest('[data-group]');
    if (!button || !bar.contains(button)) return;
    show(button.dataset.group);
  });
  bar.addEventListener('keydown', (event) => {
    const current = event.target.closest('[data-group]');
    if (!current || !bar.contains(current)) return;
    const i = buttons.indexOf(current);
    if (i < 0) return;
    let dest = null;
    if (event.key === 'ArrowRight') dest = buttons[(i + 1) % buttons.length];
    else if (event.key === 'ArrowLeft') dest = buttons[(i - 1 + buttons.length) % buttons.length];
    else if (event.key === 'Home') dest = buttons[0];
    else if (event.key === 'End') dest = buttons[buttons.length - 1];
    if (!dest) return;
    event.preventDefault();
    dest.focus();
    show(dest.dataset.group);
  });
}

document.querySelectorAll('[data-value-scale]').forEach(mount);
document.querySelectorAll('[data-value-scale-root]').forEach(mountSwitch);
