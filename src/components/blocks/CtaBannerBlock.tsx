import { Link } from 'react-router-dom';

interface CtaBannerProps {
  content: {
    body?: string;
    button_label?: string;
    button_link?: string;
  };
}

export default function CtaBannerBlock({ content }: CtaBannerProps) {
  return (
    <section className="bg-navy-500 py-12 md:py-16">
      <div className="container-main px-6 lg:px-20 text-center">
        {content.body && (
          <p className="font-arial text-navy-100 text-base leading-relaxed max-w-3xl mx-auto mb-6">
            {content.body}
          </p>
        )}
        {content.button_link && content.button_label && (
          <Link to={content.button_link} className="btn-primary">
            {content.button_label}
          </Link>
        )}
      </div>
    </section>
  );
}
