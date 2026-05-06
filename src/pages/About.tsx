import { Award, MapPin, Briefcase, Calendar } from 'lucide-react';

const certifications = [
  'Forensic Accounting and Fraud Examination (WVU)',
  'Business Foundations (Wharton)',
  'Finance and Quantitative Modeling (Wharton)',
  'Financial Accounting (UIUC)',
  'Advanced Financial Reporting (UIUC)',
  'Investments I and II (UIUC)',
  'Strategic Business Leadership (University of Glasgow)',
];

export default function About() {
  return (
    <div>
      {/* Header */}
      <section className="bg-navy-500 pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="container-main px-6 lg:px-20">
          <h1 className="font-garamond text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            About
          </h1>
          <p className="font-arial text-navy-100 text-base md:text-lg leading-relaxed max-w-3xl">
            Governance and forensic finance specialist trusted to design control systems 
            for institutions managing donor-funded resources across Southern Africa.
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="bg-white section-padding">
        <div className="container-main px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Photo */}
            <div className="lg:col-span-1">
              <img
                src="/Austin-Photo.jpeg"
                alt="Austin Precious Phiri"
                className="w-full rounded-lg shadow-md"
              />
              
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-gray-600">
                  <Briefcase size={18} className="text-crimson-400" />
                  <span className="font-arial text-sm">Managing Director</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin size={18} className="text-crimson-400" />
                  <span className="font-arial text-sm">Zomba, Malawi</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Calendar size={18} className="text-crimson-400" />
                  <span className="font-arial text-sm">12+ years experience</span>
                </div>
              </div>
            </div>

            {/* Bio Text */}
            <div className="lg:col-span-2">
              {/* Authority Quote */}
              <div className="bg-navy-50 border-l-4 border-crimson-400 p-4 mb-6">
                <p className="font-arial text-navy-700 text-sm italic leading-relaxed">
                  "Removing reliance on individual integrity and replacing it with enforceable institutional systems."
                </p>
              </div>

              <div className="space-y-4 font-arial text-gray-600 text-base leading-relaxed">
                <p>
                  Austin Precious Phiri is a Malawian institutional governance architect
                  and forensic finance practitioner with twelve years of applied experience
                  across the financial sector, international development, and civil society.
                </p>
                <p>
                  He is the Managing Director of Austin Phiri Advisory Limited and
                  Board-Appointed CFO of a national professional association in Malawi.
                </p>
                <p>
                  He has managed multi-donor portfolios totalling <strong>$300,000+ USD</strong> across
                  nine international partners with <strong>zero negative audit findings</strong>, and has
                  documented six forensic finance investigations resulting in institutional
                  control remediation.
                </p>
                <p>
                  He developed the <strong>Structural Integrity Framework (SIF)</strong> and the
                  <strong> Forensic Readiness Framework (FRF)</strong> — two practitioner methodologies 
                  grounded in twelve years of applied experience in African institutional environments.
                </p>
                <p className="text-gray-400 text-sm pt-2">
                  Austin Phiri Advisory Limited is registered in Malawi. Registration date: 21 April 2026.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-gray-50 section-padding">
        <div className="container-main px-6 lg:px-20">
          <div className="flex items-center gap-3 mb-6">
            <Award size={24} className="text-crimson-400" />
            <h3 className="font-garamond text-navy-500 text-xl font-bold">
              Professional Certifications
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {certifications.map((cert) => (
              <div key={cert} className="bg-white border border-gray-200 px-4 py-3">
                <p className="font-arial text-gray-700 text-sm">{cert}</p>
              </div>
            ))}
          </div>
          <p className="font-arial text-gray-400 text-sm mt-4">
            CFE Candidacy in progress — Association of Certified Fraud Examiners
          </p>
        </div>
      </section>
    </div>
  );
}
