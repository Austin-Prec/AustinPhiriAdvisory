import { Shield, Search, FileCheck, TrendingUp } from 'lucide-react';

const ICONS: Record<string, typeof Shield> = { Shield, Search, FileCheck, TrendingUp };

interface ValueCard {
  icon: string;
  title: string;
  description: string;
}

interface ValueCardsBlockProps {
  content: {
    title?: string;
    subtitle?: string;
    cards?: ValueCard[];
  };
}

export default function ValueCardsBlock({ content }: ValueCardsBlockProps) {
  return (
    <section className="bg-white section-padding">
      <div className="container-main">
        <div className="text-center mb-12">
          {content.title && (
            <h2 className="font-garamond text-navy-500 text-2xl md:text-3xl font-bold mb-3">
              {content.title}
            </h2>
          )}
          {content.subtitle && (
            <p className="font-arial text-gray-500 text-base max-w-2xl mx-auto">
              {content.subtitle}
            </p>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {content.cards?.map((card, i) => {
            const IconComponent = ICONS[card.icon] || Shield;
            return (
              <div
                key={i}
                className="border border-gray-200 p-8 lg:p-10 hover:border-navy-300 transition-colors duration-300"
              >
                <IconComponent size={32} className="text-crimson-400 mb-5" strokeWidth={1.5} />
                <h3 className="font-garamond text-navy-500 text-xl font-bold mb-3">
                  {card.title}
                </h3>
                <p className="font-arial text-gray-600 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
