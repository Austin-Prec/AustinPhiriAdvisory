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
    <section
      className="relative min-h-[92vh] flex items-center overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at top right, #2D4A7A 0%, #1F3864 45%, #13223A 100%)',
      }}
    >
      {/* Optional editable background photo, kept at the same very low
          opacity as before — it sits beneath the radial gradient's own
          color stops and the orbs, so it still reads as ambient texture
          rather than competing with either column's real content. */}
      {content.background_image_url && (
        <div className="absolute inset-0 opacity-10">
          <img
            src={content.background_image_url}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Two soft gradient orbs, anchored top-right and bottom-left,
          replacing the previous drifting-grid + blob combination with a
          calmer, more deliberate pair of glows matching the deep-glass
          direction. */}
      <div
        className="absolute -top-48 -right-36 w-[600px] h-[600px] rounded-full blur-[80px]"
        style={{ background: 'radial-gradient(circle, rgba(212,169,79,0.35), transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-48 -left-24 w-[450px] h-[450px] rounded-full blur-[80px]"
        style={{ background: 'radial-gradient(circle, rgba(139,26,26,0.3), transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 container-main px-6 lg:px-20 py-24 md:py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-16 items-center">
          {/* Left column: text content */}
          <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-200/30 bg-gold-200/[0.12] backdrop-blur-md px-5 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-gold-200 animate-badge-pulse" />
              <span className="font-arial text-gold-200 text-[13px] font-semibold">Trusted across Southern Africa</span>
            </div>

            {content.headline && (
              <h1 className="font-garamond text-white text-4xl md:text-5xl lg:text-[3.4rem] font-semibold leading-[1.12] mb-6">
                {content.headline}
              </h1>
            )}

            {content.subheadline && (
              <p className="font-arial text-white/70 text-lg mb-6 max-w-lg">
                {content.subheadline}
              </p>
            )}

            {content.quote && (
              <p className="font-arial text-white/55 text-base italic mb-10 max-w-lg border-l-2 border-gold-200/40 pl-5 leading-relaxed">
                {content.quote}
              </p>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              {content.buttons?.map((btn, i) =>
                btn.style === 'primary' ? (
                  <Link
                    key={i}
                    to={btn.link}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-gold-100 to-gold-200 px-8 py-4 font-arial text-[15px] font-bold text-navy-600 shadow-[0_10px_30px_-6px_rgba(212,169,79,0.5)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]"
                    style={{ boxShadow: '0 10px 30px -6px rgba(212,169,79,0.5), inset 0 1px 0 rgba(255,255,255,0.4)' }}
                  >
                    {btn.label}
                  </Link>
                ) : (
                  <Link
                    key={i}
                    to={btn.link}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/18 bg-white/[0.06] backdrop-blur-xl px-7 py-4 font-arial text-[15px] font-semibold text-white transition-all duration-300 hover:bg-white/[0.12] hover:-translate-y-1"
                  >
                    {btn.label}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Right column: fanned, stacked glass card cluster. Hidden below
              lg — the fixed rotation/offset math that makes the fan read
              correctly needs real horizontal room, and on a narrow phone
              screen this would either overflow or need to be crushed into
              something unrecognizable. The two-column grid collapses to
              a single column above, so mobile still gets the full text
              content, just without this decorative cluster. */}
          <div className="hidden lg:block relative h-[420px]" aria-hidden="true">
            <div
              className="absolute w-[280px] rounded-[20px] border border-white/15 bg-white/10 backdrop-blur-xl p-6"
              style={{
                top: 0,
                left: '40px',
                transform: 'rotate(-6deg)',
                zIndex: 3,
                boxShadow: '0 30px 60px -12px rgba(0,0,0,0.5)',
              }}
            >
              <div className="w-9 h-9 rounded-[10px] bg-gold-200/20 flex items-center justify-center mb-3">
                <Shield size={18} className="text-gold-200" strokeWidth={2} />
              </div>
              <p className="font-garamond text-gold-200 text-[1.7rem] font-bold leading-none">Zero</p>
              <p className="font-arial text-white/85 text-[13px] font-semibold mt-1">Audit findings</p>
              <p className="font-arial text-white/50 text-[11px] mt-0.5">Across 9 international donors</p>
            </div>

            <div
              className="absolute w-[280px] rounded-[20px] border border-white/15 bg-gold-200/[0.15] backdrop-blur-xl p-6"
              style={{
                top: '90px',
                left: '90px',
                transform: 'rotate(4deg)',
                zIndex: 2,
                boxShadow: '0 30px 60px -12px rgba(0,0,0,0.5)',
              }}
            >
              <div className="w-9 h-9 rounded-[10px] bg-gold-200/20 flex items-center justify-center mb-3">
                <Search size={18} className="text-gold-200" strokeWidth={2} />
              </div>
              <p className="font-garamond text-gold-200 text-[1.7rem] font-bold leading-none">6</p>
              <p className="font-arial text-white/85 text-[13px] font-semibold mt-1">Investigations</p>
              <p className="font-arial text-white/50 text-[11px] mt-0.5">Institutional remediation</p>
            </div>

            <div
              className="absolute w-[280px] rounded-[20px] border border-white/15 bg-crimson-400/[0.15] backdrop-blur-xl p-6"
              style={{
                top: '190px',
                left: '20px',
                transform: 'rotate(-3deg)',
                zIndex: 1,
                boxShadow: '0 30px 60px -12px rgba(0,0,0,0.5)',
              }}
            >
              <p className="font-garamond text-gold-200 text-[1.7rem] font-bold leading-none">$300K+</p>
              <p className="font-arial text-white/85 text-[13px] font-semibold mt-1">Managed portfolios</p>
              <p className="font-arial text-white/50 text-[11px] mt-0.5">Zero adverse findings</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
