import type { Metadata } from "next";

import { ButtonLink } from "@/components/button-link";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import {
  contactLinks,
  guidanceLists,
  takeCards,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Our Take",
  description:
    "A practical read on when SuperReturn International 2026 is worth the trip for Indian fund managers.",
};

export default function OurTakePage() {
  return (
    <>
      <PageHero
        description="This is the honest version: when the room can accelerate allocator conversations, and when it should be treated as long-cycle market development."
        eyebrow="Our take"
        title="Is it worth the trip? Here is the honest answer."
      >
        <div className="button-row">
          <ButtonLink href={contactLinks.attend}>Talk through your plan</ButtonLink>
          <ButtonLink href="/schedule" variant="secondary">
            See the schedule
          </ButtonLink>
        </div>
      </PageHero>

      <section className="page-section">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Who this helps"
            title="Two different reasons to be in Berlin"
          />
          <div className="take-grid">
            {takeCards.map((take) => (
              <article className="take-card" key={take.title}>
                <h2>{take.title}</h2>
                <p>{take.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-section--alt">
        <div className="section-shell">
          <SectionHeading
            description="The event rewards focus. These are the filters we would use before committing time and travel."
            eyebrow="Decision filters"
            title="Go with a narrow objective and a long memory"
          />
          <div className="guidance-grid">
            {guidanceLists.map((guide) => (
              <article className="guidance-card" key={guide.title}>
                <h3>{guide.title}</h3>
                <ul className="detail-list">
                  {guide.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
