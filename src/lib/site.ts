/** Current Australian financial year shown across the site */
export const CURRENT_FY = '2026-27';
export const CURRENT_FY_FULL = '2026-2027';
export const CURRENT_FY_LABEL = '2026 – 2027';
export const PREVIOUS_FY_FULL = '2025-2026';
export const PREVIOUS_FY_LABEL = '2025 – 2026';

/** WordPress blog — articles are authored on this subdomain, displayed on the main domain */
export const BLOG_URL = (process.env.NEXT_PUBLIC_BLOG_URL || 'https://blog.cgthub.au').replace(/\/$/, '');
/** Articles live on the main domain at /blog/{slug}/ — the subdomain is noindexed. */
export const BLOG_HREF = '/blog';
