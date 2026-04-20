import { ButtonLink } from "@/components/button-link";
import {
  contactLinks,
  eventFacts,
  featuredSessions,
  scheduleGroups,
  sideEventNotes,
  site,
  supportOffers,
  takeCards,
  takeFootnote,
} from "@/lib/site-data";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-eye">
            <span aria-hidden="true" className="dot" />
            {site.heroDate} · {site.heroLocation}
          </div>
          <h1>
            SuperReturn <em>International</em>
          </h1>
          <p className="hero-sub">{site.heroSummary}</p>
          <div className="hero-meta">
            {eventFacts.map((fact, index) => (
              <span className="hm" key={fact}>
                <strong>{fact}</strong>
                {index < eventFacts.length - 1 ? (
                  <span className="hm-sep" aria-hidden="true">
                    {" · "}
                  </span>
                ) : null}
              </span>
            ))}
          </div>
          <div className="hero-ctas">
            <ButtonLink href={contactLinks.attend} variant="primary">
              Planning to Attend? Talk to Us →
            </ButtonLink>
            <ButtonLink href={site.officialSite} variant="secondary">
              Official Site →
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="sec" id="our-take">
        <div className="wrap">
          <div className="the-link" aria-hidden="true" />
          <div className="lb">Our Take</div>
          <h2 className="st">Is it worth the trip? Our honest view.</h2>

          {takeCards.map((card) => (
            <div className="take" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </div>
          ))}

          <p className="take-footnote">
            <em>{takeFootnote}</em>
          </p>
        </div>
      </section>

      <section className="sec" id="schedule">
        <div className="wrap">
          <div className="the-link" aria-hidden="true" />
          <div className="lb">Schedule</div>
          <h2 className="st">5 days at a glance</h2>
          <p className="sd">
            Days 1–2 are specialist summits running in parallel — pick one track. Days 3–5 are the main conference with all 6,000+ attendees in one room.
          </p>

          {scheduleGroups.map((group) => (
            <div className="sched-group" key={group.label}>
              <div className="sched-group-label">
                {group.label} · {group.window}
              </div>
              <div className="sched-row">
                {group.days.map((day) => (
                  <div
                    className={`sched-card${group.main ? " mc" : ""}`}
                    key={day.day}
                  >
                    <div className="sched-card-day">{day.day}</div>
                    <div className="sched-card-date">{day.date}</div>
                    <ul>
                      {day.entries.map((entry) => {
                        const cls = entry.emphasis
                          ? "hi"
                          : entry.muted
                            ? "dim"
                            : undefined;
                        return (
                          <li className={cls} key={entry.label}>
                            {entry.label}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="featured-box">
            <div className="lb">Sessions we'd highlight for Indian GPs</div>
            <ul className="session-list">
              {featuredSessions.map((session) => (
                <li key={session}>{session}</li>
              ))}
            </ul>
          </div>
          <p className="agenda-link">
            Full agenda on the{" "}
            <a
              href={site.officialSite}
              rel="noopener noreferrer"
              target="_blank"
            >
              official SuperReturn site →
            </a>
          </p>
        </div>
      </section>

      <section className="sec" id="side-events">
        <div className="wrap">
          <div className="the-link" aria-hidden="true" />
          <div className="lb">Side Events</div>
          <h2 className="st">What's happening on the margins</h2>

          <div className="side-box">
            {sideEventNotes.map((note) => (
              <p key={note}>{note}</p>
            ))}
            <ButtonLink href={contactLinks.sideEvents} variant="primary">
              Ping us → {site.contactEmail}
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="sec" id="help">
        <div className="wrap">
          <div className="cta-banner">
            <h3>Planning to attend? We can help.</h3>
            <p>
              Indian VCs is building a bridge between India's venture ecosystem and global LP networks. If you're considering SuperReturn, we're here to support.
            </p>

            <div className="cta-opts">
              {supportOffers.map((offer) => (
                <div className="cta-o" key={offer.title}>
                  <h4>{offer.title}</h4>
                  <p>{offer.description}</p>
                </div>
              ))}
            </div>

            <div className="discount-box">
              <p className="discount-label">10% off with our partner code</p>
              <p className="discount-code">{site.partnerCode}</p>
              <p className="discount-note">
                Use at checkout on the official SuperReturn site
              </p>
            </div>

            <div className="cta-primary">
              <ButtonLink href={contactLinks.general} variant="primary">
                Reach Out → {site.contactEmail}
              </ButtonLink>
            </div>

            <p className="cta-fine">
              Happy to get on a call anytime. No sales pitch — just here to help Indian fund managers navigate the global LP landscape.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
