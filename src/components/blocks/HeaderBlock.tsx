import { useEffect, useRef, useState } from 'react';

interface HeaderBlockProps {
  content: {
    title?: string;
    intro?: string;
  };
}

export default function HeaderBlock({ content }: HeaderBlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // No IntersectionObserver needed here — this block always sits at the
    // very top of the page, already in view on load, so the reveal fires
    // immediately rather than waiting on a scroll trigger.
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-navy-500 via-navy-400 to-navy-500 pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 animate-grid-drift opacity-50" aria-hidden="true" />

      <div
        ref={ref}
        className={`relative container-main px-6 lg:px-20 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <h1 className="font-garamond text-white text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
          {content.title}
        </h1>
        {content.intro && (
          <p className="font-arial text-navy-100 text-base md:text-lg leading-relaxed max-w-3xl">
            {content.intro}
          </p>
        )}
      </div>
    </section>
  );
}
