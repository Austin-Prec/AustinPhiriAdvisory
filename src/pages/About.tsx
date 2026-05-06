import { Award, MapPin, Briefcase, Calendar, Shield, TrendingUp, FileCheck } from 'lucide-react';

const certifications = [
  'Forensic Accounting and Fraud Examination (WVU)',
  'Business Foundations (Wharton)',
  'Finance and Quantitative Modeling (Wharton)',
  'Financial Accounting (UIUC)',
  'Advanced Financial Reporting (UIUC)',
  'Investments I and II (UIUC)',
  'Strategic Business Leadership (University of Glasgow)',
];

const stats = [
  { value: '$300K+', label: 'Portfolio Managed', detail: 'across 9 international donors' },
  { value: '12+', label: 'Years Experience', detail: 'financial sector, development & civil society' },
  { value: '6', label: 'Forensic Investigations', detail: 'resulting in institutional remediation' },
  { value: '0', label: 'Negative Audit Findings', detail: 'across all multi-donor portfolios' },
];

export default function About() {
  return (
    <div>
      {/* Hero Section - Professional Header */}
      <section className="relative bg-navy-500 pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="container-main px-6 lg:px-20">
          <div className="max-w-3xl">
            <div className="inline-block mb-4">
              <span className="text-crimson-400 font-arial text-xs uppercase tracking-wider font-semibold">Principal</span>
            </div>
            <h1 className="font-garamond text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Austin Precious Phiri
            </h1>
            <p className="font-arial text-navy-100 text-base md:text-lg leading-relaxed">
              Governance and forensic finance specialist trusted to design control systems 
              for institutions managing donor-funded resources across Southern Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white section-padding">
        <div className="container-main px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Left Column - Photo & Badges */}
            <div className="lg:col-span-1">
              {/* Photo */}
              <div className="rounded-lg overflow-hidden shadow-lg mb-6">
                <img
                  src="/Austin-Photo.jpeg"
                  alt="Austin Precious Phiri"
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
              
              {/* Authority Badges */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Briefcase size={18} className="text-crimson-400" />
                  <div>
                    <p className="font-arial text-navy-500 text-xs uppercase tracking-wider font-semibold">Current Role</p>
                    <p className="font-arial text-gray-700 text-sm">Managing Director, Austin Phiri Advisory Limited</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Shield size={18} className="text-crimson-400" />
                  <div>
                    <p className="font-arial text-navy-500 text-xs uppercase tracking-wider font-semibold">Board Appointment</p>
                    <p className="font-arial text-gray-700 text-sm">Board-Appointed CFO, National Professional Association</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <MapPin size={18} className="text-crimson-400" />
                  <div>
                    <p className="font-arial text-navy-500 text-xs uppercase tracking-wider font-semibold">Region</p>
                    <p className="font-arial text-gray-700 text-sm">Southern Africa</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Calendar size={18} className="text-crimson-400" />
                  <div>
                    <p className="font-arial text-navy-500 text-xs uppercase tracking-wider font-semibold">Experience</p>
                    <p className="font-arial text-gray-700 text-sm">12+ years applied practice</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Professional Bio */}
            <div className="lg:col-span-2">
              
              {/* Philosophy Statement - Premium highlight */}
              <div className="bg-navy-50 border-l-4 border-crimson-400 p-6 mb-8">
                <p className="font-garamond text-navy-600 text-lg italic leading-relaxed">
                  "Removing reliance on individual integrity and replacing it with enforceable institutional systems."
                </p>
                <p className="font-arial text-navy-400 text-sm mt-2">— Core professional philosophy</p>
              </div>

              {/* Bio Content */}
              <div className="space-y-5 font-arial text-gray-600 text-base leading-relaxed">
                <p>
                  Austin Precious Phiri is a Malawian institutional governance architect
                  and forensic finance practitioner with twelve years of applied experience
                  across the financial sector, international development, and civil society.
                </p>
                <p>
                  His practice focuses on designing and implementing structural control
                  environments for NGOs, professional associations, and development sector
                  organisations operating in Southern Africa. He has managed multi-donor 
                  portfolios totalling <strong className="text-navy-600">$300,000+ USD</strong> across 
                  <strong className="text-navy-600"> nine international partners</strong> with 
                  <strong className="text-green-600"> zero negative audit findings</strong>.
                </p>
                <p>
                  He has documented <strong className="text-navy-600">six forensic finance investigations</strong> resulting in
                  institutional control remediation, and developed two practitioner methodologies:
                  the <strong className="text-navy-600">Structural Integrity Framework (SIF)</strong> and the
                  <strong className="text-navy-600"> Forensic Readiness Framework (FRF)</strong> — grounded in twelve years of 
                  applied experience in African institutional environments.
                </p>
              </div>

              {/* Stats Bar - Professional metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-100">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="font-garamond text-navy-600 text-xl font-bold">{stat.value}</p>
                    <p className="font-arial text-gray-500 text-xs uppercase tracking-wider mt-1">{stat.label}</p>
                    <p className="font-arial text-gray-400 text-[10px] mt-0.5">{stat.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section - Professional */}
      <section className="bg-gray-50 section-padding">
        <div className="container-main px-6 lg:px-20">
          <div className="flex items-center gap-3 mb-2">
            <Award size={28} className="text-crimson-400" strokeWidth={1.5} />
            <h2 className="font-garamond text-navy-500 text-2xl md:text-3xl font-bold">
              Professional Credentials
            </h2>
          </div>
          <p className="font-arial text-gray-500 text-sm mb-8 max-w-2xl">
            Continuing professional education across forensic accounting, financial reporting, and strategic leadership.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="bg-white border border-gray-200 px-5 py-4 hover:border-navy-300 hover:shadow-sm transition-all duration-300"
              >
                <div className="w-2 h-2 bg-crimson-400 rounded-full mb-2"></div>
                <p className="font-arial text-gray-700 text-sm leading-relaxed">
                  {cert}
                </p>
              </div>
            ))}
          </div>
          
          {/* CFE Candidacy */}
          <div className="mt-6 p-4 bg-navy-50 border border-navy-100 rounded-lg flex items-center justify-between flex-wrap gap-3">
            <div>
              <p className="font-arial text-navy-600 text-sm font-semibold">Certified Fraud Examiner (CFE)</p>
              <p className="font-arial text-navy-400 text-xs">Candidacy in progress — Association of Certified Fraud Examiners</p>
            </div>
            <span className="text-crimson-400 text-xs font-semibold uppercase tracking-wider bg-white px-3 py-1 rounded-full">In Progress</span>
          </div>
        </div>
      </section>

      {/* Registration Footer */}
      <section className="bg-white py-8 border-t border-gray-100">
        <div className="container-main px-6 lg:px-20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">
            <p className="font-arial text-gray-400 text-xs">
              Austin Phiri Advisory Limited — Registered in Malawi
            </p>
            <p className="font-arial text-gray-400 text-xs">
              Registration Date: 21 April 2026
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
