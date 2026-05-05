import { Link } from 'react-router-dom';
import {
  Shield,
  Search,
  FileCheck,
  AlertTriangle,
  GraduationCap,
  BookOpen,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'Institutional Governance Architecture',
    description:
      'Design and implementation of complete structural control environments. Policy manual development, authority matrix design, SOP frameworks, and organisational structure architecture.',
    detail:
      'For institutions establishing governance infrastructure from zero or remediating existing governance failures.',
  },
  {
    icon: Search,
    title: 'Forensic Finance Advisory',
    description:
      'Independent forensic investigation of financial irregularities, fraud, and control failures. Beneficiary fund verification, payroll fraud detection, asset misappropriation investigation, and unauthorised payment recovery.',
    detail: 'Court-ready documentation and evidence trails.',
  },
  {
    icon: FileCheck,
    title: 'Donor Compliance and Portfolio Management',
    description:
      'Full-cycle multi-donor financial management for NGOs operating across international donor environments. Reporting, controls, audit preparation, and compliance.',
    detail:
      'Across UN agencies, bilateral donors, and philanthropic partners.',
  },
  {
    icon: AlertTriangle,
    title: 'Forensic Readiness Assessment',
    description:
      "Diagnostic assessment of an institution's forensic infrastructure against the five pillars of the Forensic Readiness Framework.",
    detail:
      'Identification of verification gaps, payroll control weaknesses, vendor register deficiencies, and board governance gaps.',
  },
  {
    icon: GraduationCap,
    title: 'Governance Capacity Building',
    description:
      'Structured training programmes for boards, management, and finance teams on institutional controls, authority architecture, fraud prevention, and donor compliance.',
    detail: 'Delivered in-person or remotely across Southern Africa.',
  },
  {
    icon: BookOpen,
    title: 'IFRS Financial Reporting and Audit Preparation',
    description:
      'Accrual transition management, IFRS-compliant financial statement preparation, going concern assessment, and audit readiness support.',
    detail:
      'For NGOs and associations transitioning from cash-basis reporting.',
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
                className="border border-gray-200 p-8 lg:p-10 flex flex-col hover:border-navy-300 transition-colors duration-300"
              >
                <service.icon
                  size={32}
                  className="text-crimson-400 mb-5 shrink-0"
                  strokeWidth={1.5}
                />
                <h3 className="font-garamond text-navy-500 text-lg font-bold mb-3">
                  {service.title}
                </h3>
                <p className="font-arial text-gray-600 text-sm leading-relaxed mb-3">
                  {service.description}
                </p>
                <p className="font-arial text-gray-500 text-sm leading-relaxed mb-6 italic">
                  {service.detail}
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 font-arial text-crimson-400 text-sm font-semibold uppercase tracking-wide hover:text-crimson-500 transition-colors duration-200 mt-auto"
                >
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
