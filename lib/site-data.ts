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
  imageUrl: string;
};

export type ServicePage = {
  slug: string;
  serviceName: string;
  heroCopy: string;
  targetKeywords: string[];
  proofPoints: string[];
  intro: string;
  detailSections: { title: string; body: string }[];
  faqItems: { question: string; answer: string }[];
  relatedProjects: string[];
  servedAreas: string[];
  imageUrl: string;
};

export type ServiceArea = {
  slug: string;
  name: string;
  intro: string;
  highlights: string[];
  neighborhoods: string[];
  relatedServices: string[];
};

export const company = {
  name: "ZJ Carpentry",
  legalName: "ZJ Carpentry",
  phone: "(913) 314-1113",
  phoneHref: "tel:+19133141113",
  email: "quotes@zjcarpentry.com",
  serviceRegion: "Kansas City, MO and nearby suburbs",
  siteUrl: "https://www.zjcarpentry.com",
  addressLocality: "Kansas City",
  addressRegion: "MO",
  sameAs: [
    "https://www.google.com/search?q=ZJ+Carpentry+Kansas+City",
  ],
};

export const trustSignals = [
  "Kansas City and nearby suburbs",
  "Recent work up front",
  "Fast quote follow-up",
  "Clear call-now path",
];

export const photoLibrary = {
  hero:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDX-an0PT6ENhvxt2B71ditoNbr7XCsSOy1-hxD9C3XDGgxxeA3q_4w3tBg-23XtqZjXMvcTFF_HnfAvVLAcFv-HRAUsd6TP3dybxSG-4CVUNpBC1TCILAZo6VHUEUWQPanxPIaJ0adibI4WMCDx_3-w9W9sb4slRuxeLwC4PMPbvMeEijHRKVB2KnL1fBlnIPZZ7R6SuYntDieLYqEbH7QGeAQN2iGFYfQLHgiLdhrY7jsGYKlB5MQkXn-J5fGz3-NIXXwEjLxvxU",
  deck:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB04IF3Z7mAPh8xhUecXY669l9aBgHpKnsY0DyB9BhjFG7fJ2-GNP05Ch3qOcWYrcCYqWSYb6-S2h57PX7eBCc9MgUdzMf-hmqoFNxIkgkpg7QB-FoKxetiK7r-U0zBAu2iQM2-q1lse6j6_2sqs0cuSNmcD8ou8Z85Iw_54qohOowHup18gV88AKkIyc_XQrMDjBhVO0xXEVejxbkS7avSQg-Svh6h7NEUB8ZW98rz1pzUpEJU9aq_dtTKwbvb08w8lj5RGKa6q7c",
  flooring:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDXdRjrRoirk0e8kJ8ruvbcOf7cUWmXMawS4qsBsVArrxlW_uWPSspFg3t7lpd-KCeg6_DeYEalcdYbysJVOUA4YZqN7r0h9PENlFir1l3Oh8l7pPdO6LVHduHQaopGwmFVJwywkrfqdqzC1s8oWqyk4GdQ_LaX0_lbLHtynesqQ6XTWjiIclswzily7c15hWeLNGEzI7kOWUUU7a4UBCTg0JZ9N4ROnwIV_KVyaw_a9gKQYyZ2vth4e-BTn5GMe7pIzyjnApODWyA",
  carpentry:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBry9pwePkb07gisx4wjtyyvcZUQ6poA0yJVlp-KoqmitZqXM-2JUtFpR6Q9QkQ4g4ZQ_BNDN6ku545VDb1aRYCY0maIdF7QlKRyfnvSCkct-_OE3Z308eSAOwN_f2p9LTks6Wx90K2_i7RO3VakO-Ka--q5ag05-7KTRe3QNvFvaqYhZBz4nhZr5gKJcpmwT8EU8f9dhgUs3yxLML-kcrTRh5xop59_2prXHhsPNHLKC1j0T8bjdJEQpO3Opqu9-c51vOcPPkdqHY",
} as const;

export const services: ServicePage[] = [
  {
    slug: "deck-building",
    serviceName: "Deck Building",
    heroCopy:
      "Deck builds, rebuilds, stairs, and rails for Kansas City homeowners who want a clean quote and visible recent work.",
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
    relatedProjects: ["shawnee-backyard-deck", "leawood-composite-deck"],
    servedAreas: ["kansas-city", "overland-park", "leawood", "olathe", "lees-summit"],
    imageUrl: photoLibrary.deck,
  },
  {
    slug: "remodeling",
    serviceName: "Remodeling",
    heroCopy:
      "Remodel work for Kansas City homeowners who want clear scope, clean communication, and a straightforward next step.",
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
    imageUrl: photoLibrary.flooring,
  },
  {
    slug: "interior-carpentry",
    serviceName: "Interior Carpentry",
    heroCopy:
      "Trim, built-ins, accent walls, and finish carpentry for homeowners who want cleaner interiors and a polished result.",
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
    imageUrl: photoLibrary.carpentry,
  },
];

export const projects: Project[] = [
  {
    slug: "shawnee-backyard-deck",
    title: "Backyard deck rebuild with updated stairs",
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
    imageUrl: photoLibrary.deck,
  },
  {
    slug: "leawood-composite-deck",
    title: "Composite deck upgrade for lower-maintenance outdoor use",
    location: "Leawood, KS",
    serviceCategory: "Deck Building",
    summary:
      "Replaced a worn deck with a composite system designed for cleaner upkeep and a more polished backyard finish.",
    scope: ["Composite deck install", "Rail integration", "Finish detailing"],
    testimonial:
      "The project felt organized from the first conversation through the final walkthrough.",
    completionWindow: "Summer project",
    featured: true,
    imageLabel: "Composite deck",
    imageUrl: photoLibrary.deck,
  },
  {
    slug: "kansas-city-basement-finish",
    title: "Basement finish planned around family use",
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
    imageUrl: photoLibrary.flooring,
  },
  {
    slug: "brookside-interior-remodel",
    title: "Interior refresh with trim, feature wall, and finishing work",
    location: "Brookside, Kansas City",
    serviceCategory: "Interior Carpentry",
    summary:
      "Updated a lived-in interior with trim work, a feature wall, and finish details that made the home feel more complete.",
    scope: ["Accent wall", "Trim carpentry", "Finish work"],
    testimonial:
      "The team showed up professionally, kept the work area controlled, and delivered the kind of finish detail we were looking for.",
    completionWindow: "Recent project",
    featured: false,
    imageLabel: "Interior carpentry",
    imageUrl: photoLibrary.carpentry,
  },
  {
    slug: "prairie-village-trim-upgrade",
    title: "Trim and finish upgrade for a cleaner interior look",
    location: "Prairie Village, KS",
    serviceCategory: "Interior Carpentry",
    summary:
      "Added trim details and finish carpentry upgrades that gave the main living spaces a more intentional look.",
    scope: ["Trim install", "Finish carpentry", "Punch-list cleanup"],
    testimonial:
      "The quote process was easy, the workmanship was clean, and the final result made the whole room look better.",
    completionWindow: "Recent project",
    featured: false,
    imageLabel: "Trim carpentry",
    imageUrl: photoLibrary.carpentry,
  },
];

export const areas: ServiceArea[] = [
  {
    slug: "kansas-city",
    name: "Kansas City",
    intro:
      "Primary local service area for deck building, remodeling, and interior carpentry with an emphasis on fast response and practical project planning.",
    highlights: [
      "Strong fit for homeowners comparing local deck builders and remodelers",
      "Flexible support for interior upgrades and punch-list style carpentry work",
      "Pages written to support city-level SEO and conversion intent",
    ],
    neighborhoods: ["Brookside", "Waldo", "Northland", "South Kansas City"],
    relatedServices: ["deck-building", "remodeling", "interior-carpentry"],
  },
  {
    slug: "overland-park",
    name: "Overland Park",
    intro:
      "Service area page for homeowners looking for a dependable contractor for deck builds, remodel projects, and finish carpentry upgrades.",
    highlights: [
      "Deck and backyard improvement demand",
      "Strong remodel and finish-carpentry homeowner search intent",
      "Clear CTA path for calls and quote requests",
    ],
    neighborhoods: ["Downtown Overland Park", "Blue Valley", "Nottingham"],
    relatedServices: ["deck-building", "remodeling", "interior-carpentry"],
  },
  {
    slug: "leawood",
    name: "Leawood",
    intro:
      "Leawood homeowners often want polished project execution, recent work examples, and a clean estimate process before committing.",
    highlights: [
      "Strong fit for composite decks and finish-focused upgrades",
      "Useful page for intent around trust and professionalism",
      "Supports local service relevance without thin doorway content",
    ],
    neighborhoods: ["Old Leawood", "Mission Farms", "Hallbrook"],
    relatedServices: ["deck-building", "interior-carpentry"],
  },
  {
    slug: "olathe",
    name: "Olathe",
    intro:
      "Olathe service area page focused on practical carpentry, remodel planning, and outdoor living projects with straightforward communication.",
    highlights: [
      "Deck demand supported by suburban backyard project intent",
      "Remodel messaging tied to reliability and process",
      "Useful expansion page in the KC suburban cluster",
    ],
    neighborhoods: ["Forest View", "Cedar Creek", "Downtown Olathe"],
    relatedServices: ["deck-building", "remodeling"],
  },
  {
    slug: "lees-summit",
    name: "Lee's Summit",
    intro:
      "Lee's Summit homeowners looking for decks, remodels, or interior upgrades can use this page to find the right service fast.",
    highlights: [
      "Good fit for deck, basement, and trim-intent pages",
      "Local page supports conversion from suburb-specific searches",
      "Built to expand with project examples over time",
    ],
    neighborhoods: ["Raintree Lake", "Downtown Lee's Summit", "Lakewood"],
    relatedServices: ["deck-building", "remodeling", "interior-carpentry"],
  },
];

export const reviews = [
  {
    name: "Kansas City homeowner",
    quote:
      "We wanted someone who would communicate clearly and look organized from the start. That was the difference here.",
  },
  {
    name: "Johnson County homeowner",
    quote:
      "The quote was easy to understand and the project never felt out of control.",
  },
  {
    name: "Deck project client",
    quote:
      "Seeing similar work made it much easier to move forward.",
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
