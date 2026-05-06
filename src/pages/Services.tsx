import { Link } from 'react-router-dom';
import { Shield, Search, FileCheck, AlertTriangle, GraduationCap, BookOpen, TrendingUp, ClipboardCheck } from 'lucide-react';

const services = [
  {
    icon: TrendingUp,
    title: 'Donor Compliance and Portfolio Management',
    description: 'Full-cycle multi-donor financial management. Reporting, controls, audit preparation, and compliance across UN agencies, bilateral donors, and philanthropic partners.',
    price: '$2,500 - $4,500 / month',
    type: 'fixed'
  },
  {
    icon: ClipboardCheck,
    title: 'Forensic Readiness Assessment',
    description: 'Diagnostic assessment against the five pillars of the Forensic Readiness Framework. Identifies verification gaps, payroll control weaknesses, and board governance gaps.',
    price: '$3,500 - $6,000',
    type: 'fixed'
  },
  {
    icon: GraduationCap,
    title: 'Governance Capacity Building Workshop',
    description: 'Structured training for boards, management, and finance teams on institutional controls, authority architecture, fraud prevention, and donor compliance.',
    price: '$3,000 - $5,000',
    type: 'fixed'
  },
  {
    icon: Shield,
    title: 'Institutional Governance Architecture',
    description: 'Full SIF implementation including diagnostic, policy manuals, authority matrix, SOPs, and staff orientation.',
    price: 'Custom Quote',
    priceNote: '$8,000 - $25,000',
    type: 'custom'
  },
  {
    icon: Search,
    title: 'Forensic Investigation',
    description: 'Independent forensic investigation with court-ready documentation. Beneficiary verification, payroll fraud detection, and asset misappropriation investigation.',
    price: 'Custom Quote',
    priceNote: '$5,000 - $20,000',
    type: 'custom'
  },
  {
    icon: BookOpen,
    title: 'IFRS Financial Reporting & Audit Preparation',
    description: 'Accrual transition management, IFRS-compliant financial statements, going concern assessment, and audit readiness support.',
    price: 'Custom Quote',
    priceNote: '$3,000 - $8,000',
    type: 'custom'
  },
];

export default function Services() {
  return (
    <div>
      {/* Header */}
      <section className="bg-navy-500 pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="container-main px-6 lg:px-20">
          <h1 className="font-garamond text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Services
          </h1>
          <p className="font-arial text-navy-100 text-base md:text-lg leading-relaxed max-w-3xl">
            Strategic governance and forensic finance solutions for NGOs and development organisations.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white section-padding">
        <div className="container-main px-6 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className={`border rounded-lg p-6 transition-all hover:shadow-md ${
                  service.type === 'custom' ? 'border-gray-200 bg-white' : 'border-gray-200 bg-white'
                }`}
              >
                <service.icon size={28} className="text-crimson-400 mb-4" strokeWidth={1.5} />
                <h3 className="font-garamond text-navy-500 text-lg font-bold mb-2">
                  {service.title}
                </h3>
                <p className="font-arial text-gray-500 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="pt-3 border-t border-gray-100">
                  <p className={`font-garamond text-lg font-bold ${service.type === 'custom' ? 'text-navy-500' : 'text-crimson-400'}`}>
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

          {/* Note */}
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
