interface PricingNotesBlockProps {
  content: {
    heading?: string;
    items?: string[];
    framework_note?: string;
  };
}

export default function PricingNotesBlock({ content }: PricingNotesBlockProps) {
  return (
    <section className="bg-white pb-16 md:pb-24">
      <div className="container-main px-6 lg:px-20">
        <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
          {content.heading && (
            <h4 className="font-garamond text-navy-500 text-lg font-bold mb-3">
              {content.heading}
            </h4>
          )}
          <ul className="space-y-2 text-sm text-gray-600">
            {content.items?.map((item, i) => (
              <li key={i}>
                {/* Items contain inline <strong> tags (e.g. highlighting
                    "Fixed-price services"), the same rich-content pattern
                    used for bio paragraphs on the About page. */}
                • <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
        </div>

        {content.framework_note && (
          <div className="mt-8 text-center">
            <p
              className="font-arial text-gray-500 text-sm"
              dangerouslySetInnerHTML={{
                __html: content.framework_note.replace(
                  /<strong>/g,
                  '<strong class="text-navy-600">'
                ),
              }}
            />
          </div>
        )}
      </div>
    </section>
  );
}
