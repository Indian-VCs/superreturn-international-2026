export type NavItem = {
  href: string;
  label: string;
};

export type TakeCardSegment = string | { bold: string };

export type TakeCardParagraph = TakeCardSegment[];

export type TakeCard = {
  title: string;
  body: TakeCardParagraph[];
};

export type ScheduleEntry = {
  label: string;
  emphasis?: boolean;
  muted?: boolean;
};

export type ScheduleDay = {
  day: string;
  date: string;
  entries: ScheduleEntry[];
};

export type ScheduleGroup = {
  label: string;
  window: string;
  days: ScheduleDay[];
  main?: boolean;
};

export type Offer = {
  title: string;
  description: string;
};

const contactEmail = "pc@indianvcs.com";

const buildMailto = (subject: string) =>
  `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}`;

export const site = {
  name: "Indian VCs",
  eventName: "SuperReturn International 2026",
  title: "SuperReturn International 2026 - Berlin | Indian VCs",
  description:
    "Should Indian fund managers attend SuperReturn International 2026 in Berlin? Schedule, our honest take, and how we can help.",
  contactEmail,
  officialSite: "https://informaconnect.com/superreturn-international/",
  homepage: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.indianvcs.com",
  logoHref: "https://www.indianvcs.com",
  partnerCode: "FKR3646IVCS",
  heroDate: "June 2026",
  heroLocation: "Berlin",
  heroHeadline: "SuperReturn International",
  heroSummary:
    "6,000+ senior decision-makers. 2,000+ LPs. 80+ countries. Here's what Indian fund managers need to know — and how we can help.",
};

export const navItems: NavItem[] = [
  { href: "#our-take", label: "Our Take" },
  { href: "#schedule", label: "Schedule" },
  { href: "#side-events", label: "Side Events" },
];

export const eventFacts = [
  "Jun 8–12, 2026",
  "InterContinental, Berlin",
  "500+ Speakers",
  "80+ Countries",
];

export const contactLinks = {
  attend: buildMailto("SuperReturn 2026 - Planning to Attend"),
  sideEvents: buildMailto("SuperReturn 2026 - Side Events"),
  general: buildMailto("SuperReturn 2026 - Indian VCs"),
};

export const takeCards: TakeCard[] = [
  {
    title: "For established fund managers",
    body: [
      [
        "We've met a few European Fund of Funds and other allocators this year who have already invested in a few India funds and are actively scouting to back a few more. Their interest tends to concentrate on fintech, impact, and deep tech. They're open to secondaries and co-investments.",
      ],
      [
        "A few of them come to Berlin with a clear shortlist in mind — these aren't passive conversations. Our take: if you're already in touch with any of them, ",
        {
          bold: "Berlin is a good place to take those conversations deeper in person.",
        },
      ],
    ],
  },
  {
    title: "For emerging managers",
    body: [
      [
        "If you're near your final close and looking for quick commitments, Berlin probably isn't the right room. From what we've picked up, these European LPs tend to take time to build a relationship before they write — a slower pace than the Asia circuit.",
      ],
      [
        "On the flip side, Berlin is less crowded on the Indian side, so attention and deeper conversations come easier. If your thesis overlaps with what these allocators focus on — energy, impact, and deep tech come up often — ",
        {
          bold: "this can be a worthwhile room to explore.",
        },
      ],
    ],
  },
];

export const takeFootnote =
  "We attended SuperReturn Asia, which shapes this view. Berlin is larger and more European/US-focused — we'll share sharper insights after attending in June.";

export const scheduleGroups: ScheduleGroup[] = [
  {
    label: "Summit Days",
    window: "June 8–9",
    days: [
      {
        day: "Monday",
        date: "8 June",
        entries: [
          { label: "Private Debt Summit Day 1" },
          { label: "German Private Equity Summit" },
          { label: "AI & Tech Summit" },
          { label: "Sports Investing Summit" },
          { label: "Women in Private Markets" },
        ],
      },
      {
        day: "Tuesday",
        date: "9 June",
        entries: [
          { label: "Private Debt Summit Day 2" },
          { label: "Mid-Market Summit" },
          { label: "Secondaries Summit" },
          { label: "Private Wealth Summit" },
        ],
      },
    ],
  },
  {
    label: "Main Conference",
    window: "June 10–12",
    main: true,
    days: [
      {
        day: "Wednesday",
        date: "10 June",
        entries: [
          { label: "State of the Union 2026", emphasis: true },
          { label: "Fundraising — Bracing for a Busy 2026?", emphasis: true },
          { label: "David Rubenstein keynote" },
          { label: "LP-GP Matchmaking (Allocate)" },
          { label: "Marlene Bar Evening" },
        ],
      },
      {
        day: "Thursday",
        date: "11 June",
        entries: [
          { label: "Exits & Deal Activity" },
          { label: "Reassessing Asia Private Equity", emphasis: true },
          { label: "Al Gore keynote" },
          { label: "LP-GP Matchmaking (Allocate)" },
          { label: "Berlin Zoo Reception (eve.)" },
        ],
      },
      {
        day: "Friday",
        date: "12 June",
        entries: [
          { label: "Co-Investments 2026" },
          { label: "Emerging Manager Programs", emphasis: true },
          { label: "How to Pitch (workshop)" },
          { label: "Closes 3 PM", muted: true },
        ],
      },
    ],
  },
];

export const featuredSessions = [
  "Reassessing Asia Private Equity — closed-door, Thursday",
  "Fundraising — Bracing for a Busy 2026? — Wednesday",
  "Emerging Manager Programs (DEI is Dead) — Friday",
  "LP-GP Matchmaking via Allocate — Wednesday & Thursday",
];

export const supportOffers: Offer[] = [
  {
    title: "India Side Event",
    description:
      "We may host a side event for Indian GPs in Berlin. Interested? Tell us.",
  },
  {
    title: "Already Going?",
    description:
      "Let us know! We'd love to coordinate and connect Indian GPs attending.",
  },
];

export const sideEventNotes = [
  "We're hearing about a few side events being organised during SuperReturn week in Berlin. As we confirm details, we'll share them with you directly.",
  "If you're attending, ping us — we'll loop you in as soon as we know more.",
];

export const footerCopy = {
  lineOne: "Building global LP-GP networks for India's venture ecosystem",
  lineTwo:
    "Independent guide. Not affiliated with SuperReturn or Informa Connect.",
};
