interface BioBlockProps {
  content: {
    name?: string;
    title?: string;
    quote?: string;
    paragraphs?: string[];
    footnote?: string;
  };
}

export default function BioBlock({ content }: BioBlockProps) {
  return (
    <div className="lg:col-span-2">
      {content.name && (
        <h2 className="font-garamond text-navy-500 text-2xl font-bold mb-2">
          {content.name}
        </h2>
      )}
      {content.title && (
        <p className="font-arial text-crimson-400 text-sm uppercase tracking-wider font-semibold mb-4">
          {content.title}
        </p>
      )}

      {content.quote && (
        <div className="bg-navy-50 border-l-4 border-crimson-400 p-4 mb-6">
          <p className="font-arial text-navy-700 text-sm italic leading-relaxed">
            {content.quote}
          </p>
        </div>
      )}

      <div className="space-y-4 font-arial text-gray-600 text-base leading-relaxed">
        {content.paragraphs?.map((p, i) => (
          // Paragraphs may contain inline <strong> tags (e.g. highlighting a
          // figure like "$300,000+ USD"), the same rich-content pattern used
          // for blog post bodies elsewhere in the admin panel.
          <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
        ))}
        {content.footnote && (
          <p className="text-gray-400 text-sm pt-2">{content.footnote}</p>
        )}
      </div>
    </div>
  );
}
