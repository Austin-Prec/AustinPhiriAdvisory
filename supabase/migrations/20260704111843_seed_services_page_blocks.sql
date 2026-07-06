/*
  # Seed Services page blocks

  Ports the existing Services.tsx content into page_blocks rows, reusing the
  'header' block type (identical shape to About/Frameworks), and introducing
  two new types specific to this page:

  - service_grid: { services: [{ icon, title, description, outcome, price,
                     price_note, cta_type }] }
    cta_type is 'fixed' or 'custom' and drives the CTA button label ("Book
    Service" vs "Request Quote") on the public page — this mirrors the
    original's `service.type === 'custom' ? 'Request Quote' : 'Book Service'`
    logic exactly, just driven by stored data instead of a hardcoded ternary.

  - pricing_notes: { heading, items: [string, ...], framework_note }
    `items` and `framework_note` contain inline <strong> tags (e.g.
    "<strong>Fixed-price services</strong> have defined scope...") and are
    rendered with dangerouslySetInnerHTML, the same pattern used for bio
    paragraphs on the About page. `heading` includes the literal 📌 emoji
    exactly as in the original JSX.
*/

INSERT INTO page_blocks (page, type, position, content)
VALUES ('services', 'header', 0, '{"title":"Services & Pricing","intro":"Strategic governance and forensic finance solutions for NGOs, private sector corporations, professional associations, and development organisations."}'::jsonb);

INSERT INTO page_blocks (page, type, position, content)
VALUES ('services', 'service_grid', 1, '{"services":[{"icon":"TrendingUp","title":"Donor & Corporate Compliance","description":"Full-cycle multi-donor and corporate financial management. Reporting, controls, audit preparation, and compliance across international donors and private sector clients.","outcome":"Audit-ready reporting, zero compliance breaches, and stakeholder confidence.","price":"$2,500 - $4,500 USD","price_note":"per month","cta_type":"fixed"},{"icon":"ClipboardCheck","title":"Forensic Readiness Assessment","description":"Diagnostic assessment against the five pillars of the Forensic Readiness Framework. Identifies verification gaps, payroll control weaknesses, and governance deficiencies.","outcome":"Identifies hidden control gaps before they become financial loss.","price":"$3,500 - $6,000 USD","price_note":"fixed project fee","cta_type":"fixed"},{"icon":"GraduationCap","title":"Governance Capacity Building Workshop","description":"Structured training for boards, management, and finance teams on institutional controls, authority architecture, fraud prevention, and compliance.","outcome":"Builds relationships — workshop clients become retainer clients.","price":"$3,000 - $5,000 USD","price_note":"per workshop","cta_type":"fixed"},{"icon":"Shield","title":"Institutional Governance Architecture","description":"Full SIF implementation including diagnostic, policy manuals, authority matrix, SOPs, and staff orientation for NGOs, private sector, and development organisations.","outcome":"Builds a complete control system that functions independent of individuals.","price":"Custom Quote","price_note":"$8,000 - $25,000","cta_type":"custom"},{"icon":"Search","title":"Forensic Finance Advisory","description":"Independent forensic investigation with court-ready documentation. Beneficiary verification, payroll fraud detection, asset misappropriation, and corporate fraud.","outcome":"Detects and exposes fraud early — before it becomes reputational damage.","price":"Custom Quote","price_note":"$5,000 - $20,000","cta_type":"custom"},{"icon":"BookOpen","title":"IFRS Financial Reporting & Audit Preparation","description":"Accrual transition management, IFRS-compliant financial statements, going concern assessment, and audit readiness support for all organisation types.","outcome":"Full financial transparency with no hidden discrepancies.","price":"Custom Quote","price_note":"$3,000 - $8,000","cta_type":"custom"}]}'::jsonb);

INSERT INTO page_blocks (page, type, position, content)
VALUES ('services', 'pricing_notes', 2, '{"heading":"📌 Pricing Notes","items":["<strong>Fixed-price services</strong> have defined scope and predictable costs — visible prices help you qualify yourself before contacting us.","<strong>Custom quotes</strong> protect you on high-value engagements where scope determines price — governance architecture, forensic investigation, and IFRS preparation.","All prices quoted in <strong>USD</strong>. For Malawian clients, we assess whether you are donor-funded in USD or operating in MWK, and price accordingly.","Workshop clients often become retainer clients — relationship building is part of the model.","All engagements are governed by a formal service level agreement (SLA)."],"framework_note":"All advisory engagements apply the <strong>Structural Integrity Framework (SIF)</strong> and <strong>Forensic Readiness Framework (FRF)</strong> as practitioner methodologies."}'::jsonb);