import { slugify } from './blog-types';
import { renderBlogContent, stripHtml } from './blog-render';

export interface BlogHeading {
  id: string;
  text: string;
  level: 2 | 3;
}

export function addHeadingIds(html: string): { html: string; headings: BlogHeading[] } {
  const headings: BlogHeading[] = [];
  const usedIds = new Map<string, number>();

  const withIds = html.replace(/<h([23])([^>]*)>([\s\S]*?)<\/h\1>/gi, (match, level, attrs, inner) => {
    const text = stripHtml(inner).trim();
    if (!text) return match;

    const base = slugify(text) || `section-${headings.length + 1}`;
    const count = usedIds.get(base) ?? 0;
    usedIds.set(base, count + 1);
    const id = count > 0 ? `${base}-${count + 1}` : base;

    headings.push({ id, text, level: Number(level) as 2 | 3 });

    if (/\bid\s*=/.test(attrs)) {
      return match.replace(/\bid\s*=\s*["'][^"']*["']/i, ` id="${id}"`);
    }

    return `<h${level}${attrs} id="${id}">${inner}</h${level}>`;
  });

  return { html: withIds, headings };
}

export function prepareBlogHtml(content: string): { html: string; headings: BlogHeading[] } {
  const rendered = renderBlogContent(content);
  return addHeadingIds(rendered);
}
