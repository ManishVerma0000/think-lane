"use client";

interface Course {
  id: number;
  image: string;
  url: string;
}

interface CoursesCarouselProps {
  courses: Course[];
}

export default function CoursesCarousel({ courses }: CoursesCarouselProps) {
  return (
    <div className="relative w-full mb-4 md:mb-6 overflow-hidden">
      {/* Scrolling wrapper */}
      <div className="flex animate-scroll whitespace-nowrap gap-x-4 sm:gap-x-6">
        {/* Duplicate list for infinite effect */}
        {[...courses, ...courses].map((course, index) => (
          <div
            key={`${course.id}-${index}`}
            className="flex-none w-32 sm:w-40 md:w-48 h-20 sm:h-24 flex items-center justify-center"
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
                className="max-h-16 sm:max-h-20 max-w-full object-contain"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
