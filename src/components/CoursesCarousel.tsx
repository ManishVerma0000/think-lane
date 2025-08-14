"use client";

import { ChevronRight, ChevronLeft } from "lucide-react";
import { useRef, useEffect } from "react";

interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
  rating?: number;
  tag?: string;
}

interface CoursesCarouselProps {
  courses: Course[];
}

export default function CoursesCarousel({ courses }: CoursesCarouselProps){
  const carouselRef = useRef<HTMLDivElement>(null);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({
          left: carouselRef.current.offsetWidth,
          behavior: "smooth",
        });
        // Reset to start when reaching end
        if (
          carouselRef.current.scrollLeft + carouselRef.current.offsetWidth >=
          carouselRef.current.scrollWidth
        ) {
          carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({
      left: -carouselRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({
      left: carouselRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full">
      {/* Left button */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Carousel container */}
      <div
        ref={carouselRef}
        className="flex overflow-x-auto scroll-smooth gap-8 no-scrollbar"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {courses.map((course) => (
          <div
            key={course.id}
            className="flex-none w-full sm:w-1/2 lg:w-1/3 scroll-snap-align-start"
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4">{course.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="ml-1 text-sm text-gray-600">
                      {course.rating}
                    </span>
                  </div>
                      <a
                          href={course.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-600 font-semibold hover:text-emerald-700 flex items-center"
                        >
                          Learn More
                          <ChevronRight size={16} className="ml-1" />
                      </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right button */}
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
