/**
 * Safe markdown for border-era essays: paragraphs, ### headings, bold, italic.
 * HTML in the source is escaped — nothing is injected raw.
 */

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderInline(value: string): string {
  let html = escapeHtml(value);
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/__(.+?)__/g, '<strong>$1</strong>');
  html = html.replace(/(^|[^*])\*(?!\*)([^*]+)\*(?!\*)/g, '$1<em>$2</em>');
  html = html.replace(/(^|[^_])_(?!_)([^_]+)_(?!_)/g, '$1<em>$2</em>');
  return html;
}

export function renderSafeMarkdown(source: string): string {
  const text = source.replace(/\r\n/g, '\n').trim();
  if (!text) return '';

  const html: string[] = [];
  let paragraph: string[] = [];

  const flushParagraph = () => {
    if (!paragraph.length) return;
    const joined = paragraph.join(' ').replace(/\s+/g, ' ').trim();
    if (joined) html.push(`<p>${renderInline(joined)}</p>`);
    paragraph = [];
  };

  for (const raw of text.split('\n')) {
    const heading = raw.match(/^###\s+(.+)$/);
    if (heading) {
      flushParagraph();
      html.push(`<h3>${renderInline(heading[1].trim())}</h3>`);
      continue;
    }
    if (raw.trim() === '') {
      flushParagraph();
      continue;
    }
    paragraph.push(raw.trim());
  }

  flushParagraph();
  return html.join('');
}
