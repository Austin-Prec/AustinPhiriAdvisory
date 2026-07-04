import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface LinkPreviewBlockProps {
  content: {
    title?: string;
    body?: string;
    link_text?: string;
    link?: string;
  };
}

export default function LinkPreviewBlock({ content }: LinkPreviewBlockProps) {
  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-main px-6 lg:px-20">
        <div className="max-w-3xl">
          {content.title && (
            <h2 className="font-garamond text-navy-500 text-2xl md:text-3xl font-bold mb-6">
              {content.title}
            </h2>
          )}
          {content.body && (
            <p className="font-arial text-gray-600 text-base leading-relaxed mb-6">
              {content.body}
            </p>
          )}
          {content.link && content.link_text && (
            <Link
              to={content.link}
              className="inline-flex items-center gap-2 font-arial text-crimson-400 text-sm font-semibold uppercase tracking-wide hover:text-crimson-500 transition-colors duration-200"
            >
              {content.link_text} <ArrowRight size={16} />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
