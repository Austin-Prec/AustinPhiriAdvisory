import { Briefcase, MapPin, Calendar, Award, Shield, Search, FileCheck, TrendingUp } from 'lucide-react';

const ICONS: Record<string, typeof Briefcase> = {
  Briefcase, MapPin, Calendar, Award, Shield, Search, FileCheck, TrendingUp,
};

interface PhotoBlockProps {
  content: {
    image_url?: string;
    alt?: string;
    badges?: { icon: string; text: string }[];
  };
}

export default function PhotoBlock({ content }: PhotoBlockProps) {
  if (!content.image_url) return null;

  return (
    <div className="lg:col-span-1">
      <img
        src={content.image_url}
        alt={content.alt || ''}
        className="w-full rounded-lg shadow-md"
      />

      {content.badges && content.badges.length > 0 && (
        <div className="mt-6 space-y-3">
          {content.badges.map((badge, i) => {
            const IconComponent = ICONS[badge.icon] || Briefcase;
            return (
              <div key={i} className="flex items-center gap-3 text-gray-600">
                <IconComponent size={18} className="text-crimson-400" />
                <span className="font-arial text-sm">{badge.text}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
