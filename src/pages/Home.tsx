import { Link } from 'react-router-dom';
import { Shield, Search, FileCheck, ArrowRight, TrendingUp, ClipboardCheck, Building } from 'lucide-react';

const valueBlocks = [
  {
    icon: Shield,
    title: 'Structural Integrity',
    description: 'Control systems that prevent override, even at senior management level.',
    outcome: 'No single point of governance failure.'
  },
  {
    icon: Search,
    title: 'Forensic Readiness',
    description: 'Systems that detect and expose fraud early — before it becomes reputational damage.',
    outcome: 'Every transaction verifiable, traceable, and defensible.'
  },
  {
    icon: FileCheck,
    title: 'Donor Compliance',
    description: 'Audit-ready reporting, zero compliance breaches, and donor confidence across multi-donor portfolios.',
    outcome: 'Peace of mind for you and your funders.'
  },
];

const credentials = [
  { value: 'MWK 500M+', label: 'Managed across multi-donor portfolios', detail: 'with zero adverse audit findings' },
  { value: '9', label: 'International Donors', detail: 'UN agencies, bilateral & philanthropic' },
  { value: '6', label: 'Forensic Investigations', detail: 'resulting in institutional control remediation' },
  { value: '12', label: 'Years Applied Experience', detail: 'financial sector, development & civil society' },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section - OUTCOME FIRST, NOT PHILOSOPHY */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 lg:pt-44 lg:pb-36">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/landing-page-bg.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-navy-500/85"></div>
        </div>
        
        {/* Content */}
        <div className="relative container-main px-6 lg:px-20 z-10">
          <div className="max-w-4xl">
            {/* OUTCOME LINE - What client gets */}
            <h1 className="font-garamond text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-snug mb-6">
              We help NGOs and development organisations eliminate audit risk, prevent financial leakages, and build enforcement-driven governance systems.
            </h1>
            
            {/* MECHANISM LINE - How we do it */}
            <p className="font-arial text-navy-100 text-base md:text-lg leading-relaxed mb-4">
              Through institutional governance architecture and forensic finance advisory.
            </p>
            
            {/* PHILOSOPHY LINE - The intellectual foundation (kept, but not headline) */}
            <p className="font-arial text-navy-200 text-sm italic leading-relaxed mb-10 max-w-3xl">
              "Institutions do not fail because they lack governance frameworks. They fail because enforcement is left to individual integrity rather than embedded in structural controls."
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary text-center">
                Book a Consultation
              </Link>
              <Link to="/frameworks" className="btn-secondary border-navy-200 text-navy-100 hover:bg-navy-200 hover:text-navy-700 text-center">
                Read our Frameworks
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions - WITH OUTCOMES */}
      <section className="bg-white section-padding">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="font-garamond text-navy-500 text-2xl md:text-3xl font-bold mb-3">
              What Clients Gain
            </h2>
            <p className="font-arial text-gray-600 max-w-2xl mx-auto">
              Not frameworks. Not methodology. Real outcomes that protect your institution.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {valueBlocks.map((block) => (
              <div
                key={block.title}
                className="border border-gray-200 p-8 lg:p-10 hover:border-navy-300 transition-colors duration-300"
              >
                <block.icon size={32} className="text-crimson-400 mb-5" strokeWidth={1.5} />
                <h3 className="font-garamond text-navy-500 text-xl font-bold mb-3">
                  {block.title}
                </h3>
                <p className="font-arial text-gray-600 text-sm leading-relaxed mb-3">
                  {block.description}
                </p>
                <p className="font-arial text-crimson-400 text-xs font-semibold uppercase tracking-wide mt-2">
                  → {block.outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials Bar - CONTEXTUALIZED */}
      <section className="bg-navy-500 py-12 md:py-16">
        <div className="container-main px-6 lg:px-20">
          <div className="text-center mb-8">
            <p className="font-arial text-navy-100 text-sm uppercase tracking-wider">
              Verified track record across Southern Africa
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
            {credentials.map((cred) => (
              <div key={cred.label} className="text-center">
                <div className="font-garamond text-gold-200 text-3xl md:text-4xl font-bold mb-1">
                  {cred.value}
                </div>
                <div className="font-arial text-navy-100 text-xs uppercase tracking-wider mb-1">
                  {cred.label}
                </div>
                <div className="font-arial text-navy-200 text-[11px]">
                  {cred.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview - WITH AUTHORITY FRAMING */}
      <section className="bg-gray-50 section-padding">
        <div className="container-main px-6 lg:px-20">
          <div className="max-w-3xl">
            <h2 className="font-garamond text-navy-500 text-2xl md:text-3xl font-bold mb-6">
              Trusted to Protect Donor-Funded Resources
            </h2>
            <p className="font-arial text-gray-600 text-base leading-relaxed mb-4">
              Austin Precious Phiri is a governance and forensic finance specialist trusted to design control systems for institutions managing donor-funded resources across Southern Africa.
            </p>
            <p className="font-arial text-gray-600 text-base leading-relaxed mb-4">
              As Managing Director of Austin Phiri Advisory Limited and Board-Appointed CFO of a national professional association in Malawi, his work focuses on removing reliance on individual integrity and replacing it with enforceable institutional systems.
            </p>
            <p className="font-arial text-gray-600 text-base leading-relaxed mb-6">
              His practitioner methodologies — the Structural Integrity Framework (SIF) and Forensic Readiness Framework (FRF) — are applied in all advisory engagements.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-arial text-crimson-400 text-sm font-semibold uppercase tracking-wide hover:text-crimson-500 transition-colors duration-200"
            >
              Read full biography <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar - NEW SECTION */}
      <section className="bg-white py-8 border-t border-gray-100">
        <div className="container-main px-6 lg:px-20">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <p className="font-arial text-gray-400 text-xs uppercase tracking-wider">Framework</p>
              <p className="font-garamond text-navy-500 text-sm font-semibold">Structural Integrity (SIF)</p>
            </div>
            <div>
              <p className="font-arial text-gray-400 text-xs uppercase tracking-wider">Framework</p>
              <p className="font-garamond text-navy-500 text-sm font-semibold">Forensic Readiness (FRF)</p>
            </div>
            <div>
              <p className="font-arial text-gray-400 text-xs uppercase tracking-wider">Registered</p>
              <p className="font-garamond text-navy-500 text-sm font-semibold">Malawi · 21 April 2026</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
