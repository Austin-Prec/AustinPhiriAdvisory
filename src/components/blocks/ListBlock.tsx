import { Award, Shield, Search, FileCheck, TrendingUp, Briefcase } from 'lucide-react';

const ICONS: Record<string, typeof Award> = {
  Award, Shield, Search, FileCheck, TrendingUp, Briefcase,
};

interface ListBlockProps {
  content: {
    title?: string;
    icon?: string;
    items?: string[];
    footnote?: string;
  };
}

export default function ListBlock({ content }: ListBlockProps) {
  const IconComponent = ICONS[content.icon || ''] || Award;

  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-main px-6 lg:px-20">
        <div className="flex items-center gap-3 mb-6">
          <IconComponent size={24} className="text-crimson-400" />
          {content.title && (
            <h3 className="font-garamond text-navy-500 text-xl font-bold">
              {content.title}
            </h3>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {content.items?.map((item, i) => (
            <div key={i} className="bg-white border border-gray-200 px-4 py-3">
              <p className="font-arial text-gray-700 text-sm">{item}</p>
            </div>
          ))}
        </div>
        {content.footnote && (
          <p className="font-arial text-gray-400 text-sm mt-4">{content.footnote}</p>
        )}
      </div>
    </section>
  );
}
