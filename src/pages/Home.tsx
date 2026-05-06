import { Link } from 'react-router-dom';
import { Shield, Search, FileCheck, GraduationCap, BookOpen, TrendingUp, ClipboardCheck } from 'lucide-react';

const services = [
  {
    icon: TrendingUp,
    title: 'Donor & Corporate Compliance',
    description: 'Full-cycle multi-donor and corporate financial management. Reporting, controls, audit preparation, and compliance across international donors and private sector clients.',
    outcome: 'Audit-ready reporting, zero compliance breaches, and stakeholder confidence.',
    price: '$2,500 - $4,500 USD',
    priceNote: 'per month',
    type: 'fixed'
  },
  {
    icon: ClipboardCheck,
    title: 'Forensic Readiness Assessment',
    description: 'Diagnostic assessment against the five pillars of the Forensic Readiness Framework. Identifies verification gaps, payroll control weaknesses, and governance deficiencies.',
    outcome: 'Identifies hidden control gaps before they become financial loss.',
    price: '$3,500 - $6,000 USD',
    priceNote: 'fixed project fee',
    type: 'fixed'
  },
  {
    icon: GraduationCap,
    title: 'Governance Capacity Building Workshop',
    description: 'Structured training for boards, management, and finance teams on institutional controls, authority architecture, fraud prevention, and compliance.',
    outcome: 'Builds relationships — workshop clients become retainer clients.',
    price: '$3,000 - $5,000 USD',
    priceNote: 'per workshop',
    type: 'fixed'
  },
  {
    icon: Shield,
    title: 'Institutional Governance Architecture',
    description: 'Full SIF implementation including diagnostic, policy manuals, authority matrix, SOPs, and staff orientation for NGOs, private sector, and development organisations.',
    outcome: 'Builds a complete control system that functions independent of individuals.',
    price: 'Custom Quote',
    priceNote: '$8,000 - $25,000',
    type: 'custom'
  },
  {
    icon: Search,
    title: 'Forensic Investigation',
    description: 'Independent forensic investigation with court-ready documentation. Beneficiary verification, payroll fraud detection, asset misappropriation, and corporate fraud.',
    outcome: 'Detects and exposes fraud early — before it becomes reputational damage.',
    price: 'Custom Quote',
    priceNote: '$5,000 - $20,000',
    type: 'custom'
  },
  {
    icon: BookOpen,
    title: 'IFRS Financial Reporting & Audit Preparation',
    description: 'Accrual transition management, IFRS-compliant financial statements, going concern assessment, and audit readiness support for all organisation types.',
    outcome: 'Full financial transparency with no hidden discrepancies.',
    price: 'Custom Quote',
    priceNote: '$3,000 - $8,000',
    type: 'custom'
  },
];

export default function Services() {
  return (
    <div>
      <section className="bg-navy-500 pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="container-main px-6 lg:px-20">
          <h1 className="font-garamond text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Services & Pricing
          </h1>
          <p className="font-arial text-navy-100 text-base md:text-lg leading-relaxed max-w-3xl">
            Strategic governance and forensic finance solutions for NGOs, private sector 
            corporations, professional associations, and development organisations.
          </p>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="container-main px-6 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="border rounded-lg p-6 transition-all hover:shadow-md"
              >
                <service.icon size={28} className="text-crimson-400 mb-4" strokeWidth={1.5} />
                <h3 className="font-garamond text-navy-500 text-lg font-bold mb-2">
                  {service.title}
                </h3>
                <p className="text-crimson-400 text-sm font-semibold mb-3">
                  “{service.outcome}”
                </p>
                <p className="font-arial text-gray-500 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="pt-3 border-t border-gray-100">
                  <p className="font-garamond text-navy-600 text-lg font-bold">
                    {service.price}
                  </p>
                  {service.priceNote && (
                    <p className="font-arial text-gray-400 text-xs mt-1">
                      {service.priceNote}
                    </p>
                  )}
                </div>
                <Link
                  to="/contact"
                  className="inline-block w-full text-center mt-4 px-4 py-2 border border-navy-500 text-navy-500 rounded-lg font-arial text-sm font-semibold hover:bg-navy-500 hover:text-white transition-colors"
                >
                  Enquire
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="font-arial text-gray-400 text-xs">
              All prices in USD. Custom quotes depend on scope, scale, and complexity.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
