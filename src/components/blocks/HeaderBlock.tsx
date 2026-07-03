interface HeaderBlockProps {
  content: {
    title?: string;
    intro?: string;
  };
}

export default function HeaderBlock({ content }: HeaderBlockProps) {
  return (
    <section className="bg-navy-500 pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="container-main px-6 lg:px-20">
        <h1 className="font-garamond text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          {content.title}
        </h1>
        {content.intro && (
          <p className="font-arial text-navy-100 text-base md:text-lg leading-relaxed max-w-3xl">
            {content.intro}
          </p>
        )}
      </div>
    </section>
  );
}
