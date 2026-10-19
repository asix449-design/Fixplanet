const WIDGET = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js';

const TV_LOCALES: Record<string, string> = { en: 'en', ru: 'ru', pl: 'pl', lv: 'en' };

function loadQuote(card: HTMLElement) {
  if (card.dataset.loaded === 'true') return;
  const frame = card.querySelector('.economy-quote-frame');
  const symbol = card.dataset.symbol;
  if (!frame || !symbol) return;
  card.dataset.loaded = 'true';
  const name = card.dataset.name || symbol;
  const locale = TV_LOCALES[card.dataset.locale || 'en'] || 'en';
  frame.replaceChildren();
  const widget = document.createElement('div');
  widget.className = 'tradingview-widget-container__widget';
  const script = document.createElement('script');
  script.src = WIDGET;
  script.async = true;
  script.type = 'text/javascript';
  script.textContent = JSON.stringify({
    symbols: [[name, symbol]],
    chartOnly: false,
    width: '100%',
    height: 400,
    locale,
    colorTheme: 'dark',
    isTransparent: true,
  });
  frame.append(widget, script);
  const button = card.querySelector<HTMLButtonElement>('.economy-quote-load');
  if (button) button.hidden = true;
}

function bindQuotes(root: ParentNode = document) {
  root.querySelectorAll<HTMLElement>('.economy-quote').forEach((card) => {
    card.querySelector('.economy-quote-load')?.addEventListener('click', () => loadQuote(card));
  });
  const all = root.querySelector('.economy-quote-all');
  all?.addEventListener('click', () => {
    root.querySelectorAll<HTMLElement>('.economy-quote').forEach((card) => loadQuote(card));
    if (all instanceof HTMLButtonElement) all.hidden = true;
  });
}

bindQuotes();
