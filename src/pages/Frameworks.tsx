import { Link } from 'react-router-dom';
import { Download, Shield, Search } from 'lucide-react';

const sifPillars = [
  {
    number: 'I',
    name: 'Policy Architecture',
    description:
      'The foundational policy infrastructure that defines institutional intent, boundaries, and behavioural expectations.',
  },
  {
    number: 'II',
    name: 'Operational Controls',
    description:
      'The procedural and process-level controls that translate policy into daily operational reality.',
  },
  {
    number: 'III',
    name: 'Authority Architecture',
    description:
      'The formal delegation and authorisation structures that define who may act, within what limits, and under what conditions.',
  },
  {
    number: 'IV',
    name: 'Enforcement Mechanisms',
    description:
      'The structural enforcement and consequence infrastructure that ensures compliance is system-driven, not person-dependent.',
  },
];

const frfPillars = [
  {
    number: 'I',
    name: 'Beneficiary Verification Architecture',
    description:
      'Structural controls for verifying the existence, eligibility, and entitlement of every beneficiary before and after payment.',
  },
  {
    number: 'II',
    name: 'Payroll Integrity Controls',
    description:
      'Verification infrastructure ensuring that every payroll entry corresponds to a verified, active, and authorised individual.',
  },
  {
    number: 'III',
    name: 'Vendor and Payee Verification Register',
    description:
      'A maintained register of verified vendors and payees with ongoing due diligence and periodic re-verification.',
  },
  {
    number: 'IV',
    name: 'Quarterly Forensic Review Protocol',
    description:
      'A structured quarterly review process that examines transaction patterns, control adherence, and anomaly indicators.',
  },
  {
    number: 'V',
    name: 'Board-Led Forensic Governance',
    description:
      'Board-level governance structures that ensure forensic readiness is maintained, resourced, and enforced.',
  },
];

export default function Frameworks() {
  return (
    <div>
      {/* Header */}
      <section className="bg-navy-500 pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="container-main px-6 lg:px-20">
          <h1 className="font-garamond text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Frameworks
          </h1>
          <p className="font-arial text-navy-100 text-base md:text-lg leading-relaxed max-w-3xl">
            Two proprietary practitioner methodologies for institutional governance and
            forensic finance, grounded in twelve years of applied experience in African
            institutional environments.
          </p>
        </div>
      </section>

      {/* SIF Section */}
      <section className="bg-white section-padding">
        <div className="container-main px-6 lg:px-20">
          <div className="flex items-center gap-4 mb-6">
            <Shield size={36} className="text-crimson-400" strokeWidth={1.5} />
            <h2 className="font-garamond text-navy-500 text-2xl md:text-3xl font-bold">
              The Structural Integrity Framework
            </h2>
          </div>
          <p className="font-arial text-gold-500 text-sm uppercase tracking-wider font-semibold mb-6">
            A practitioner's framework for people-independent institutional governance
          </p>
          <p className="font-arial text-gray-600 text-base leading-relaxed mb-10 max-w-4xl">
            The SIF is a governance architecture methodology for designing, implementing,
            and sustaining institutional control environments in which organisational
            integrity is structurally embedded rather than individually maintained. It
            comprises four interdependent pillars: Policy Architecture, Operational
            Controls, Authority Architecture, and Enforcement Mechanisms.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {sifPillars.map((pillar) => (
              <div
                key={pillar.number}
                className="border border-gray-200 p-6 lg:p-8 hover:border-navy-300 transition-colors duration-300"
              >
                <div className="font-garamond text-gold-500 text-2xl font-bold mb-1">
                  {pillar.number}
                </div>
                <h4 className="font-garamond text-navy-500 text-base font-bold mb-3">
                  {pillar.name}
                </h4>
                <p className="font-arial text-gray-600 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          <a
            href="/sif-framework-paper.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-gold"
          >
            <Download size={16} />
            Download the SIF Framework Paper
          </a>
        </div>
      </section>

      {/* Divider */}
      <div className="bg-gray-100 h-px" />

      {/* FRF Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-main px-6 lg:px-20">
          <div className="flex items-center gap-4 mb-6">
            <Search size={36} className="text-crimson-400" strokeWidth={1.5} />
            <h2 className="font-garamond text-navy-500 text-2xl md:text-3xl font-bold">
              The Forensic Readiness Framework
            </h2>
          </div>
          <p className="font-arial text-gold-500 text-sm uppercase tracking-wider font-semibold mb-6">
            A practitioner's framework for proactive forensic infrastructure in
            institutional environments
          </p>
          <p className="font-arial text-gray-600 text-base leading-relaxed mb-10 max-w-4xl">
            The FRF is a governance methodology for building and maintaining the
            documentation, verification, and review infrastructure that enables an
            institution to investigate any financial transaction at any time — with
            speed, completeness, and evidentiary integrity — regardless of whether
            fraud has been detected. It comprises five pillars: Beneficiary Verification
            Architecture, Payroll Integrity Controls, Vendor and Payee Verification
            Register, Quarterly Forensic Review Protocol, and Board-Led Forensic
            Governance.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
            {frfPillars.map((pillar) => (
              <div
                key={pillar.number}
                className="border border-gray-200 bg-white p-6 lg:p-8 hover:border-navy-300 transition-colors duration-300"
              >
                <div className="font-garamond text-gold-500 text-2xl font-bold mb-1">
                  {pillar.number}
                </div>
                <h4 className="font-garamond text-navy-500 text-base font-bold mb-3">
                  {pillar.name}
                </h4>
                <p className="font-arial text-gray-600 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          <a
            href="/frf-framework-paper.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-gold"
          >
            <Download size={16} />
            Download the FRF Framework Paper
          </a>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-navy-500 py-12 md:py-16">
        <div className="container-main px-6 lg:px-20 text-center">
          <p className="font-arial text-navy-100 text-base leading-relaxed max-w-3xl mx-auto mb-6">
            Both frameworks are available for download. For advisory engagements
            applying either framework to your institution, contact Austin Phiri
            Advisory.
          </p>
          <Link to="/contact" className="btn-primary">
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
