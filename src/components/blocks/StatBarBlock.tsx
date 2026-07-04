interface Stat {
  value: string;
  label: string;
  detail: string;
}

interface StatBarBlockProps {
  content: {
    label?: string;
    stats?: Stat[];
  };
}

export default function StatBarBlock({ content }: StatBarBlockProps) {
  return (
    <section className="bg-navy-500 py-12 md:py-16">
      <div className="container-main px-6 lg:px-20">
        {content.label && (
          <div className="text-center mb-8">
            <p className="font-arial text-navy-100 text-sm uppercase tracking-wider">
              {content.label}
            </p>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
          {content.stats?.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-garamond text-gold-200 text-3xl md:text-4xl font-bold mb-1">
                {stat.value}
              </div>
              <div className="font-arial text-navy-100 text-xs uppercase tracking-wider mb-1">
                {stat.label}
              </div>
              <div className="font-arial text-navy-200 text-[11px]">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
