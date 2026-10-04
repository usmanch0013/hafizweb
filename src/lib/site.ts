/** Current Australian financial year shown across the site */
export const CURRENT_FY = '2026-27';
export const CURRENT_FY_FULL = '2026-2027';
export const CURRENT_FY_LABEL = '2026 – 2027';
export const PREVIOUS_FY_FULL = '2025-2026';
export const PREVIOUS_FY_LABEL = '2025 – 2026';

/** WordPress blog — articles are published on this subdomain */
export const BLOG_URL = (process.env.NEXT_PUBLIC_BLOG_URL || 'https://blog.cgthub.au').replace(/\/$/, '');
export const BLOG_HREF = BLOG_URL || '/blog';
