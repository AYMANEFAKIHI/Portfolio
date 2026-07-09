const GITHUB_USERNAME = 'AYMANEFAKIHI';
const CACHE_TTL_MS = 6 * 60 * 60 * 1000; // 6 hours

let cache = null; // { data, expiresAt }

function parseContributions(html) {
  const cells = [];
  const cellRegex = /<td[^>]*data-date="(\d{4}-\d{2}-\d{2})"[^>]*id="([^"]+)"[^>]*data-level="(\d)"[^>]*class="ContributionCalendar-day"/g;
  let match;
  while ((match = cellRegex.exec(html)) !== null) {
    cells.push({ date: match[1], id: match[2], level: Number(match[3]) });
  }

  const tooltipMap = new Map();
  const tooltipRegex = /for="(contribution-day-component-[^"]+)"[^>]*>([^<]*)</g;
  while ((match = tooltipRegex.exec(html)) !== null) {
    tooltipMap.set(match[1], match[2].trim());
  }

  const contributions = cells.map(({ date, id, level }) => {
    const text = tooltipMap.get(id) || '';
    const countMatch = text.match(/^(\d+)\s+contribution/);
    const count = countMatch ? Number(countMatch[1]) : 0;
    return { date, count, level };
  });

  const rangeMatch = html.match(/data-from="(\d{4}-\d{2}-\d{2})[^"]*"\s+data-to="(\d{4}-\d{2}-\d{2})/);
  const startDate = rangeMatch ? rangeMatch[1] : contributions[0]?.date;
  const endDate = rangeMatch ? rangeMatch[2] : contributions[contributions.length - 1]?.date;

  const total = contributions.reduce((sum, c) => sum + c.count, 0);

  return { contributions, startDate, endDate, total };
}

export default async function handler(req, res) {
  if (cache && cache.expiresAt > Date.now()) {
    res.setHeader('Cache-Control', 'public, max-age=3600');
    return res.status(200).json(cache.data);
  }

  try {
    const response = await fetch(`https://github.com/users/${GITHUB_USERNAME}/contributions`, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; portfolio-bot/1.0)' },
    });

    if (!response.ok) throw new Error(`GitHub responded with ${response.status}`);

    const html = await response.text();
    const parsed = parseContributions(html);

    if (!parsed.contributions.length) throw new Error('No contribution cells parsed');

    const data = { ...parsed, username: GITHUB_USERNAME, ok: true };
    cache = { data, expiresAt: Date.now() + CACHE_TTL_MS };

    res.setHeader('Cache-Control', 'public, max-age=3600');
    return res.status(200).json(data);
  } catch (error) {
    console.error('Error in /api/github-contributions:', error);
    return res.status(200).json({ ok: false, username: GITHUB_USERNAME, contributions: [], total: 0 });
  }
}
