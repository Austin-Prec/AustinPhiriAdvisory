import { Award, MapPin, Briefcase, Calendar, ExternalLink } from 'lucide-react';

const certifications = [
  'Forensic Accounting & Fraud Examination (WVU)',
  'Business Foundations (Wharton)',
  'Finance & Quantitative Modeling (Wharton)',
  'Financial Accounting (UIUC)',
  'Advanced Financial Reporting (UIUC)',
  'Investments I & II (UIUC)',
  'Strategic Business Leadership (University of Glasgow)',
];

export default function About() {
  return (
    <div>
      {/* Minimal Hero */}
      <section className="bg-navy-500 pt-32 pb-20">
        <div className="container-main px-6 lg:px-20">
          <div className="max-w-2xl">
            <h1 className="font-garamond text-white text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-4">
              Austin Precious Phiri
            </h1>
            <p className="font-arial text-navy-200 text-base md:text-lg leading-relaxed">
              Governance architect and forensic finance practitioner.
            </p>
          </div>
        </div>
      </section>

      {/* Two-Column Layout with Divider */}
      <section className="bg-white py-20">
        <div className="container-main px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Left: Profile */}
            <div className="lg:col-span-1">
              <div className="sticky top-28">
                <div className="aspect-[3/4] overflow-hidden mb-8">
                  <img
                    src="/Austin-Photo.jpeg"
                    alt="Austin Precious Phiri"
                    className="w-full h-full object-cover grayscale-[15%]"
                  />
                </div>
                
                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-3 text-gray-500">
                    <Briefcase size={16} />
                    <span className="font-arial">Managing Director, Austin Phiri Advisory</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-500">
                    <Calendar size={16} />
                    <span className="font-arial">Board-Appointed CFO</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-500">
                    <MapPin size={16} />
                    <span className="font-arial">Southern Africa</span>
                  </div>
                </div>

                <div className="h-px bg-gray-100 my-8"></div>

                <div>
                  <p className="font-arial text-xs uppercase tracking-wider text-gray-400 mb-3">Registered Office</p>
                  <p className="font-arial text-sm text-gray-600">Zomba, Malawi</p>
                  <p className="font-arial text-xs text-gray-400 mt-1">Registered 21 April 2026</p>
                </div>
              </div>
            </div>

            {/* Right: Bio with elegant typography */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                <p className="font-garamond text-navy-500 text-xl leading-relaxed">
                  Trusted to design control systems for institutions managing donor-funded resources across Southern Africa.
                </p>
                
                <div className="space-y-4 font-arial text-gray-500 text-base leading-relaxed">
                  <p>
                    Austin Precious Phiri is a Malawian institutional governance architect
                    and forensic finance practitioner with twelve years of applied experience
                    across the financial sector, international development, and civil society.
                  </p>
                  <p>
                    He has managed multi-donor portfolios totalling <span className="text-navy-600 font-medium">$300,000+ USD</span> across
                    nine international partners with <span className="text-navy-600 font-medium">zero negative audit findings</span>,
                    and has documented six forensic finance investigations resulting in institutional
                    control remediation.
                  </p>
                  <p>
                    He developed the <span className="text-navy-600 font-medium">Structural Integrity Framework (SIF)</span> and the
                    <span className="text-navy-600 font-medium"> Forensic Readiness Framework (FRF)</span> — practitioner methodologies 
                    grounded in applied experience in African institutional environments.
                  </p>
                </div>

                <div className="h-px bg-gray-100 my-8"></div>

                {/* Credentials */}
                <div>
                  <h3 className="font-arial text-xs uppercase tracking-wider text-gray-400 mb-6">Selected Professional Training</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                    {certifications.map((cert) => (
                      <p key={cert} className="font-arial text-gray-500 text-sm py-1 border-b border-gray-50">
                        {cert}
                      </p>
                    ))}
                  </div>
                  <p className="font-arial text-gray-400 text-sm mt-6">
                    CFE Candidacy — Association of Certified Fraud Examiners
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
