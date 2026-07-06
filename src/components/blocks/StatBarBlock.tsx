import { useEffect, useRef, useState } from 'react';

interface Stat {
  value: string;
  label: string;
  detail: string;
}

interface StatBarBlockProps {
  content: {
    label?: string;
    stats?: Stat[];
  };
}

// Parses a stat value into an animatable {prefix, number, suffix} shape,
// but only when the ENTIRE string is exactly prefix + digits + suffix with
// no other digit groups hiding in the suffix. A value like a price range
// ("$2,500 - $4,500 USD") or non-numeric text ("Custom Quote") correctly
// returns null and is displayed as static text instead of being partially
// or nonsensically animated.
function parseStatValue(value: string): { prefix: string; number: number; suffix: string; useComma: boolean } | null {
  const match = value.match(/^([^0-9]*)([0-9]{1,3}(?:,[0-9]{3})*)([^0-9]*)$/);
  if (!match) return null;
  const [, prefix, numberPart, suffix] = match;
  const number = parseInt(numberPart.replace(/,/g, ''), 10);
  if (isNaN(number)) return null;
  return { prefix, number, suffix, useComma: numberPart.includes(',') };
}

export default function StatBarBlock({ content }: StatBarBlockProps) {
  return (
    <section className="relative bg-gradient-to-br from-navy-600 via-navy-500 to-navy-600 py-14 md:py-20 overflow-hidden">
      <div className="absolute inset-0 animate-grid-drift opacity-60" aria-hidden="true" />

      <div className="relative container-main px-6 lg:px-20">
        {content.label && (
          <div className="text-center mb-10">
            <p className="font-arial text-navy-100 text-sm uppercase tracking-wider">
              {content.label}
            </p>
          </div>
        )}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {content.stats?.map((stat, i) => (
            <StatItem key={i} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({ stat, index }: { stat: Stat; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [displayValue, setDisplayValue] = useState<string>(stat.value);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const parsed = parseStatValue(stat.value);
    const el = ref.current;
    if (!el) return;

    // Only set up the counting animation for values that parsed cleanly.
    // Everything else (price ranges, "Custom Quote", etc.) just displays
    // as-is with no observer needed.
    if (!parsed) return;

    setDisplayValue(parsed.prefix + '0' + parsed.suffix);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1200;
          const start = performance.now();

          function tick(now: number) {
            const progress = Math.min((now - start) / duration, 1);
            const current = Math.floor(progress * parsed!.number);
            const formatted = parsed!.useComma ? current.toLocaleString() : String(current);
            setDisplayValue(parsed!.prefix + formatted + parsed!.suffix);
            if (progress < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [stat.value]);

  return (
    <div ref={ref} className="text-center">
      <div
        className="font-garamond text-gold-200 text-3xl md:text-4xl font-semibold mb-1 tabular-nums animate-fade-up"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        {displayValue}
      </div>
      <div className="font-arial text-navy-100 text-xs uppercase tracking-wider mb-1">
        {stat.label}
      </div>
      <div className="font-arial text-navy-200 text-[11px]">
        {stat.detail}
      </div>
    </div>
  );
}
