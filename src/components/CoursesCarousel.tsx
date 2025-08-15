"use client";

import { useRef, useEffect } from "react";

interface Course {
  id: number;
  image: string;
  url: string;
}

interface CoursesCarouselProps {
  courses: Course[];
}

export default function CoursesCarousel({ courses }: CoursesCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollSpeed = 1; // pixels per step
    const stepInterval = 16; // ms per step (~60fps)

    const interval = setInterval(() => {
      if (carouselRef.current) {
        // Scroll slowly to the right
        carouselRef.current.scrollLeft += scrollSpeed;

        // If reached end, reset to start
        if (
          carouselRef.current.scrollLeft >=
          carouselRef.current.scrollWidth - carouselRef.current.clientWidth
        ) {
          carouselRef.current.scrollLeft = 0;
        }
      }
    }, stepInterval);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full">
      {/* Carousel container */}
      <div
        ref={carouselRef}
        className="flex overflow-x-auto scroll-smooth gap-8 no-scrollbar items-center"
      >
        {courses.map((course) => (
          <div
            key={course.id}
            className="flex-none w-48 h-24 flex items-center justify-center"
          >
            <a
              href={course.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src={course.image}
                alt={`Logo of ${course.id}`}
                className="max-h-20 max-w-full object-contain"
              />
            </a>
          </div>
        ))}
        {/* Duplicate items for seamless loop */}
        {courses.map((course) => (
          <div
            key={`dup-${course.id}`}
            className="flex-none w-48 h-24 flex items-center justify-center"
          >
            <a
              href={course.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src={course.image}
                alt={`Logo of ${course.id}`}
                className="max-h-20 max-w-full object-contain"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
