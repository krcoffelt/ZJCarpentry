const baseUrl = new URL(process.argv[2] || "http://127.0.0.1:3210");

function decode(text) {
  return text
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&apos;|&#x27;|&#39;/g, "'")
    .replace(/&quot;|&#x22;/g, '"')
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function firstMatch(html, pattern) {
  return html.match(pattern)?.[1]?.trim() || "";
}

function allMatches(html, pattern) {
  return [...html.matchAll(pattern)].map((match) => match[1]);
}

async function fetchText(url) {
  const response = await fetch(url, { redirect: "follow" });
  return {
    status: response.status,
    url: response.url,
    text: await response.text(),
  };
}

const robotsResult = await fetchText(new URL("/robots.txt", baseUrl));
const sitemapResult = await fetchText(new URL("/sitemap.xml", baseUrl));
const sitemapUrls = allMatches(sitemapResult.text, /<loc>([^<]+)<\/loc>/gi);
const paths = sitemapUrls.map((url) => new URL(url).pathname);
const pages = [];
const internalTargets = new Set();

for (const path of paths) {
  const result = await fetchText(new URL(path, baseUrl));
  const html = result.text;
  const title = decode(firstMatch(html, /<title[^>]*>([\s\S]*?)<\/title>/i));
  const description = firstMatch(
    html,
    /<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["'][^>]*>/i,
  ) || firstMatch(
    html,
    /<meta[^>]+content=["']([^"']*)["'][^>]+name=["']description["'][^>]*>/i,
  );
  const canonical = firstMatch(
    html,
    /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["'][^>]*>/i,
  ) || firstMatch(
    html,
    /<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["'][^>]*>/i,
  );
  const robots = firstMatch(
    html,
    /<meta[^>]+name=["']robots["'][^>]+content=["']([^"']+)["'][^>]*>/i,
  );
  const h1s = allMatches(html, /<h1\b[^>]*>([\s\S]*?)<\/h1>/gi).map(decode);
  const bodyText = decode(firstMatch(html, /<main\b[^>]*>([\s\S]*?)<\/main>/i));
  const links = allMatches(html, /<a\b[^>]+href=["']([^"'#]+)["']/gi);
  const schemaTypes = [];

  for (const json of allMatches(html, /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      const data = JSON.parse(json.replace(/&quot;/g, '"'));
      if (data?.["@type"]) schemaTypes.push(data["@type"]);
    } catch {
      schemaTypes.push("INVALID_JSON_LD");
    }
  }

  for (const href of links) {
    const target = new URL(href, baseUrl);
    if (target.origin === baseUrl.origin) internalTargets.add(target.pathname);
  }

  pages.push({
    path,
    status: result.status,
    finalPath: new URL(result.url).pathname,
    title,
    titleLength: title.length,
    description,
    descriptionLength: description.length,
    canonical,
    robots: robots || "index,follow (implicit)",
    h1s,
    wordCount: bodyText ? bodyText.split(/\s+/).length : 0,
    internalLinkCount: links.filter((href) => new URL(href, baseUrl).origin === baseUrl.origin).length,
    schemaTypes,
    answerFirst: bodyText.slice(0, 450),
  });
}

const brokenInternalLinks = [];
for (const path of internalTargets) {
  const response = await fetch(new URL(path, baseUrl), { redirect: "manual" });
  if (response.status >= 400) brokenInternalLinks.push({ path, status: response.status });
}

const duplicateTitles = Object.entries(
  Object.groupBy(pages, (page) => page.title),
).filter(([title, matches]) => title && matches.length > 1)
  .map(([title, matches]) => ({ title, paths: matches.map((page) => page.path) }));

console.log(JSON.stringify({
  baseUrl: baseUrl.toString(),
  robots: {
    status: robotsResult.status,
    allowsAll: /User-Agent:\s*\*[\s\S]*Allow:\s*\//i.test(robotsResult.text),
    sitemapDeclared: /Sitemap:\s*https?:\/\//i.test(robotsResult.text),
  },
  sitemap: { status: sitemapResult.status, urlCount: sitemapUrls.length },
  duplicateTitles,
  brokenInternalLinks,
  pages,
}, null, 2));
