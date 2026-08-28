# SEO/GEO Visibility Loop

## Audit scope

- Audit date: 2026-08-28
- Site: https://zjcarpentry.com
- Market: Kansas City metro, Missouri and Kansas
- Checks: crawlability, indexation, page intent, titles and descriptions, internal links, structured data, source attribution, answer-first content, traditional search, and AI answer results
- Repeatable tools: `scripts/seo-audit.mjs` and `scripts/seo-query-benchmark.mjs`

## Baseline

The production site returned HTTP 200, allowed crawling, declared an apex-host sitemap, and exposed 14 sitemap URLs. The local baseline crawl found no broken internal links or duplicate titles, but only 1 of 8 priority-query checks had both intent-matched headings and a direct answer.

Live visibility was uneven:

- Google indexed the homepage and several service pages.
- A Google AI Overview for the exact brand/service query cited the homepage, deck page, and contact page and extracted the service list and contact details correctly.
- The general web-search benchmark did not surface ZJ Carpentry for the unbranded `Kansas City deck builder` result set collected during the audit.
- Bing did not return ZJ Carpentry for the exact quoted brand/service query.
- Bing Copilot said it had no verified information for that same exact-brand query.

## Gap ranking

| Rank | Gap | Expected impact | Confidence | Resolution |
|---:|---|---|---|---|
| 1 | Flooring and basement finishing were advertised but had no dedicated answer pages | High | High | Added dedicated service pages |
| 2 | Priority service and area H1s did not directly match local search intent | High | High | Rewritten titles, H1s, and opening answers |
| 3 | City pages contained SEO/process language instead of homeowner-facing answers | High | High | Replaced with direct service summaries and real local project evidence |
| 4 | Service and city pages did not form a reciprocal internal-link graph | Medium-high | High | Added descriptive service-to-city and city-to-service links |
| 5 | Business entity data did not match the independent BBB listing | Medium-high | High | Added legal name, alternate name, Raytown locality, and BBB `sameAs` citation |
| 6 | Service schema encoded served cities as slugs and did not reference a stable business entity | Medium | High | Added business `@id`, service URLs, and City objects |
| 7 | Project claims lacked visible first-party source attribution | Medium | High | Added project-evidence sections and portfolio source links |
| 8 | Unsupported `Established 1994` claim conflicted with the public business record | Medium | High | Removed the claim |
| 9 | Quote form omitted the two new priority services | Medium | High | Added basement finishing and flooring options |

## Iterations

### Iteration 1 — intent coverage and content graph

- Added `/services/flooring` and `/services/basement-finishing`.
- Added unique SEO titles, local-intent H1s, concise opening answers, FAQs, proof points, and project examples.
- Rewrote all five service-area pages with homeowner-facing copy.
- Added location-specific project evidence to every area page.
- Added reciprocal, descriptive internal links between services and service areas.
- Added project-portfolio source attribution.

Result: sitemap increased from 14 to 16 URLs; the benchmark improved from 1/8 to 8/8.

### Iteration 2 — metadata and hub alignment

- Updated the services hub to name all five priority services.
- Shortened priority meta descriptions to 160 characters or fewer.
- Tightened Leawood and Lee's Summit opening answers.

Result: no long priority descriptions; all priority pages retained one clear H1 and unique titles.

### Iteration 3 — entity and citation quality

- Matched structured data to the verified legal name `Z&J Carpentry & More, LLC`.
- Added `ZJ Carpentry` and `Z & J Carpentry` as alternate names.
- Added the Raytown, Missouri locality and the BBB profile as a `sameAs` identity citation.
- Linked the BBB profile visibly from the About page.
- Removed the unsupported `Established 1994` badge.
- Added basement finishing and flooring to the quote form.

Result: the repo now contains a consistent, externally cited entity definition ready for deployment and recrawl.

## Final crawl

| Check | Result |
|---|---:|
| Sitemap URLs | 16 |
| Non-200 pages | 0 |
| Broken internal links | 0 |
| Duplicate titles | 0 |
| Pages without exactly one H1 | 0 |
| Missing canonicals | 0 |
| Invalid JSON-LD blocks | 0 |
| Service pages missing Service schema | 0 |
| Priority service descriptions over 160 characters | 0 |

Robots remains crawlable and declares the apex-host sitemap. Every sitemap page uses the apex-host canonical.

## Final priority-query benchmark

| Query | Answer-ready page | Indexable | Intent matched | Direct answer |
|---|---|---:|---:|---:|
| Kansas City deck builder | `/services/deck-building` | Yes | Yes | Yes |
| deck rebuild Kansas City | `/services/deck-building` | Yes | Yes | Yes |
| Kansas City remodeling contractor | `/services/remodeling` | Yes | Yes | Yes |
| basement finishing Kansas City | `/services/basement-finishing` | Yes | Yes | Yes |
| trim carpenter Kansas City | `/services/interior-carpentry` | Yes | Yes | Yes |
| flooring installation Kansas City | `/services/flooring` | Yes | Yes | Yes |
| Overland Park deck builder | `/service-areas/overland-park` | Yes | Yes | Yes |
| ZJ Carpentry phone number | `/contact` | Yes | Yes | Yes |

Final score: 8/8. Baseline score: 1/8.

## Exit criteria

- No critical crawlability or indexation defect in the built site: passed.
- Every priority query maps to a clear, answer-ready page: passed.
- Priority pages have unique intent-matched metadata and one H1: passed.
- Internal links support the service/location topic graph: passed.
- Structured data is valid and references a stable external business identity: passed.
- No high-impact repo-side content or technical gap remains: passed.

## External follow-up

Bing and Bing Copilot still fail the exact-brand benchmark against the currently deployed version. The entity and content fixes in this repository are not live yet, and the workspace is not linked to a Netlify site. After deployment, submit or refresh the sitemap in Bing Webmaster Tools and Google Search Console, then rerun the exact same Google, Google AI Overview, Bing, and Bing Copilot query. Ranking for unbranded competitive queries also depends on off-site authority, verified reviews, and recrawl time; it cannot be proven from a local build.
