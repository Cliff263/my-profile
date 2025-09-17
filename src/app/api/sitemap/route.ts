import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://cliffjaure.dev';
  
  const staticPages = [
    '',
    '/projects/aiivr-demo',
    '/projects/fyndr', 
    '/projects/shiny-couscous',
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
    .map((page) => {
      const url = `${baseUrl}${page}`;
      const priority = page === '' ? '1.0' : '0.8';
      const changefreq = page === '' ? 'weekly' : 'monthly';
      
      return `
  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
