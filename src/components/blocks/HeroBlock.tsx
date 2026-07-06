import { Link } from 'react-router-dom';
import { Shield, Search } from 'lucide-react';

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
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-to-br from-navy-500 via-navy-400 to-navy-500">
      {/* Optional editable background photo sits beneath the motion layers,
          very low opacity, so an uploaded image adds depth without
          competing with the gradient, grid, or blobs above it. */}
      {content.background_image_url && (
        <div className="absolute inset-0 opacity-10">
          <img
            src={content.background_image_url}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Drifting grid texture, then floating gradient blobs above it */}
      <div className="absolute inset-0 animate-grid-drift" aria-hidden="true" />
      <div
        className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full opacity-30 blur-[70px] animate-blob-1"
        style={{ background: 'radial-gradient(circle, #D4A94F, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-36 -left-24 w-[400px] h-[400px] rounded-full opacity-30 blur-[70px] animate-blob-2"
        style={{ background: 'radial-gradient(circle, #8B1A1A, transparent 70%)' }}
        aria-hidden="true"
      />

      {/* Floating glass stat cards, visible on larger screens only — on
          mobile there isn't room for them to float without overlapping
          the headline, so they simply don't render rather than being
          awkwardly squeezed in. */}
      <div
        className="hidden lg:flex absolute top-[18%] right-[6%] items-start gap-3 rounded-2xl border border-white/15 bg-white/[0.08] backdrop-blur-md px-5 py-4 animate-card-bob"
        aria-hidden="true"
      >
        <div className="w-9 h-9 rounded-[10px] bg-gold-200/20 flex items-center justify-center shrink-0">
          <Shield size={18} className="text-gold-200" strokeWidth={2} />
        </div>
        <div>
          <p className="font-arial text-white text-[13px] font-semibold">Zero audit findings</p>
          <p className="font-arial text-white/60 text-[11px] mt-0.5">Across 9 international donors</p>
        </div>
      </div>
      <div
        className="hidden lg:flex absolute bottom-[24%] right-[13%] items-start gap-3 rounded-2xl border border-white/15 bg-white/[0.08] backdrop-blur-md px-5 py-4 animate-card-bob"
        style={{ animationDelay: '1.5s' }}
        aria-hidden="true"
      >
        <div className="w-9 h-9 rounded-[10px] bg-gold-200/20 flex items-center justify-center shrink-0">
          <Search size={18} className="text-gold-200" strokeWidth={2} />
        </div>
        <div>
          <p className="font-arial text-white text-[13px] font-semibold">6 investigations</p>
          <p className="font-arial text-white/60 text-[11px] mt-0.5">Institutional remediation</p>
        </div>
      </div>

      <div className="relative z-10 container-main px-6 lg:px-20 py-24 md:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold-200/40 bg-gold-200/15 px-5 py-2 mb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <span className="w-2 h-2 rounded-full bg-gold-200 animate-badge-pulse" />
            <span className="font-arial text-gold-200 text-[13px] font-semibold">Trusted across Southern Africa</span>
          </div>

          {content.headline && (
            <h1
              className="font-garamond text-white text-4xl md:text-5xl lg:text-[3.5rem] font-semibold leading-[1.1] mb-6 animate-fade-up"
              style={{ animationDelay: '0.25s' }}
            >
              {content.headline}
            </h1>
          )}

          {content.subheadline && (
            <p
              className="font-arial text-white/75 text-lg md:text-xl mb-6 max-w-xl animate-fade-up"
              style={{ animationDelay: '0.4s' }}
            >
              {content.subheadline}
            </p>
          )}

          {content.quote && (
            <p
              className="font-arial text-white/55 text-base italic mb-10 max-w-xl border-l-2 border-gold-200/40 pl-5 leading-relaxed animate-fade-up"
              style={{ animationDelay: '0.55s' }}
            >
              {content.quote}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.7s' }}>
            {content.buttons?.map((btn, i) =>
              btn.style === 'primary' ? (
                <Link
                  key={i}
                  to={btn.link}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-gold-200 to-gold-300 px-8 py-4 font-arial text-[15px] font-bold text-navy-600 shadow-[0_8px_24px_rgba(212,169,79,0.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_12px_32px_rgba(212,169,79,0.5)]"
                >
                  {btn.label}
                </Link>
              ) : (
                <Link
                  key={i}
                  to={btn.link}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 backdrop-blur-sm px-7 py-4 font-arial text-[15px] font-semibold text-white transition-all duration-300 hover:bg-white/20 hover:-translate-y-1"
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
