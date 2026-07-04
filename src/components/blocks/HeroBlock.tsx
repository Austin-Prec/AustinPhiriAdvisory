import { Link } from 'react-router-dom';

interface HeroButton {
  label: string;
  link: string;
  style: 'primary' | 'secondary';
}

interface HeroBlockProps {
  content: {
    background_image_url?: string;
    headline?: string;
    subheadline?: string;
    quote?: string;
    buttons?: HeroButton[];
  };
}

export default function HeroBlock({ content }: HeroBlockProps) {
  return (
    <section className="relative bg-navy-500 overflow-hidden">
      {content.background_image_url && (
        <div className="absolute inset-0 opacity-20">
          <img
            src={content.background_image_url}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="relative container-main px-6 lg:px-20 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-3xl">
          {content.headline && (
            <h1 className="font-garamond text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              {content.headline}
            </h1>
          )}
          {content.subheadline && (
            <p className="font-arial text-navy-100 text-lg md:text-xl mb-6">
              {content.subheadline}
            </p>
          )}
          {content.quote && (
            <p className="font-arial text-navy-200 text-base italic mb-8 border-l-2 border-crimson-400 pl-4">
              {content.quote}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-4">
            {content.buttons?.map((btn, i) =>
              btn.style === 'primary' ? (
                <Link key={i} to={btn.link} className="btn-primary text-center">
                  {btn.label}
                </Link>
              ) : (
                <Link
                  key={i}
                  to={btn.link}
                  className="btn-secondary border-navy-200 text-navy-100 hover:bg-navy-200 hover:text-navy-700 text-center"
                >
                  {btn.label}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
