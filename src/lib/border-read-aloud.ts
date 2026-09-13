/**
 * History of borders read-aloud. Browser Web Speech API only.
 * Speaks each century's title + essay. Skips source, license, credits.
 */

export type SpeechLabels = {
  play: string;
  pause: string;
  playAria: string;
  pauseAria: string;
  stopAria: string;
  noVoice: string;
};

const URL_RE = /https?:\/\/\S+|\bwww\.\S+/gi;

export function cleanSpeechText(text: string): string {
  return text
    .replace(URL_RE, ' ')
    .replace(/[ \t]+/g, ' ')
    .replace(/ *\n */g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

export function collectCenturySpeech(article: HTMLElement): string {
  const titleEl = article.querySelector('.map-detail-copy h2');
  const essayEl = article.querySelector('.borders-essay');
  const parts: string[] = [];
  const title = cleanSpeechText(titleEl?.textContent ?? '');
  if (title) parts.push(title);
  const essay = cleanSpeechText(essayEl?.innerText ?? essayEl?.textContent ?? '');
  if (essay) parts.push(essay);
  return parts.join('\n\n');
}

export function splitSpeechChunks(text: string, maxLen = 480): string[] {
  const paragraphs = text
    .split(/\n{2,}/)
    .map((part) => part.trim())
    .filter(Boolean);
  const chunks: string[] = [];

  for (const paragraph of paragraphs) {
    if (paragraph.length <= maxLen) {
      chunks.push(paragraph);
      continue;
    }
    const sentences = paragraph.match(/[^.!?…]+[.!?…]+|[^.!?…]+$/g) ?? [paragraph];
    let buffer = '';
    for (const sentence of sentences) {
      const next = buffer ? `${buffer} ${sentence.trim()}` : sentence.trim();
      if (next.length > maxLen && buffer) {
        chunks.push(buffer);
        buffer = sentence.trim();
      } else {
        buffer = next;
      }
    }
    if (buffer) chunks.push(buffer);
  }

  return chunks;
}

export function findLocaleVoice(
  voices: SpeechSynthesisVoice[],
  locale: string,
): SpeechSynthesisVoice | undefined {
  const code = locale.toLowerCase();
  const matches = voices.filter((voice) => {
    const lang = voice.lang.replace(/_/g, '-').toLowerCase();
    return lang === code || lang.startsWith(`${code}-`);
  });
  return matches.find((voice) => voice.default) ?? matches[0];
}

type Session = {
  article: HTMLElement;
  playBtn: HTMLButtonElement;
  stopBtn: HTMLButtonElement;
  chunks: string[];
  index: number;
  locale: string;
  voice: SpeechSynthesisVoice;
  title: string;
};

let session: Session | null = null;
let paused = false;
let rate = 1;
let keepAlive = 0;
let generation = 0;

function readLabels(root: HTMLElement): SpeechLabels {
  return {
    play: root.dataset.labelPlay ?? 'Play',
    pause: root.dataset.labelPause ?? 'Pause',
    playAria: root.dataset.labelPlayAria ?? 'Read this century aloud',
    pauseAria: root.dataset.labelPauseAria ?? 'Pause reading',
    stopAria: root.dataset.labelStopAria ?? 'Stop reading',
    noVoice: root.dataset.labelNoVoice ?? 'No matching voice in this browser',
  };
}

function articleTitle(article: HTMLElement): string {
  return (article.querySelector('.map-detail-copy h2')?.textContent ?? '').trim();
}

function setButton(btn: HTMLButtonElement, label: string, aria: string, title: string) {
  btn.textContent = label;
  btn.setAttribute('aria-label', `${aria}: ${title}`);
}

function paintIdle(playBtn: HTMLButtonElement, stopBtn: HTMLButtonElement, labels: SpeechLabels, title: string) {
  setButton(playBtn, labels.play, labels.playAria, title);
  playBtn.setAttribute('aria-pressed', 'false');
  stopBtn.disabled = true;
}

function paintPlaying(playBtn: HTMLButtonElement, stopBtn: HTMLButtonElement, labels: SpeechLabels, title: string) {
  setButton(playBtn, labels.pause, labels.pauseAria, title);
  playBtn.setAttribute('aria-pressed', 'true');
  stopBtn.disabled = false;
}

function paintPaused(playBtn: HTMLButtonElement, stopBtn: HTMLButtonElement, labels: SpeechLabels, title: string) {
  setButton(playBtn, labels.play, labels.playAria, title);
  playBtn.setAttribute('aria-pressed', 'false');
  stopBtn.disabled = false;
}

function stopKeepAlive() {
  if (keepAlive) {
    window.clearInterval(keepAlive);
    keepAlive = 0;
  }
}

function startKeepAlive() {
  stopKeepAlive();
  keepAlive = window.setInterval(() => {
    if (!window.speechSynthesis.speaking || window.speechSynthesis.paused) return;
    window.speechSynthesis.pause();
    window.speechSynthesis.resume();
  }, 12000);
}

function hardStop() {
  generation += 1;
  stopKeepAlive();
  paused = false;
  window.speechSynthesis.cancel();
  if (!session) return;
  const root = document.querySelector<HTMLElement>('[data-borders-speech]');
  if (root) {
    paintIdle(session.playBtn, session.stopBtn, readLabels(root), session.title);
  }
  session = null;
}

function speakNext() {
  if (!session || paused) return;
  if (session.index >= session.chunks.length) {
    hardStop();
    return;
  }

  const gen = generation;
  const utterance = new SpeechSynthesisUtterance(session.chunks[session.index]);
  utterance.lang = session.locale;
  utterance.voice = session.voice;
  utterance.rate = rate;
  utterance.onend = () => {
    if (gen !== generation || !session || paused) return;
    session.index += 1;
    speakNext();
  };
  utterance.onerror = (event) => {
    if (event.error === 'interrupted' || event.error === 'canceled') return;
    if (gen !== generation || paused) return;
    hardStop();
  };
  window.speechSynthesis.speak(utterance);
}

function startSession(
  article: HTMLElement,
  playBtn: HTMLButtonElement,
  stopBtn: HTMLButtonElement,
  locale: string,
  voice: SpeechSynthesisVoice,
  labels: SpeechLabels,
) {
  const text = collectCenturySpeech(article);
  const chunks = splitSpeechChunks(text);
  if (!chunks.length) return;

  generation += 1;
  window.speechSynthesis.cancel();
  session = {
    article,
    playBtn,
    stopBtn,
    chunks,
    index: 0,
    locale,
    voice,
    title: articleTitle(article),
  };
  paused = false;
  paintPlaying(playBtn, stopBtn, labels, session.title);
  startKeepAlive();

  const kick = () => speakNext();
  if (window.speechSynthesis.speaking || window.speechSynthesis.pending) {
    window.setTimeout(kick, 50);
  } else {
    kick();
  }
}

function applyVoiceAvailability(root: HTMLElement) {
  if (!('speechSynthesis' in window)) {
    disableAll(root, readLabels(root).noVoice);
    return;
  }
  const locale = root.dataset.locale ?? 'en';
  const voice = findLocaleVoice(window.speechSynthesis.getVoices(), locale);
  const labels = readLabels(root);
  root.querySelectorAll<HTMLElement>('[data-borders-readout]').forEach((control) => {
    const playBtn = control.querySelector<HTMLButtonElement>('[data-readout-play]');
    const rateInput = control.querySelector<HTMLInputElement>('[data-readout-rate]');
    if (!playBtn) return;
    if (voice) {
      playBtn.disabled = false;
      playBtn.removeAttribute('title');
      if (rateInput) rateInput.disabled = false;
    } else {
      playBtn.disabled = true;
      playBtn.title = labels.noVoice;
      if (rateInput) rateInput.disabled = true;
    }
  });
}

function disableAll(root: HTMLElement, reason: string) {
  root.querySelectorAll<HTMLElement>('[data-borders-readout]').forEach((control) => {
    const playBtn = control.querySelector<HTMLButtonElement>('[data-readout-play]');
    const stopBtn = control.querySelector<HTMLButtonElement>('[data-readout-stop]');
    const rateInput = control.querySelector<HTMLInputElement>('[data-readout-rate]');
    if (playBtn) {
      playBtn.disabled = true;
      playBtn.title = reason;
    }
    if (stopBtn) stopBtn.disabled = true;
    if (rateInput) rateInput.disabled = true;
  });
}

function syncRates(root: HTMLElement, value: string) {
  root.querySelectorAll<HTMLInputElement>('[data-readout-rate]').forEach((input) => {
    input.value = value;
  });
}

export function initBorderReadAloud(): void {
  const root = document.querySelector<HTMLElement>('[data-borders-speech]');
  if (!root || root.dataset.speechReady === 'true') return;
  root.dataset.speechReady = 'true';

  const labels = readLabels(root);
  const locale = root.dataset.locale ?? 'en';

  if (!('speechSynthesis' in window)) {
    disableAll(root, labels.noVoice);
    return;
  }

  applyVoiceAvailability(root);
  window.speechSynthesis.addEventListener('voiceschanged', () => {
    applyVoiceAvailability(root);
  });

  root.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const playBtn = target.closest<HTMLButtonElement>('[data-readout-play]');
    const stopBtn = target.closest<HTMLButtonElement>('[data-readout-stop]');
    if (!playBtn && !stopBtn) return;

    const control = (playBtn ?? stopBtn)?.closest<HTMLElement>('[data-borders-readout]');
    const article = control?.closest<HTMLElement>('article.borders-frame');
    if (!control || !article) return;

    const thisPlay = control.querySelector<HTMLButtonElement>('[data-readout-play]');
    const thisStop = control.querySelector<HTMLButtonElement>('[data-readout-stop]');
    if (!thisPlay || !thisStop) return;

    if (stopBtn) {
      event.preventDefault();
      hardStop();
      return;
    }

    event.preventDefault();
    const voice = findLocaleVoice(window.speechSynthesis.getVoices(), locale);
    if (!voice) {
      applyVoiceAvailability(root);
      return;
    }

    if (session && session.article === article && !paused) {
      paused = true;
      stopKeepAlive();
      window.speechSynthesis.pause();
      paintPaused(thisPlay, thisStop, labels, session.title);
      return;
    }

    if (session && session.article === article && paused) {
      paused = false;
      paintPlaying(thisPlay, thisStop, labels, session.title);
      startKeepAlive();
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      } else {
        speakNext();
      }
      return;
    }

    if (session && session.article !== article) {
      const previous = session;
      hardStop();
      paintIdle(previous.playBtn, previous.stopBtn, labels, previous.title);
    }

    startSession(article, thisPlay, thisStop, locale, voice, labels);
  });

  root.addEventListener('input', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement) || !target.matches('[data-readout-rate]')) return;
    const next = Number(target.value);
    if (!Number.isFinite(next)) return;
    rate = Math.min(1.1, Math.max(0.9, next));
    syncRates(root, String(rate));
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) hardStop();
  });
  window.addEventListener('pagehide', hardStop);
}
