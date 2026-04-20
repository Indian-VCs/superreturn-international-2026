"use client";

import { useEffect } from "react";

/**
 * Progressive-enhancement scroll reveal.
 *
 * - Marks <body> with `.js-ready` so CSS can enable reveal styling only
 *   when JS is running (no-JS fallback keeps sections visible).
 * - Sections that are BELOW the viewport on mount get `.reveal` (hidden
 *   initial state) and are observed. When they scroll into view, `.is-in`
 *   is added and CSS handles the transition.
 * - Sections already in view on mount get nothing (instant, no flicker).
 * - Respects prefers-reduced-motion at the CSS layer.
 */
export function ScrollReveal() {
  useEffect(() => {
    document.body.classList.add("js-ready");

    const sections = document.querySelectorAll<HTMLElement>(".sec");
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -5% 0px" },
    );

    const viewportThreshold = window.innerHeight * 0.9;
    sections.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top > viewportThreshold) {
        el.classList.add("reveal");
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
      document.body.classList.remove("js-ready");
    };
  }, []);

  return null;
}
