# SEO/GEO Visibility Loop

## Benchmark State

- Date of benchmark: 2026-06-22
- Site URL: https://zjcarpentry.com
- Locale/location: Kansas City metro, MO/KS, United States
- Search engines checked: Google-style web search via available web search; live URL checks with `curl`
- AI answer engines checked: Not directly accessible from this environment
- Target audience: Kansas City area homeowners looking for deck building, remodeling, flooring, and interior carpentry
- SEO type: Local SEO and service-area SEO
- Target services/products/topics: deck building, deck rebuilds, remodeling, basement finishing, flooring, interior carpentry, trim, built-ins, accent walls
- Priority pages: `/`, `/services/deck-building`, `/services/remodeling`, `/services/interior-carpentry`, `/service-areas/kansas-city`, `/service-areas/overland-park`, `/contact`
- Build/lint/test commands found: `npm run build`, `npm run lint`, `npm run typecheck`

## Repo Inspection

- Framework/CMS/static setup: Next.js App Router site using TypeScript and file-based routes.
- Routing structure: static pages in `app/*/page.tsx`, dynamic service pages in `app/services/[slug]/page.tsx`, dynamic service-area pages in `app/service-areas/[slug]/page.tsx`.
- Page templates: service detail template, service-area template, static landing/service/project/review/about/contact pages.
- Metadata handling: `lib/seo.ts` centralizes title, description, canonical, Open Graph, Twitter, and keywords.
- Sitemap/robots setup: `app/sitemap.ts` and `app/robots.ts` generate route lists from `company.siteUrl`, `services`, and `areas`.
- Structured data: LocalBusiness, Service, FAQPage, and BreadcrumbList helpers are present.
- Internal linking patterns: header links to key static pages and page anchors; footer links to core services; service-area pages link to related services; service pages link to related projects.
- Content structure: homepage service cards, service detail sections, FAQ blocks, project proof, reviews, service-area pages.
- Existing SEO utilities: `buildMetadata`, `localBusinessSchema`, `faqSchema`, `breadcrumbSchema`, `serviceSchema`.
- Docs/conventions: no SEO-specific docs found.

## Target Queries

| Query/question | Search intent | Best matching page on this site | Is the page indexable? | Is the page answer-ready? | Title quality | Meta description quality | H1 quality | Internal link support | Structured data present? | Source/citation strength | Traditional search visibility notes | AI answer engine visibility notes | Priority score | Recommended fix |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---:|---|
| Kansas City deck builder | Local commercial | `/services/deck-building` | Yes | Medium | Strong | Strong | Medium | Medium | Yes | Medium | Live canonical used `www` while live host redirects to apex; this can dilute canonical clarity. | FAQ and service copy help, but early concise answer could be stronger. | 95 | Align generated canonical/sitemap/schema URL host to live apex host. |
| deck rebuild Kansas City | Local commercial | `/services/deck-building` | Yes | Medium | Strong | Strong | Medium | Medium | Yes | Medium | Page targets rebuilds in copy and FAQs. | Needs a clearer one-sentence answer block near top. | 86 | Add direct answer block in a later iteration. |
| Kansas City remodeling contractor | Local commercial | `/services/remodeling` | Yes | Medium | Strong | Strong | Medium | Medium | Yes | Medium | Page has service relevance but broad remodel wording. | Needs clearer scope examples and trust signals. | 78 | Expand answer-ready remodel copy in a later iteration. |
| basement finishing Kansas City | Local commercial | `/services/remodeling` | Yes | Medium | Medium | Medium | Medium | Low | Yes | Medium | Query maps to remodeling but title does not mention basement finishing. | FAQ mentions basement finishing; top copy could be more explicit. | 73 | Consider basement-specific section or page if business priority confirms. |
| trim carpenter Kansas City | Local commercial | `/services/interior-carpentry` | Yes | Medium | Strong | Strong | Medium | Medium | Yes | Medium | Page targets trim and finish carpentry. | Needs concise definitions and examples near top. | 75 | Add answer block and stronger internal anchor text later. |
| Overland Park deck builder | Local commercial | `/service-areas/overland-park` | Yes | Low | Medium | Medium | Weak | Medium | Breadcrumb only | Low | Service-area page exists but H1 is only the city name. | Thin answer context for AI summaries. | 71 | Strengthen area H1/content in a later iteration. |
| ZJ Carpentry phone number | Brand/contact | `/contact` | Yes | High | Medium | Strong | Medium | Strong | LocalBusiness sitewide | High | Contact details are visible. | Easy to extract phone/email/service area. | 68 | Add schema phone consistency checks in later iteration. |

## Baseline Findings

1. High impact: Generated canonical, sitemap, robots sitemap reference, and LocalBusiness URL used `https://www.zjcarpentry.com`, while live requests to `www` redirect to `https://zjcarpentry.com`.
2. Medium impact: Several priority pages are service-relevant but lack compact answer blocks near the top.
3. Medium impact: Service-area page H1s are city-only, which weakens page intent for city + service queries.
4. Medium impact: Footer anchor text maps `/services/remodeling` to "Flooring" and `/services/interior-carpentry` to "Custom Build", which is less precise than the target page intent.
5. Low/medium impact: Live search result visibility and AI answer inclusion could not be directly verified from this environment; repo inspection and live metadata checks were used as the first-pass audit.

## Issue Ranking

| Issue | Impact | Confidence | Effort | Risk | Status |
|---|---|---|---|---|---|
| Canonical host mismatch between generated SEO URLs and live apex host | High | High | Small | Low | Resolved in iteration 1 |
| Missing concise answer blocks on priority service pages | Medium | High | Medium | Low | Remaining |
| Service-area H1s are city-only instead of city + service intent | Medium | Medium | Medium | Medium | Remaining |
| Footer service anchor text is imprecise | Medium | High | Small | Low | Resolved in iteration 2 |
| Need live SERP and AI-answer benchmark outside this environment | Medium | Medium | Large | Low | Blocked by tooling |

## Current Iteration

- Iteration: 2
- Selected issue: Footer service anchor text was less precise than the destination page intent.
- Why selected: It is a low-risk internal-linking fix that reinforces priority service pages with exact service language.
- Files changed: `components/site-footer.tsx`
- Validation commands run: `npm run typecheck`, `npm run build`

## Iteration History

| Iteration | Selected issue | Files changed | Result |
|---:|---|---|---|
| 1 | Canonical host mismatch | `lib/site-data.ts` | Resolved |
| 2 | Footer service anchor text | `components/site-footer.tsx` | Resolved |

## Fixes Made

- Updated `company.siteUrl` from `https://www.zjcarpentry.com` to `https://zjcarpentry.com`.
- Generated `sitemap.xml`, `robots.txt`, homepage canonical/schema, and deck-service canonical/schema now use `https://zjcarpentry.com`.
- Updated footer internal links from generic/mismatched labels to `Deck Building`, `Remodeling`, and `Interior Carpentry`.

## Validation Commands

- Passed: `npm run typecheck`
- Passed: `npm run build`
- Not run successfully: `npm run lint` fails before linting because `next lint` is treated as an invalid project directory in Next.js 16.2.1.
- Passed static inspection: `.next/server/app/sitemap.xml.body` and `.next/server/app/robots.txt.body` use the apex host.
- Passed static inspection: `.next/server/app/index.html` and `.next/server/app/services/deck-building.html` include apex-host canonical and LocalBusiness URL output.
- Note: one parallel `npm run typecheck` attempt failed while `npm run build` was regenerating `.next/types`; rerunning typecheck after build passed.

## Rerun Benchmark

| Query/question | Previous issue | After iterations | Resolved? | Next recommendation |
|---|---|---|---|---|
| Kansas City deck builder | Canonical/sitemap/schema host mismatch on best matching service page | Generated canonical, schema URL, sitemap loc, and robots sitemap now align to live apex host. | Yes | Add direct answer block to `/services/deck-building`. |
| deck rebuild Kansas City | Same host mismatch plus only medium answer-readiness | Host mismatch resolved; answer-readiness still medium. | Partially | Add concise rebuild-specific copy near top of deck page. |
| Kansas City remodeling contractor | Same host mismatch plus broad copy | Host mismatch resolved; content specificity remains next issue. | Partially | Add answer block and stronger remodel scope examples. |
| trim carpenter Kansas City | Same host mismatch plus medium answer-readiness | Host mismatch resolved; answer-readiness still medium. | Partially | Add concise finish-carpentry examples and answer block. |
| Footer internal service links | Anchor text did not match target page intent | Footer links now use exact service names. | Yes | Monitor after deploy and include in crawl check. |

## Remaining Issues

- Add concise answer-ready blocks to priority service pages.
- Strengthen city service-area page intent without creating thin doorway content.
- Run a live SERP and AI-answer benchmark with tools/accounts that can access those engines directly.

## Stop Condition Status

- No critical crawlability/indexation issues remain: Resolved for the identified canonical host mismatch; live post-deploy recheck still needed
- Every priority query maps to a clear answer-ready page: Not yet
- Priority pages have unique, intent-matched titles and descriptions: Mostly
- Internal links support priority pages: Improved; service footer links now use exact-match service labels
- Structured data is present where appropriate: Mostly
- No high-impact content gap remains in the benchmark: Not yet

## Suggested Next Iteration

Fix the next highest-confidence content issue: add concise answer-ready blocks near the top of priority service pages, starting with `/services/deck-building` for `Kansas City deck builder` and `deck rebuild Kansas City`.
