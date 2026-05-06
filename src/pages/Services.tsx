import { Link } from 'react-router-dom';
import { Shield, Search, FileCheck, GraduationCap, BookOpen, TrendingUp, ClipboardCheck } from 'lucide-react';

const services = [
  {
    icon: TrendingUp,
    title: 'Donor Compliance',
    description: 'Multi-donor portfolio management, donor reporting, and audit preparation across UN agencies, bilateral donors, and philanthropic partners.',
    price: '$2,500 – $4,500',
    period: '/ month',
    type: 'fixed'
  },
  {
    icon: ClipboardCheck,
    title: 'Forensic Readiness',
    description: 'Diagnostic assessment identifying verification gaps, payroll control weaknesses, and board governance deficiencies before they become material.',
    price: '$3,500 – $6,000',
    period: '',
    type: 'fixed'
  },
  {
    icon: GraduationCap,
    title: 'Governance Workshop',
    description: 'Structured executive education for boards and management on institutional controls, authority architecture, and fraud prevention.',
    price: '$3,000 – $5,000',
    period: '',
    type: 'fixed'
  },
  {
    icon: Shield,
    title: 'Governance Architecture',
    description: 'Full SIF implementation: diagnostic, policy manuals, authority matrix, SOPs, and staff orientation.',
    price: 'Custom',
    period: '',
    type: 'custom'
  },
  {
    icon: Search,
    title: 'Forensic Investigation',
    description: 'Independent investigation with court-ready documentation: beneficiary verification, payroll fraud detection, asset misappropriation.',
    price: 'Custom',
    period: '',
    type: 'custom'
  },
  {
    icon: BookOpen,
    title: 'IFRS Audit Preparation',
    description: 'Accrual transition, IFRS-compliant financial statements, going concern assessment, and audit readiness.',
    price: 'Custom',
    period: '',
    type: 'custom'
  },
];

export default function Services() {
  return (
    <div>
      {/* Minimal Hero */}
      <section className="bg-navy-500 pt-32 pb-20">
        <div className="container-main px-6 lg:px-20">
          <div className="max-w-2xl">
            <h1 className="font-garamond text-white text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-4">
              Services
            </h1>
            <p className="font-arial text-navy-200 text-base md:text-lg leading-relaxed">
              Advisory engagements grounded in applied practice, not theory.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid - Minimal & Elegant */}
      <section className="bg-white py-20">
        <div className="container-main px-6 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {services.map((service) => (
              <div key={service.title} className="group">
                <div className="mb-4">
                  <service.icon size={24} className="text-crimson-400" strokeWidth={1.2} />
                </div>
                <h3 className="font-garamond text-navy-500 text-xl font-medium mb-2">
                  {service.title}
                </h3>
                <p className="font-arial text-gray-500 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="pt-3">
                  <p className="font-garamond text-navy-600 text-lg">
                    {service.price}
                    <span className="font-arial text-gray-400 text-sm ml-1">{service.period}</span>
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="inline-block mt-4 font-arial text-navy-500 text-sm font-medium border-b border-navy-200 hover:border-navy-500 transition-colors pb-0.5"
                >
                  Enquire →
                </Link>
              </div>
            ))}
          </div>

          {/* Elegant Footer Note */}
          <div className="border-t border-gray-100 mt-16 pt-8 text-center">
            <p className="font-arial text-gray-400 text-xs tracking-wide">
              All prices in USD. Custom engagements quoted based on scope, complexity, and duration.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
