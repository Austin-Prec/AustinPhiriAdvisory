import { Link } from 'react-router-dom';
import {
  Shield,
  Search,
  FileCheck,
  GraduationCap,
  BookOpen,
  TrendingUp,
  ClipboardCheck,
} from 'lucide-react';

const ICONS: Record<string, typeof Shield> = {
  Shield, Search, FileCheck, GraduationCap, BookOpen, TrendingUp, ClipboardCheck,
};

interface Service {
  icon: string;
  title: string;
  description: string;
  outcome: string;
  price: string;
  price_note: string;
  cta_type: 'fixed' | 'custom';
}

interface ServiceGridBlockProps {
  content: {
    services?: Service[];
  };
}

export default function ServiceGridBlock({ content }: ServiceGridBlockProps) {
  return (
    <section className="bg-white section-padding">
      <div className="container-main px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.services?.map((service, i) => {
            const IconComponent = ICONS[service.icon] || Shield;
            return (
              <div key={i} className="border rounded-lg p-6 transition-all hover:shadow-md">
                <IconComponent size={28} className="text-crimson-400 mb-4" strokeWidth={1.5} />
                <h3 className="font-garamond text-navy-500 text-lg font-bold mb-2">
                  {service.title}
                </h3>
                <p className="text-crimson-400 text-sm font-semibold mb-3">
                  “{service.outcome}”
                </p>
                <p className="font-arial text-gray-500 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="pt-3 border-t border-gray-100">
                  <p className="font-garamond text-navy-600 text-lg font-bold">
                    {service.price}
                  </p>
                  {service.price_note && (
                    <p className="font-arial text-gray-400 text-xs mt-1">
                      {service.price_note}
                    </p>
                  )}
                </div>
                <Link
                  to="/contact"
                  className="inline-block w-full text-center mt-4 px-4 py-2 border border-navy-500 text-navy-500 rounded-lg font-arial text-sm font-semibold hover:bg-navy-500 hover:text-white transition-colors"
                >
                  {service.cta_type === 'custom' ? 'Request Quote' : 'Book Service'}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
