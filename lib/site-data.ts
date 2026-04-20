export type NavItem = {
  href: string;
  label: string;
};

export type StoryCard = {
  href: string;
  label: string;
  title: string;
  description: string;
};

export type TakeCard = {
  title: string;
  body: string;
};

export type GuidanceList = {
  title: string;
  items: string[];
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
  berlinImage:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Berlin%20skyline%202009.jpg",
  partnerCode: "FKR3646IVCS",
  heroDate: "June 2026",
  heroLocation: "Berlin",
  heroSummary:
    "6,000+ senior decision-makers. 2,000+ LPs. 80+ countries. Here is what Indian fund managers need to know - and how we can help.",
};

export const navItems: NavItem[] = [
  { href: "/", label: "Overview" },
  { href: "/our-take", label: "Our Take" },
  { href: "/schedule", label: "Schedule" },
  { href: "/side-events", label: "Side Events" },
];

export const eventFacts = [
  "Jun 8-12, 2026",
  "InterContinental, Berlin",
  "500+ speakers",
  "80+ countries",
];

export const contactLinks = {
  attend: buildMailto("SuperReturn 2026 - Planning to Attend"),
  sideEvents: buildMailto("SuperReturn 2026 - Side Events"),
  general: buildMailto("SuperReturn 2026 - Indian VCs"),
};

export const storyCards: StoryCard[] = [
  {
    href: "/our-take",
    label: "Should you go?",
    title: "A clear read on when the trip is worth it",
    description:
      "The room matters most when Europe and the US are already in your LP map, or when you want to start building that map now.",
  },
  {
    href: "/schedule",
    label: "What to prioritize",
    title: "Five days split between summits and the main conference",
    description:
      "The first two days are track-driven. The last three days are where the larger allocator network comes together.",
  },
  {
    href: "/side-events",
    label: "How we help",
    title: "Discount codes, prep, side-event coordination, and local signal",
    description:
      "We are already collecting interest from Indian and Asia-focused GPs heading to Berlin that week.",
  },
];

export const takeCards: TakeCard[] = [
  {
    title: "For established fund managers",
    body:
      "European funds of funds are actively looking at India right now, and SuperReturn is where they are. If European family offices, sovereign wealth funds, or US endowments are already on your LP target list, this is a high-signal room. The hallway conversations matter more than the panels. If you have warm leads with European allocators, this is where you make them real.",
  },
  {
    title: "For emerging managers",
    body:
      "This is not where you will close your first commitment - and that is fine. The Asia-focused LP circuit is already saturated with India deal flow; the LPs here are a different audience. Think of it as uncharted territory: European and US allocators who have not yet formed a view on India. Go to learn the room, not to pitch. The relationships you build now can pay off over two or three fundraising cycles.",
  },
];

export const guidanceLists: GuidanceList[] = [
  {
    title: "Go when the setup is already there",
    items: [
      "You already have warm allocator conversations in Europe or the US.",
      "You want LP feedback from beyond the usual Asia conference circuit.",
      "You can commit to long-cycle relationship building rather than one-week conversion.",
    ],
  },
  {
    title: "Use the week well",
    items: [
      "Prioritize allocator meetings and side conversations over panel attendance.",
      "Treat the first two summit days as a track choice, not a full-menu event.",
      "Arrive with a narrow target list and a simple story about why India matters now.",
    ],
  },
];

export const scheduleGroups: ScheduleGroup[] = [
  {
    label: "Summit days",
    window: "June 8-9",
    days: [
      {
        day: "Monday",
        date: "8 June",
        entries: [
          { label: "Private Debt Summit Day 1" },
          { label: "German Private Equity Summit" },
          { label: "AI and Tech Summit" },
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
    label: "Main conference",
    window: "June 10-12",
    days: [
      {
        day: "Wednesday",
        date: "10 June",
        entries: [
          { label: "State of the Union 2026", emphasis: true },
          {
            label: "Fundraising - Bracing for a Busy 2026?",
            emphasis: true,
          },
          { label: "David Rubenstein keynote" },
          { label: "LP-GP Matchmaking (Allocate)" },
          { label: "Marlene Bar evening" },
        ],
      },
      {
        day: "Thursday",
        date: "11 June",
        entries: [
          { label: "Exits and Deal Activity" },
          { label: "Reassessing Asia Private Equity", emphasis: true },
          { label: "Al Gore keynote" },
          { label: "LP-GP Matchmaking (Allocate)" },
          { label: "Berlin Zoo reception" },
        ],
      },
      {
        day: "Friday",
        date: "12 June",
        entries: [
          { label: "Co-Investments 2026" },
          { label: "Emerging Manager Programs", emphasis: true },
          { label: "How to Pitch workshop" },
          { label: "Closes 3 PM", muted: true },
        ],
      },
    ],
  },
];

export const featuredSessions = [
  "Reassessing Asia Private Equity - closed-door, Thursday",
  "Fundraising - Bracing for a Busy 2026? - Wednesday",
  "Emerging Manager Programs - Friday",
  "LP-GP Matchmaking via Allocate - Wednesday and Thursday",
];

export const supportOffers: Offer[] = [
  {
    title: "10% off passes",
    description: "Use our partner code at checkout for 10% off.",
  },
  {
    title: "Event prep and insights",
    description:
      "Sessions, allocators to target, and a practical prep call if that helps.",
  },
  {
    title: "India side event",
    description:
      "We may host a side event for Indian GPs in Berlin. Tell us if you want in.",
  },
  {
    title: "Already going?",
    description:
      "Let us know and we will help coordinate with other Indian GPs attending.",
  },
];

export const sideEventNotes = [
  "We are hearing about a few side events being organised for Indian and Asia-focused GPs during SuperReturn week in Berlin.",
  "As we confirm details, we will keep the site updated. If you are attending, ping us directly and we will loop you in as soon as we know more.",
];

export const footerCopy = {
  lineOne: "Building global LP-GP networks for India's venture ecosystem",
  lineTwo:
    "Independent guide. Not affiliated with SuperReturn or Informa Connect.",
};
