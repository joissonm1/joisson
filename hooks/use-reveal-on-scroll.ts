"use client";

import { useEffect } from "react";

export function useRevealOnScroll() {
  useEffect(() => {
    const observed = new WeakSet<HTMLElement>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      {
        threshold: 0.24,
        rootMargin: "0px 0px -6% 0px",
      },
    );

    const registerRevealElements = () => {
      const elements = Array.from(
        document.querySelectorAll<HTMLElement>("[data-reveal]"),
      );

      elements.forEach((element, index) => {
        if (element.classList.contains("is-visible") || observed.has(element)) {
          return;
        }

        if (!element.style.getPropertyValue("--reveal-delay")) {
          const delay = Math.min(index * 65, 320);
          element.style.setProperty("--reveal-delay", `${delay}ms`);
        }

        observer.observe(element);
        observed.add(element);
      });
    };

    registerRevealElements();

    const mutationObserver = new MutationObserver(() => {
      registerRevealElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, []);
}
