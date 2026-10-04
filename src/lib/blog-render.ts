/** Escape HTML entities in user content */
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Detect stored HTML from the rich text editor */
export function isHtmlContent(content: string): boolean {
  return /<(p|h[1-6]|ul|ol|li|blockquote|div|img|strong|em|br)\b/i.test(content.trim());
}

/** Strip HTML tags for word counts and SEO analysis */
export function stripHtml(content: string): string {
  return content
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Simple markdown-like renderer for blog body text */
export function renderBlogContent(content: string): string {
  if (!content.trim()) return '';
  if (isHtmlContent(content)) return content;
  const lines = content.split('\n');
  const html: string[] = [];
  let inList = false;

  const closeList = () => {
    if (inList) {
      html.push('</ul>');
      inList = false;
    }
  };

  const inline = (text: string) =>
    escapeHtml(text)
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/`(.+?)`/g, '<code class="rounded bg-slate-100 px-1 py-0.5 text-sm text-teal-800">$1</code>');

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed) {
      closeList();
      continue;
    }

    if (trimmed.startsWith('### ')) {
      closeList();
      html.push(`<h3>${inline(trimmed.slice(4))}</h3>`);
    } else if (trimmed.startsWith('## ')) {
      closeList();
      html.push(`<h2>${inline(trimmed.slice(3))}</h2>`);
    } else if (trimmed.startsWith('# ')) {
      closeList();
      html.push(`<h2>${inline(trimmed.slice(2))}</h2>`);
    } else if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      if (!inList) {
        html.push('<ul>');
        inList = true;
      }
      html.push(`<li>${inline(trimmed.slice(2))}</li>`);
    } else {
      closeList();
      html.push(`<p>${inline(trimmed)}</p>`);
    }
  }

  closeList();
  return html.join('\n');
}
