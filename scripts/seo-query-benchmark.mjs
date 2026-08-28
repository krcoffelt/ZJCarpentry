import fs from "node:fs";

const crawlPath = process.argv[2];

if (!crawlPath) {
  console.error("Usage: node scripts/seo-query-benchmark.mjs <crawl.json>");
  process.exit(1);
}

const crawl = JSON.parse(fs.readFileSync(crawlPath, "utf8"));
const pages = new Map(crawl.pages.map((page) => [page.path, page]));
const targets = [
  {
    query: "Kansas City deck builder",
    path: "/services/deck-building",
    intent: /deck builder/i,
    answer: /builds? and rebuilds? decks|builds? and rebuilds?/i,
  },
  {
    query: "deck rebuild Kansas City",
    path: "/services/deck-building",
    intent: /deck builder/i,
    answer: /rebuilds?/i,
  },
  {
    query: "Kansas City remodeling contractor",
    path: "/services/remodeling",
    intent: /remodeling contractor/i,
    answer: /interior remodels? and room updates/i,
  },
  {
    query: "basement finishing Kansas City",
    path: "/services/basement-finishing",
    intent: /basement finishing/i,
    answer: /finishes Kansas City basements/i,
  },
  {
    query: "trim carpenter Kansas City",
    path: "/services/interior-carpentry",
    intent: /interior and finish carpenter/i,
    answer: /installs trim, built-ins, accent walls/i,
  },
  {
    query: "flooring installation Kansas City",
    path: "/services/flooring",
    intent: /flooring installation/i,
    answer: /installs and replaces hardwood and resilient flooring/i,
  },
  {
    query: "Overland Park deck builder",
    path: "/service-areas/overland-park",
    intent: /deck builder.*Overland Park/i,
    answer: /builds and rebuilds decks/i,
  },
  {
    query: "ZJ Carpentry phone number",
    path: "/contact",
    intent: /call now|contact/i,
    answer: /\(913\) 314-1113/i,
  },
];

const results = targets.map((target) => {
  const page = pages.get(target.path);
  const intentText = page ? `${page.title} ${page.h1s.join(" ")}` : "";
  const passed = Boolean(
    page
      && page.status === 200
      && target.intent.test(intentText)
      && target.answer.test(page.answerFirst),
  );

  return {
    query: target.query,
    page: target.path,
    indexable: Boolean(page && page.status === 200 && !/noindex/i.test(page.robots)),
    intentMatched: target.intent.test(intentText),
    answerReady: Boolean(page && target.answer.test(page.answerFirst)),
    passed,
  };
});

console.log(JSON.stringify({
  passed: results.filter((result) => result.passed).length,
  total: results.length,
  results,
}, null, 2));
