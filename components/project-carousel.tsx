"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ProjectCarouselProps = {
  images: string[];
  title: string;
  intervalMs?: number;
};

export function ProjectCarousel({
  images,
  title,
  intervalMs = 2600,
}: ProjectCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [images.length, intervalMs]);

  if (!images.length) {
    return null;
  }

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div
      className="project-carousel"
      aria-label={`${title} screenshots carousel`}
    >
      <Image
        src={images[activeIndex]}
        alt={`${title} screenshot ${activeIndex + 1}`}
        width={1200}
        height={700}
      />

      {images.length > 1 ? (
        <div
          className="project-carousel-dots"
          role="tablist"
          aria-label="Carousel navigation"
        >
          {images.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              role="tab"
              aria-selected={activeIndex === index}
              aria-label={`Go to screenshot ${index + 1}`}
              className={`project-dot ${activeIndex === index ? "is-active" : ""}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
