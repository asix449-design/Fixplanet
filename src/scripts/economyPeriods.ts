import {
  CHART_H,
  CHART_W,
  changeOf,
  chartPath,
  direction,
  formatChange,
  sparkPath,
  sparkTail,
} from '../lib/economySeries.mjs';

interface PeriodSlot {
  values: (number | null)[];
  breaks?: boolean[];
  highlight?: boolean;
  compare: number[];
  since: string;
  dateLine: string;
  value: string;
  raw: number;
  decimals: number;
}

interface TilePayload {
  changeTemplate: string;
  locale: string;
  periods: Record<string, PeriodSlot>;
}

interface ChartRange {
  low: string;
  lowMonth: string;
  high: string;
  highMonth: string;
}

interface ChartSlot {
  series: (number | null)[][];
  breaks: boolean[][];
  top: number;
  topText: string;
  fromYear: string;
  toYear: string;
  ranges: ChartRange[];
}

function readJson<T>(node: Element | null): T | null {
  if (!node?.textContent) return null;
  return JSON.parse(node.textContent) as T;
}

function setCell(cell: Element, value: string, month: string) {
  cell.replaceChildren();
  cell.append(value, ' ');
  const date = document.createElement('span');
  date.className = 'economy-cell-date';
  date.textContent = month;
  cell.append(date);
}

function applyTile(article: Element, period: string) {
  const data = readJson<TilePayload>(article.querySelector('.economy-tile-data'));
  const slot = data?.periods[period];
  if (!data || !slot) return;
  const change = changeOf(slot.compare);
  const changeEl = article.querySelector('.economy-tile-change');
  if (changeEl) {
    changeEl.textContent = data.changeTemplate
      .replace('{change}', formatChange(change.abs, change.pct, slot.decimals, data.locale))
      .replace('{date}', slot.since);
    changeEl.setAttribute('data-dir', direction(change.abs));
  }
  const dateEl = article.querySelector('.economy-tile-date');
  if (dateEl) dateEl.textContent = slot.dateLine;
  const valueEl = article.querySelector('.economy-tile-value data');
  if (valueEl) {
    valueEl.textContent = slot.value;
    valueEl.setAttribute('value', String(slot.raw));
  }
  const svg = article.querySelector('.economy-spark');
  const path = svg?.querySelector('path:not(.economy-spark-tail)');
  path?.setAttribute('d', sparkPath(slot.values, slot.breaks));
  let tail = svg?.querySelector('.economy-spark-tail');
  if (slot.highlight) {
    if (!tail && svg) {
      tail = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      tail.setAttribute('class', 'economy-spark-tail');
      tail.setAttribute('vector-effect', 'non-scaling-stroke');
      svg.append(tail);
    }
    tail?.setAttribute('d', sparkTail(slot.values));
  } else if (tail) {
    tail.remove();
  }
}

function applyChart(figure: Element, period: string) {
  const data = readJson<{ periods: Record<string, ChartSlot> }>(figure.querySelector('.economy-chart-data'));
  const slot = data?.periods[period];
  if (!slot) return;
  const paths = figure.querySelectorAll('.economy-chart-plot path');
  slot.series.forEach((values, index) => {
    paths[index]?.setAttribute('d', chartPath(values, slot.breaks[index], CHART_W, CHART_H, slot.top));
  });
  const top = figure.querySelector('.economy-chart-top');
  if (top) top.textContent = slot.topText;
  const years = figure.querySelectorAll('.economy-chart-years span');
  if (years[0]) years[0].textContent = slot.fromYear;
  if (years[1]) years[1].textContent = slot.toYear;
  const rows = figure.querySelectorAll('.economy-chart-range tbody tr');
  slot.ranges.forEach((range, index) => {
    const cells = rows[index]?.querySelectorAll('td');
    if (!cells || cells.length < 2) return;
    setCell(cells[0], range.low, range.lowMonth);
    setCell(cells[1], range.high, range.highMonth);
  });
}

function bindPeriods(root: ParentNode = document) {
  const group = root.querySelector('.economy-periods');
  if (!group) return;
  const buttons = [...group.querySelectorAll<HTMLButtonElement>('button[data-period]')];
  const paint = (period: string) => {
    root.querySelectorAll('.economy-tile').forEach((tile) => applyTile(tile, period));
    root.querySelectorAll('.economy-chart').forEach((chart) => applyChart(chart, period));
    buttons.forEach((button) => {
      button.setAttribute('aria-pressed', button.dataset.period === period ? 'true' : 'false');
    });
  };
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      if (button.disabled || !button.dataset.period) return;
      paint(button.dataset.period);
    });
  });
}

bindPeriods();
