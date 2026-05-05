import { Link } from 'react-router-dom';
import {
  Shield,
  Search,
  FileCheck,
  AlertTriangle,
  GraduationCap,
  BookOpen,
  ArrowRight,
  TrendingUp,
  ClipboardCheck,
} from 'lucide-react';

const services = [
  {
    icon: TrendingUp,
    title: 'Donor Compliance and Portfolio Management',
    description:
      'Full-cycle multi-donor financial management for NGOs operating across international donor environments. Reporting, controls, audit preparation, and compliance.',
    detail:
      'Across UN agencies, bilateral donors, and philanthropic partners.',
    price: '$2,500 - $4,500 USD',
    priceNote: 'per month • accessible retainer',
    type: 'fixed'
  },
  {
    icon: ClipboardCheck,
    title: 'Forensic Readiness Assessment',
    description:
      "Diagnostic assessment of an institution's forensic infrastructure against the five pillars of the Forensic Readiness Framework.",
    detail:
      'Identification of verification gaps, payroll control weaknesses, vendor register deficiencies, and board governance gaps.',
    price: '$3,500 - $6,000 USD',
    priceNote: 'fixed project fee • defined scope',
    type: 'fixed'
  },
  {
    icon: GraduationCap,
    title: 'Governance Capacity Building Workshop',
    description:
      'Structured training programmes for boards, management, and finance teams on institutional controls, authority architecture, fraud prevention, and donor compliance.',
    detail: 'Delivered in-person or remotely across Southern Africa.',
    price: '$3,000 - $5,000 USD',
    priceNote: 'per workshop • 1-2 days intensive',
    type: 'fixed'
  },
  {
    icon: Shield,
    title: 'Institutional Governance Architecture',
    description:
      'Design and implementation of complete structural control environments. Policy manual development, authority matrix design, SOP frameworks, and organisational structure architecture.',
    detail:
      'For institutions establishing governance infrastructure from zero or remediating existing governance failures.',
    price: 'Custom Quote',
    priceNote: '$8,000 - $25,000 depending on scope • 2-3 month engagement',
    type: 'custom'
  },
  {
    icon: Search,
    title: 'Forensic Finance Advisory',
    description:
      'Independent forensic investigation of financial irregularities, fraud, and control failures. Beneficiary fund verification, payroll fraud detection, asset misappropriation investigation, and unauthorised payment recovery.',
    detail: 'Court-ready documentation and evidence trails.',
    price: 'Custom Quote',
    priceNote: '$5,000 - $20,000 depending on scope • 3-6 weeks',
    type: 'custom'
  },
  {
    icon: BookOpen,
    title: 'IFRS Financial Reporting and Audit Preparation',
    description:
      'Accrual transition management, IFRS-compliant financial statement preparation, going concern assessment, and audit readiness support.',
    detail:
      'For NGOs and associations transitioning from cash-basis reporting.',
    price: 'Custom Quote',
    priceNote: '$3,000 - $8,000 depending on organisation size',
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
            Services & Pricing
          </h1>
          <p className="font-arial text-navy-100 text-base md:text-lg leading-relaxed max-w-3xl">
            Advisory services grounded in applied practice, not theory. Each engagement
            is designed to embed structural controls that outlast individual integrity.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className={`border p-8 lg:p-10 flex flex-col transition-all duration-300 hover:shadow-lg ${
                  service.type === 'custom' 
                    ? 'border-blue-200 bg-blue-50/30 hover:border-blue-300' 
                    : 'border-green-200 bg-white hover:border-green-300'
                }`}
              >
                <service.icon
                  size={32}
                  className={`mb-5 shrink-0 ${
                    service.type === 'custom' ? 'text-blue-600' : 'text-green-600'
                  }`}
                  strokeWidth={1.5}
                />
                <h3 className="font-garamond text-navy-500 text-lg font-bold mb-3">
                  {service.title}
                </h3>
                <p className="font-arial text-gray-600 text-sm leading-relaxed mb-3">
                  {service.description}
                </p>
                <p className="font-arial text-gray-500 text-sm leading-relaxed mb-4 italic">
                  {service.detail}
                </p>
                
                {/* Price Section */}
                <div className="mb-4 pt-2 border-t border-gray-100">
                  <p className={`font-garamond text-xl font-bold ${
                    service.type === 'custom' ? 'text-blue-600' : 'text-green-600'
                  }`}>
                    {service.price}
                  </p>
                  {service.priceNote && (
                    <p className="font-arial text-gray-500 text-xs mt-1">
                      {service.priceNote}
                    </p>
                  )}
                </div>
                
                <Link
                  to="/contact"
                  className={`inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide transition-colors duration-200 mt-auto ${
                    service.type === 'custom' 
                      ? 'text-blue-600 hover:text-blue-700' 
                      : 'text-green-600 hover:text-green-700'
                  }`}
                >
                  {service.type === 'custom' ? 'Request Quote' : 'Book Service'} <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>

          {/* Pricing Notes */}
          <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <h4 className="font-garamond text-navy-500 text-lg font-bold mb-3">📌 Pricing Notes</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• <strong className="text-navy-600">Fixed-price services</strong> have defined scope and predictable costs — visible prices help you qualify yourself before contacting us.</li>
              <li>• <strong className="text-navy-600">Custom quotes</strong> protect you on high-value engagements where scope determines price — governance architecture, forensic investigation, and IFRS preparation.</li>
              <li>• All prices quoted in <strong>USD</strong>. For Malawian NGOs, we assess whether you are donor-funded in USD or operating in MWK, and price accordingly.</li>
              <li>• Workshop clients often become retainer clients — relationship building is part of the model.</li>
              <li>• All engagements are governed by a formal service level agreement (SLA).</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
