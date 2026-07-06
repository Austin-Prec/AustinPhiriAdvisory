import { Download, Shield, Search, FileCheck, TrendingUp } from 'lucide-react';

const ICONS: Record<string, typeof Shield> = { Shield, Search, FileCheck, TrendingUp };

interface Pillar {
  number: string;
  name: string;
  description: string;
}

interface FrameworkSectionProps {
  content: {
    icon?: string;
    heading?: string;
    subtitle?: string;
    body?: string;
    pillars?: Pillar[];
    download_label?: string;
    download_url?: string;
    variant?: 'light' | 'shaded';
  };
}

export default function FrameworkSectionBlock({ content }: FrameworkSectionProps) {
  const IconComponent = ICONS[content.icon || ''] || Shield;
  const isShaded = content.variant === 'shaded';
  const pillarCount = content.pillars?.length ?? 0;

  // Matches the original's responsive column count, which differs because
  // SIF has 4 pillars and FRF has 5 — a 5-column FRF grid on large screens
  // keeps every pillar on one row, while SIF's 4-column grid does the same
  // for its own count. Falls back to a sensible default for other counts if
  // pillars are added or removed via the admin panel.
  const lgCols =
    pillarCount === 5 ? 'lg:grid-cols-5' : pillarCount === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3';

  return (
    <section className={isShaded ? 'bg-gray-50 section-padding' : 'bg-white section-padding'}>
      <div className="container-main px-6 lg:px-20">
        <div className="flex items-center gap-4 mb-6">
          <IconComponent size={36} className="text-crimson-400" strokeWidth={1.5} />
          {content.heading && (
            <h2 className="font-garamond text-navy-500 text-2xl md:text-3xl font-bold">
              {content.heading}
            </h2>
          )}
        </div>

        {content.subtitle && (
          <p className="font-arial text-gold-500 text-sm uppercase tracking-wider font-semibold mb-6">
            {content.subtitle}
          </p>
        )}

        {content.body && (
          <p className="font-arial text-gray-600 text-base leading-relaxed mb-10 max-w-4xl">
            {content.body}
          </p>
        )}

        <div className={`grid grid-cols-1 sm:grid-cols-2 ${lgCols} gap-6 mb-10`}>
          {content.pillars?.map((pillar, i) => (
            <div
              key={i}
              className={
                isShaded
                  ? 'border border-gray-200 bg-white p-6 lg:p-8 hover:border-navy-300 transition-colors duration-300'
                  : 'border border-gray-200 p-6 lg:p-8 hover:border-navy-300 transition-colors duration-300'
              }
            >
              <div className="font-garamond text-gold-500 text-2xl font-bold mb-1">
                {pillar.number}
              </div>
              <h4 className="font-garamond text-navy-500 text-base font-bold mb-3">
                {pillar.name}
              </h4>
              <p className="font-arial text-gray-600 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {content.download_url && content.download_label && (
          <a
            href={content.download_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-gold"
          >
            <Download size={16} />
            {content.download_label}
          </a>
        )}
      </div>
    </section>
  );
}
