/*
  # Seed Frameworks page blocks

  Ports the existing Frameworks.tsx content into page_blocks rows, reusing the
  'header' block type already used on About (identical shape: title + intro),
  and introducing two new types specific to this page's content:

  - framework_section: { icon, heading, subtitle, body,
                          pillars: [{ number, name, description }],
                          download_label, download_url, variant }
    Used twice (SIF and FRF), each with independent content. `variant` is
    'light' or 'shaded' and controls the section/card background treatment,
    since the original page renders these two sections with different
    backgrounds (SIF: white section, plain cards; FRF: gray section, white
    cards) despite otherwise identical structure.

  - cta_banner: { body, button_label, button_link }
    The closing centered call-to-action on a navy background. This is
    deliberately a distinct type from Home's link_preview block, even though
    both are "text + link" — link_preview is left-aligned on a light
    background with an arrow-link, while cta_banner is centered on a navy
    background with a filled button. Reusing link_preview here would have
    misrepresented the actual visual design.

  download_url values are static HTML files in /public (not React routes), so
  they are NOT part of the site-pages dropdown used elsewhere for internal
  links — they're plain URL strings tied specifically to this block type.
*/

INSERT INTO page_blocks (page, type, position, content)
VALUES ('frameworks', 'header', 0, '{"title":"Frameworks","intro":"Two proprietary practitioner methodologies for institutional governance and forensic finance, grounded in twelve years of applied experience in African institutional environments."}'::jsonb);

INSERT INTO page_blocks (page, type, position, content)
VALUES ('frameworks', 'framework_section', 1, '{"icon":"Shield","heading":"The Structural Integrity Framework","subtitle":"A practitioner''s framework for people-independent institutional governance","body":"The SIF is a governance architecture methodology for designing, implementing, and sustaining institutional control environments in which organisational integrity is structurally embedded rather than individually maintained. It comprises four interdependent pillars: Policy Architecture, Operational Controls, Authority Architecture, and Enforcement Mechanisms.","pillars":[{"number":"I","name":"Policy Architecture","description":"The foundational policy infrastructure that defines institutional intent, boundaries, and behavioural expectations."},{"number":"II","name":"Operational Controls","description":"The procedural and process-level controls that translate policy into daily operational reality."},{"number":"III","name":"Authority Architecture","description":"The formal delegation and authorisation structures that define who may act, within what limits, and under what conditions."},{"number":"IV","name":"Enforcement Mechanisms","description":"The structural enforcement and consequence infrastructure that ensures compliance is system-driven, not person-dependent."}],"download_label":"Download the SIF Framework Paper","download_url":"/sif-framework-paper.html","variant":"light"}'::jsonb);

INSERT INTO page_blocks (page, type, position, content)
VALUES ('frameworks', 'framework_section', 2, '{"icon":"Search","heading":"The Forensic Readiness Framework","subtitle":"A practitioner''s framework for proactive forensic infrastructure in institutional environments","body":"The FRF is a governance methodology for building and maintaining the documentation, verification, and review infrastructure that enables an institution to investigate any financial transaction at any time — with speed, completeness, and evidentiary integrity — regardless of whether fraud has been detected. It comprises five pillars: Beneficiary Verification Architecture, Payroll Integrity Controls, Vendor and Payee Verification Register, Quarterly Forensic Review Protocol, and Board-Led Forensic Governance.","pillars":[{"number":"I","name":"Beneficiary Verification Architecture","description":"Structural controls for verifying the existence, eligibility, and entitlement of every beneficiary before and after payment."},{"number":"II","name":"Payroll Integrity Controls","description":"Verification infrastructure ensuring that every payroll entry corresponds to a verified, active, and authorised individual."},{"number":"III","name":"Vendor and Payee Verification Register","description":"A maintained register of verified vendors and payees with ongoing due diligence and periodic re-verification."},{"number":"IV","name":"Quarterly Forensic Review Protocol","description":"A structured quarterly review process that examines transaction patterns, control adherence, and anomaly indicators."},{"number":"V","name":"Board-Led Forensic Governance","description":"Board-level governance structures that ensure forensic readiness is maintained, resourced, and enforced."}],"download_label":"Download the FRF Framework Paper","download_url":"/frf-framework-paper.html","variant":"shaded"}'::jsonb);

INSERT INTO page_blocks (page, type, position, content)
VALUES ('frameworks', 'cta_banner', 3, '{"body":"Both frameworks are available for download. For advisory engagements applying either framework to your institution, contact Austin Phiri Advisory.","button_label":"Book a Consultation","button_link":"/contact"}'::jsonb);