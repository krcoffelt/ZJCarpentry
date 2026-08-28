export type QuoteRequest = {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  city: string;
  message: string;
  preferredContactMethod: "call" | "text" | "email";
  pageSource: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  submittedAt: string;
};

export type MediaAsset = {
  src: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  title: string;
  location: string;
  serviceCategory: string;
  summary: string;
  scope: string[];
  testimonial: string;
  completionWindow: string;
  featured: boolean;
  imageLabel: string;
  image: MediaAsset;
};

export type ServicePage = {
  slug: string;
  serviceName: string;
  seoTitle: string;
  heading: string;
  heroCopy: string;
  targetKeywords: string[];
  proofPoints: string[];
  intro: string;
  detailSections: { title: string; body: string }[];
  faqItems: { question: string; answer: string }[];
  relatedProjects: string[];
  servedAreas: string[];
  image: MediaAsset;
};

export type ServiceArea = {
  slug: string;
  name: string;
  heading: string;
  intro: string;
  highlights: string[];
  neighborhoods: string[];
  relatedServices: string[];
  projectSlugs: string[];
};

export const company = {
  name: "ZJ Carpentry",
  legalName: "Z&J Carpentry & More, LLC",
  alternateName: "Z & J Carpentry",
  phone: "(913) 314-1113",
  phoneHref: "tel:+19133141113",
  email: "quotes@zjcarpentry.com",
  serviceRegion: "Kansas City, MO and nearby suburbs",
  siteUrl: "https://zjcarpentry.com",
  addressLocality: "Raytown",
  addressRegion: "MO",
  sameAs: [
    "https://www.bbb.org/us/mo/raytown/profile/carpenter/zj-carpentry-more-llc-0714-1000058325",
  ],
};

export const trustSignals = [
  "Kansas City and nearby suburbs",
  "Recent work up front",
  "Fast quote follow-up",
  "Clear call-now path",
];

export const photoLibrary = {
  hero: { src: "/photos-opt/cedar-deck-platform.jpg", width: 1600, height: 1200 },
  deck: { src: "/photos-opt/stained-deck-overview.jpg", width: 1200, height: 1600 },
  deckDetail: { src: "/photos-opt/stained-deck-detail.jpg", width: 1600, height: 1200 },
  deckStairs: { src: "/photos-opt/black-rail-deck-stairs.jpg", width: 1200, height: 1600 },
  deckSteps: { src: "/photos-opt/stained-deck-steps.jpg", width: 1200, height: 1600 },
  deckAngle: { src: "/photos-opt/deck-stairs-angle.jpg", width: 1200, height: 1600 },
  frontEntryRailing: { src: "/photos-opt/front-entry-railing.jpg", width: 1200, height: 1600 },
  pergola: { src: "/photos-opt/poolside-pergola.jpg", width: 1200, height: 1600 },
  flooring: { src: "/photos-opt/herringbone-flooring.jpg", width: 1344, height: 1600 },
  remodel: { src: "/photos-opt/basement-remodel-room.jpg", width: 1600, height: 1293 },
  carpentry: { src: "/photos-opt/basement-wet-bar-cabinetry.jpg", width: 1600, height: 1212 },
  storageDoors: { src: "/photos-opt/outdoor-storage-doors.jpg", width: 1265, height: 1600 },
} as const;

export const services: ServicePage[] = [
  {
    slug: "deck-building",
    serviceName: "Deck Building",
    seoTitle: "Kansas City Deck Builder",
    heading: "Kansas City Deck Builder for New Builds and Rebuilds",
    heroCopy:
      "ZJ Carpentry builds and rebuilds decks, stairs, and railings across Kansas City in composite or pressure-treated lumber.",
    targetKeywords: [
      "Kansas City deck builder",
      "custom deck builder",
      "deck repair Kansas City",
      "composite deck installation",
    ],
    proofPoints: [
      "New builds and rebuilds",
      "Composite and treated lumber",
    ],
    intro:
      "Deck work for homeowners who want a clean quote and clear scope.",
    detailSections: [
      {
        title: "What homeowners usually ask first",
        body: "Most deck calls start with scope, materials, layout, and what the finished deck will look like with the house.",
      },
      {
        title: "Common deck projects",
        body: "New decks, rebuilds, stairs, rails, and low-maintenance upgrades are all common requests in the Kansas City area.",
      },
    ],
    faqItems: [
      {
        question: "Do you handle deck rebuilds as well as new builds?",
        answer: "Yes. The service covers new deck construction, rebuilds, replacements, stairs, rails, and targeted repairs when repair is the better option.",
      },
      {
        question: "Can I request composite decking?",
        answer: "Yes. Composite and pressure-treated options can both be quoted based on budget, maintenance goals, and the look you want.",
      },
    ],
    relatedProjects: [
      "shawnee-backyard-deck",
      "leawood-composite-deck",
      "overland-park-cedar-deck",
      "olathe-stair-railing-upgrade",
    ],
    servedAreas: ["kansas-city", "overland-park", "leawood", "olathe", "lees-summit"],
    image: photoLibrary.deck,
  },
  {
    slug: "remodeling",
    serviceName: "Remodeling",
    seoTitle: "Kansas City Remodeling Contractor",
    heading: "Kansas City Remodeling Contractor for Interior Updates",
    heroCopy:
      "ZJ Carpentry handles practical interior remodels and room updates for Kansas City homeowners, with a clear scope, estimate conversation, and next step.",
    targetKeywords: [
      "Kansas City remodeling contractor",
      "home remodel Kansas City",
      "basement finishing Kansas City",
      "home improvement contractor",
    ],
    proofPoints: [
      "Basements and interior updates",
      "Clear estimate conversations",
    ],
    intro:
      "Remodel work with straightforward scope and communication.",
    detailSections: [
      {
        title: "Scope before sales language",
        body: "Basements, room updates, and practical interior remodel projects are a strong fit for this service.",
      },
      {
        title: "What helps the estimate",
        body: "A short description of the space, goals, and timeline is enough to start the quote conversation.",
      },
    ],
    faqItems: [
      {
        question: "What remodel projects fit this service?",
        answer: "Interior remodels, basement finishing, room updates, framing changes tied to carpentry work, and practical home improvement scopes that need a reliable local contractor.",
      },
      {
        question: "How detailed should my quote request be?",
        answer: "A short summary is enough to start. The goal is to make first contact easy and gather details during follow-up.",
      },
    ],
    relatedProjects: ["kansas-city-basement-finish", "brookside-interior-remodel"],
    servedAreas: ["kansas-city", "overland-park", "olathe", "lees-summit"],
    image: photoLibrary.remodel,
  },
  {
    slug: "interior-carpentry",
    serviceName: "Interior Carpentry",
    seoTitle: "Interior and Finish Carpenter in Kansas City",
    heading: "Interior and Finish Carpenter in Kansas City",
    heroCopy:
      "ZJ Carpentry installs trim, built-ins, accent walls, and finish carpentry for Kansas City homeowners as focused projects or as part of a larger remodel.",
    targetKeywords: [
      "trim carpenter Kansas City",
      "interior carpentry Kansas City",
      "accent wall contractor",
      "LVP flooring installation",
    ],
    proofPoints: [
      "Trim, feature walls, and built-ins",
      "Standalone work or remodel add-ons",
    ],
    intro:
      "Interior carpentry for homeowners looking for a cleaner finished look.",
    detailSections: [
      {
        title: "High-intent service language",
        body: "Trim work, accent walls, built-ins, and finish upgrades are common requests for this service.",
      },
      {
        title: "Standalone or part of a remodel",
        body: "Interior carpentry can be priced as a focused project or bundled into a larger remodel.",
      },
    ],
    faqItems: [
      {
        question: "Do you take smaller interior carpentry projects?",
        answer: "Yes. Standalone trim, feature wall, and finish carpentry projects can be a fit depending on scope and schedule.",
      },
      {
        question: "Can interior work be bundled into a remodel?",
        answer: "Yes. Interior carpentry often supports a larger remodel quote and should be presented as both a standalone and add-on service.",
      },
    ],
    relatedProjects: ["prairie-village-trim-upgrade", "brookside-interior-remodel"],
    servedAreas: ["kansas-city", "leawood", "overland-park", "lees-summit"],
    image: photoLibrary.carpentry,
  },
  {
    slug: "flooring",
    serviceName: "Flooring",
    seoTitle: "Flooring Installation in Kansas City",
    heading: "Flooring Installation and Replacement in Kansas City",
    heroCopy:
      "ZJ Carpentry installs and replaces hardwood and resilient flooring for Kansas City homeowners who want a clean transition, precise layout, and finished result.",
    targetKeywords: [
      "flooring installation Kansas City",
      "hardwood flooring installation Kansas City",
      "floor replacement Kansas City",
      "LVP flooring installation Kansas City",
    ],
    proofPoints: [
      "New flooring and replacement",
      "Hardwood and resilient flooring",
    ],
    intro:
      "Floor installation and replacement with careful layout and finish details.",
    detailSections: [
      {
        title: "What the flooring service covers",
        body: "Projects can include removing or replacing an existing floor, laying out the new surface, and completing the visible transition and trim details tied to the installation.",
      },
      {
        title: "What helps the estimate",
        body: "Share the room size, current flooring, preferred material, and photos of doorways or transitions so the first estimate conversation starts with the right scope.",
      },
    ],
    faqItems: [
      {
        question: "Do you install both hardwood and LVP flooring?",
        answer: "Yes. Hardwood and resilient flooring such as LVP can be quoted based on the room, subfloor conditions, transitions, and selected material.",
      },
      {
        question: "Can flooring be included in a larger remodel?",
        answer: "Yes. Flooring can be quoted as a focused installation or coordinated with a broader interior remodeling scope.",
      },
    ],
    relatedProjects: ["brookside-interior-remodel", "prairie-village-trim-upgrade"],
    servedAreas: ["kansas-city", "overland-park", "leawood", "olathe", "lees-summit"],
    image: photoLibrary.flooring,
  },
  {
    slug: "basement-finishing",
    serviceName: "Basement Finishing",
    seoTitle: "Basement Finishing in Kansas City",
    heading: "Basement Finishing in Kansas City",
    heroCopy:
      "ZJ Carpentry finishes Kansas City basements with practical framing, trim, built-ins, and flooring planned around how the room will be used.",
    targetKeywords: [
      "basement finishing Kansas City",
      "basement remodeling Kansas City",
      "finished basement contractor Kansas City",
    ],
    proofPoints: [
      "Framing and finish carpentry",
      "Trim, built-ins, and flooring coordination",
    ],
    intro:
      "Basement finishing that turns an underused room into a practical living space.",
    detailSections: [
      {
        title: "What basement finishing can include",
        body: "A basement scope can include framing and room layout changes, interior trim, built-in storage or cabinetry, flooring, and the finish details that make the space feel complete.",
      },
      {
        title: "How to start the quote",
        body: "Send photos of the current basement and describe the rooms or functions you want. That is enough to begin a conversation about scope, materials, and sequencing.",
      },
    ],
    faqItems: [
      {
        question: "Do you finish unfinished basements and update existing finished basements?",
        answer: "Yes. Both unfinished spaces and existing basements that need a practical layout or finish update can be reviewed for a quote.",
      },
      {
        question: "Can built-ins or a wet-bar area be part of the basement project?",
        answer: "Yes. Built-in storage, cabinetry, trim, and finish carpentry can be included when they fit the overall basement scope.",
      },
    ],
    relatedProjects: ["kansas-city-basement-finish", "brookside-interior-remodel"],
    servedAreas: ["kansas-city", "overland-park", "olathe", "lees-summit"],
    image: photoLibrary.remodel,
  },
];

export const projects: Project[] = [
  {
    slug: "shawnee-backyard-deck",
    title: "Backyard Deck Rebuild",
    location: "Shawnee, KS",
    serviceCategory: "Deck Building",
    summary:
      "Rebuilt an aging backyard deck with cleaner sightlines, safer stairs, and a layout that worked better for daily use.",
    scope: ["Deck rebuild", "Stair replacement", "Railing refresh"],
    testimonial:
      "Communication was clear, the quote was straightforward, and the finished deck looked like it belonged with the house.",
    completionWindow: "Spring project",
    featured: true,
    imageLabel: "Deck rebuild",
    image: photoLibrary.deck,
  },
  {
    slug: "leawood-composite-deck",
    title: "Front Porch Railing Upgrade",
    location: "Leawood, KS",
    serviceCategory: "Deck Building",
    summary:
      "Updated a front porch with new rails, posts, and finish details that gave the entry a cleaner, more finished look.",
    scope: ["Porch rebuild", "Railing install", "Finish detailing"],
    testimonial:
      "The project felt organized from the first conversation through the final walkthrough.",
    completionWindow: "Summer project",
    featured: true,
    imageLabel: "Front porch rebuild",
    image: photoLibrary.frontEntryRailing,
  },
  {
    slug: "overland-park-cedar-deck",
    title: "Cedar Deck Refresh",
    location: "Overland Park, KS",
    serviceCategory: "Deck Building",
    summary:
      "Built out a cedar deck surface with updated rails and a cleaner finished layout for everyday backyard use.",
    scope: ["Deck resurfacing", "Railing install", "Stain-ready finish"],
    testimonial:
      "The new deck looks clean, the rail lines are sharp, and the whole space feels much more finished than before.",
    completionWindow: "Recent project",
    featured: false,
    imageLabel: "Cedar deck",
    image: photoLibrary.deckDetail,
  },
  {
    slug: "olathe-stair-railing-upgrade",
    title: "Deck Stair And Railing Upgrade",
    location: "Olathe, KS",
    serviceCategory: "Deck Building",
    summary:
      "Updated deck access with new stairs, rails, and a more polished connection from the house to the yard.",
    scope: ["Stair rebuild", "Metal balusters", "Deck transition work"],
    testimonial:
      "The stairs feel solid, the rail layout looks better, and the finished build cleaned up the whole back entry.",
    completionWindow: "Recent project",
    featured: false,
    imageLabel: "Deck stairs",
    image: photoLibrary.deckAngle,
  },
  {
    slug: "lees-summit-poolside-pergola",
    title: "Poolside Pergola Install",
    location: "Lee's Summit, MO",
    serviceCategory: "Deck Building",
    summary:
      "Installed a modern outdoor shade structure that made the patio and pool area more usable for entertaining.",
    scope: ["Pergola install", "Outdoor structure layout", "Patio integration"],
    testimonial:
      "The finished structure changed the whole backyard and gave us a much more functional outdoor space.",
    completionWindow: "Recent project",
    featured: false,
    imageLabel: "Outdoor pergola",
    image: photoLibrary.pergola,
  },
  {
    slug: "kansas-city-basement-finish",
    title: "Finished Basement Update",
    location: "Kansas City, MO",
    serviceCategory: "Remodeling",
    summary:
      "Converted an underused basement into a more functional space with practical carpentry updates and a cleaner layout.",
    scope: ["Basement finishing", "Framing carpentry", "Interior trim"],
    testimonial:
      "We needed a contractor who would explain the process well, and that is exactly what made us comfortable moving forward.",
    completionWindow: "Winter project",
    featured: true,
    imageLabel: "Basement remodel",
    image: photoLibrary.remodel,
  },
  {
    slug: "brookside-interior-remodel",
    title: "Basement Wet Bar Cabinetry",
    location: "Brookside, Kansas City",
    serviceCategory: "Interior Carpentry",
    summary:
      "Added built-in cabinetry and finish details that gave the basement a more usable, polished layout.",
    scope: ["Custom cabinetry", "Finish carpentry", "Built-in storage"],
    testimonial:
      "The finish work looked clean, the installation stayed organized, and the basement feels much more complete now.",
    completionWindow: "Recent project",
    featured: false,
    imageLabel: "Built-in cabinetry",
    image: photoLibrary.carpentry,
  },
  {
    slug: "prairie-village-trim-upgrade",
    title: "Outdoor Storage Enclosure Build",
    location: "Prairie Village, KS",
    serviceCategory: "Interior Carpentry",
    summary:
      "Built a custom exterior storage enclosure with fitted doors and finish details matched to the existing structure.",
    scope: ["Custom framing", "Door install", "Exterior finish work"],
    testimonial:
      "The quote process was straightforward and the finished enclosure looked like it belonged there from the start.",
    completionWindow: "Recent project",
    featured: false,
    imageLabel: "Storage enclosure",
    image: photoLibrary.storageDoors,
  },
];

export const areas: ServiceArea[] = [
  {
    slug: "kansas-city",
    name: "Kansas City",
    heading: "Deck Building, Remodeling, and Carpentry in Kansas City",
    intro:
      "ZJ Carpentry serves Kansas City homeowners with deck building and rebuilds, basement finishing, flooring, remodeling, and interior finish carpentry.",
    highlights: [
      "New decks, rebuilds, stairs, and railings",
      "Basement finishing and practical interior remodels",
      "Trim, built-ins, accent walls, and flooring",
    ],
    neighborhoods: ["Brookside", "Waldo", "Northland", "South Kansas City"],
    relatedServices: ["deck-building", "basement-finishing", "remodeling", "interior-carpentry", "flooring"],
    projectSlugs: ["kansas-city-basement-finish", "brookside-interior-remodel"],
  },
  {
    slug: "overland-park",
    name: "Overland Park",
    heading: "Deck Builder and Remodeling Contractor in Overland Park",
    intro:
      "ZJ Carpentry builds and rebuilds decks and handles remodeling, basement, flooring, and finish-carpentry projects for Overland Park homeowners.",
    highlights: [
      "Deck builds, rebuilds, stairs, and railings",
      "Interior remodel and basement updates",
      "Finish carpentry and flooring installation",
    ],
    neighborhoods: ["Downtown Overland Park", "Blue Valley", "Nottingham"],
    relatedServices: ["deck-building", "basement-finishing", "remodeling", "interior-carpentry", "flooring"],
    projectSlugs: ["overland-park-cedar-deck"],
  },
  {
    slug: "leawood",
    name: "Leawood",
    heading: "Deck Building and Finish Carpentry in Leawood",
    intro:
      "ZJ Carpentry serves Leawood homeowners with deck building, porch and railing work, flooring, built-ins, trim, and other finish-carpentry projects.",
    highlights: [
      "Composite and pressure-treated deck options",
      "Porch rails, stairs, and outdoor finish work",
      "Built-ins, trim, accent walls, and flooring",
    ],
    neighborhoods: ["Old Leawood", "Mission Farms", "Hallbrook"],
    relatedServices: ["deck-building", "interior-carpentry", "flooring"],
    projectSlugs: ["leawood-composite-deck"],
  },
  {
    slug: "olathe",
    name: "Olathe",
    heading: "Deck Building and Remodeling in Olathe",
    intro:
      "ZJ Carpentry serves Olathe homeowners with deck building and rebuilds, basement finishing, remodeling, and flooring projects.",
    highlights: [
      "Deck stairs, rails, rebuilds, and new construction",
      "Basement finishing and interior remodeling",
      "Flooring installation and finish details",
    ],
    neighborhoods: ["Forest View", "Cedar Creek", "Downtown Olathe"],
    relatedServices: ["deck-building", "basement-finishing", "remodeling", "flooring"],
    projectSlugs: ["olathe-stair-railing-upgrade"],
  },
  {
    slug: "lees-summit",
    name: "Lee's Summit",
    heading: "Deck Builder and Remodeling Contractor in Lee's Summit",
    intro:
      "ZJ Carpentry serves Lee's Summit homeowners with decks, pergolas, basement finishing, remodeling, flooring, and interior finish carpentry.",
    highlights: [
      "Decks, pergolas, stairs, and railing projects",
      "Basement finishing and interior remodels",
      "Trim, built-ins, and flooring installation",
    ],
    neighborhoods: ["Raintree Lake", "Downtown Lee's Summit", "Lakewood"],
    relatedServices: ["deck-building", "basement-finishing", "remodeling", "interior-carpentry", "flooring"],
    projectSlugs: ["lees-summit-poolside-pergola"],
  },
];

export const reviews = [
  {
    name: "Kansas City deck client",
    quote:
      "The quote was clear, the schedule stayed on track, and the finished deck looks like it belongs with the house.",
  },
  {
    name: "Overland Park remodel client",
    quote:
      "We were looking for a contractor who communicated well and kept the project moving. That is exactly what we got.",
  },
  {
    name: "Leawood flooring client",
    quote:
      "The floors completely changed the feel of the space, and the work area was kept much cleaner than we expected.",
  },
  {
    name: "Olathe deck rebuild client",
    quote:
      "From the first call to the final walkthrough, everything felt professional and organized. No surprises, no runaround.",
  },
  {
    name: "Brookside interior carpentry client",
    quote:
      "We wanted built-ins that looked intentional and finished, and the final result came out exactly how we hoped.",
  },
  {
    name: "Lee's Summit homeowner",
    quote:
      "It was easy to get questions answered, the crew showed up when expected, and the finished work looks great.",
  },
];

export const faqs = [
  {
    question: "What services are the main focus of the site?",
    answer:
      "Deck building, remodeling, and interior carpentry are the primary service clusters because they align with homeowner demand and the strongest trust-building content structure.",
  },
  {
    question: "Do you work outside Kansas City itself?",
    answer:
      "Yes. Service covers Kansas City and nearby suburbs including Overland Park, Leawood, Olathe, and Lee's Summit.",
  },
  {
    question: "What is the fastest way to get in touch?",
    answer:
      "Call now if you want immediate contact. Use the short quote form if you want a fast follow-up with project details included.",
  },
];

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getArea(slug: string) {
  return areas.find((area) => area.slug === slug);
}

export function getRelatedProjects(slugs: string[]) {
  return projects.filter((project) => slugs.includes(project.slug));
}
