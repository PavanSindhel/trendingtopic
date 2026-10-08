import { trends } from '../data/trends';
import { news } from '../data/news';
import { periods } from '../data/trends';

export function GET() {
  const root = 'https://trendingnews.vercel.app';
  const urls = [
    `${root}/`,
    `${root}/search`,
    ...periods.map((period) => `${root}${period.href}`),
    ...trends.map((topic) => `${root}/topic/${topic.slug}`),
    ...news.map((item) => `${root}/news/${item.slug}`),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map((url) => `<url><loc>${url}</loc></url>`).join('')}</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
