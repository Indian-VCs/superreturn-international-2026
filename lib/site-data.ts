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
        "We've met with a couple of European Fund of Funds this year who are seriously scouting India right now — not just watching. Their interest isn't vague either: fintech, impact, and deep tech come up a lot, and they're open on structure — primaries, direct investments, and co-investments are all on the table.",
      ],
      [
        "Our sense: if you're already in a conversation with any of them, the fact that you're in Berlin and taking the meeting in person matters. A few of these funds come with a shortlist in hand. ",
        {
          bold: "If you know you're on it and you're engaging, Berlin is where the needle actually moves.",
        },
      ],
      [
        "One caveat — this is our read from recent conversations. You'll meet these folks yourself and form your own view, and we'll share more after attending in June.",
      ],
    ],
  },
  {
    title: "For emerging managers",
    body: [
      [
        "If you're in closer-mode — fund nearly wrapped, chasing the last wedge — Berlin probably isn't the room. From what we've picked up from other managers who've been, the European LPs here like to talk, engage, and marinate the relationship over cycles before they write. It's a slower rhythm than the Asia circuit.",
      ],
      [
        "That said — there's an uncharted angle that's worth thinking about. European allocators come at India from different places: energy, impact, and deep tech come up a lot, and the strategies are genuinely different. ",
        { bold: "If your thesis overlaps, Berlin puts you in front of people who haven't yet formed a view on India." },
      ],
      [
        "One thing worth flagging: Berlin isn't crowded on the Indian side the way the Asia events are. Getting attention is easier, and the conversations tend to go deeper. It's a premium to pay, but if the thesis fit is there, it's the kind of room worth exploring.",
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
    title: "10% Off Passes",
    description: "Use our partner code FKR3646IVCS at checkout for 10% off.",
  },
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
