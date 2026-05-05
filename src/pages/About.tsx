import { User, Award } from 'lucide-react';

const certifications = [
  'WVU Forensic Accounting and Fraud Examination',
  'Wharton Business Foundations',
  'Wharton Finance and Quantitative Modeling',
  'UIUC Financial Accounting',
  'UIUC Advanced Financial Reporting',
  'UIUC Investments I and II',
  'University of Glasgow Strategic Business Leadership',
  'CFE Candidacy in progress via ACFE',
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
            The practitioner behind the practice.
          </p>
        </div>
      </section>

      {/* Biography */}
      <section className="bg-white section-padding">
        <div className="container-main px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
         {/* Your Photo */}
<div className="lg:col-span-1">
  <img
    src="/Austin-Photo.jpeg"
    alt="Austin Precious Phiri"
    className="w-full aspect-[3/4] object-cover rounded-lg shadow-lg"
  />
</div>

            {/* Bio Text */}
            <div className="lg:col-span-2">
              <h2 className="font-garamond text-navy-500 text-2xl md:text-3xl font-bold mb-2">
                Austin Precious Phiri
              </h2>
              <p className="font-arial text-gold-500 text-sm uppercase tracking-wider font-semibold mb-8">
                Institutional Governance Architect | Forensic Finance Practitioner
              </p>

              <div className="space-y-5 font-arial text-gray-600 text-base leading-relaxed">
                <p>
                  Austin Precious Phiri is a Malawian institutional governance architect
                  and forensic finance practitioner with twelve years of applied experience
                  across the financial sector, international development, and civil
                  society.
                </p>
                <p>
                  He is the Managing Director of Austin Phiri Advisory Limited and
                  Board-Appointed CFO of a national professional association in Malawi.
                  His practice focuses on designing and implementing structural control
                  environments for NGOs, professional associations, and development sector
                  organisations operating in Southern Africa.
                </p>
                <p>
                  He has managed multi-donor portfolios totalling MWK 500 million across
                  nine international partners with zero negative audit findings, and has
                  documented six forensic finance investigations resulting in
                  institutional control remediation.
                </p>
                <p>
                  He developed the Structural Integrity Framework and the Forensic
                  Readiness Framework — two practitioner methodologies for institutional
                  governance and forensic finance — grounded in twelve years of applied
                  experience in African institutional environments.
                </p>
                <p className="text-gray-500 text-sm">
                  Austin Phiri Advisory Limited is registered in Malawi. Registration
                  date: 21 April 2026.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-gray-50 section-padding">
        <div className="container-main px-6 lg:px-20">
          <div className="flex items-center gap-3 mb-8">
            <Award size={28} className="text-crimson-400" strokeWidth={1.5} />
            <h3 className="font-garamond text-navy-500 text-2xl font-bold">
              Professional Certifications
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="bg-white border border-gray-200 px-6 py-4 hover:border-navy-300 transition-colors duration-300"
              >
                <p className="font-arial text-gray-700 text-sm leading-relaxed">
                  {cert}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
