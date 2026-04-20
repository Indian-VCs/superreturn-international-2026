import type { Metadata } from "next";

import { ButtonLink } from "@/components/button-link";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import {
  contactLinks,
  featuredSessions,
  scheduleGroups,
  site,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Schedule",
  description:
    "A five-day view of SuperReturn International 2026, including summit days, the main conference, and sessions worth prioritising.",
};

export default function SchedulePage() {
  return (
    <>
      <PageHero
        description="Days 1 and 2 are specialist summits running in parallel. Days 3 to 5 are the main conference with the larger allocator room in one place."
        eyebrow="Schedule"
        title="Five days at a glance"
      >
        <div className="button-row">
          <ButtonLink href={site.officialSite}>Full official agenda</ButtonLink>
          <ButtonLink href={contactLinks.general} variant="secondary">
            Ask what to prioritise
          </ButtonLink>
        </div>
      </PageHero>

      <section className="page-section">
        <div className="section-shell schedule-stack">
          {scheduleGroups.map((group) => (
            <section className="schedule-group" key={group.label}>
              <div className="schedule-group-header">
                <p className="eyebrow">{group.label}</p>
                <h2 className="section-title">{group.window}</h2>
              </div>
              <div className="schedule-grid">
                {group.days.map((day) => (
                  <article className="schedule-card" key={`${group.label}-${day.day}`}>
                    <p className="schedule-day">{day.day}</p>
                    <h3 className="schedule-date">{day.date}</h3>
                    <ul className="detail-list detail-list--compact">
                      {day.entries.map((entry) => (
                        <li
                          className={[
                            entry.emphasis ? "is-emphasis" : "",
                            entry.muted ? "is-muted" : "",
                          ]
                            .join(" ")
                            .trim()}
                          key={entry.label}
                        >
                          {entry.label}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="page-section page-section--alt">
        <div className="section-shell">
          <SectionHeading
            description="If you are an Indian GP, these are the sessions we would keep on the radar before the final agenda settles."
            eyebrow="Sessions to watch"
            title="Where we would spend the most attention"
          />
          <div className="highlight-panel">
            <ul className="detail-list">
              {featuredSessions.map((session) => (
                <li key={session}>{session}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
