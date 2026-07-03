/*
  # Seed About page blocks

  Ports the existing About.tsx content into page_blocks rows, so the page can be
  switched from hardcoded JSX to rendering from the database without losing or
  altering any existing content. Content matches About.tsx exactly, including the
  <strong> tags used inline in two of the bio paragraphs.

  Block shapes seeded here (the frontend's block type registry is the source of
  truth for what each type's content object should contain):

  - header: { title, intro }
  - photo:  { image_url, alt, badges: [{ icon, text }] }
  - bio:    { name, title, quote, paragraphs: [string, ...], footnote }
  - list:   { title, icon, items: [string, ...], footnote }
*/

INSERT INTO page_blocks (page, type, position, content)
VALUES ('about', 'header', 0, '{"title":"About","intro":"Governance and forensic finance specialist trusted to design control systems for NGOs, private sector corporations, and development organisations across Southern Africa."}'::jsonb);

INSERT INTO page_blocks (page, type, position, content)
VALUES ('about', 'photo', 1, '{"image_url":"/Austin-Photo.jpeg","alt":"Austin Precious Phiri","badges":[{"icon":"Briefcase","text":"Board-Appointed CFO"},{"icon":"MapPin","text":"Southern Africa"},{"icon":"Calendar","text":"12+ years applied experience"}]}'::jsonb);

INSERT INTO page_blocks (page, type, position, content)
VALUES ('about', 'bio', 2, '{"name":"Austin Precious Phiri","title":"Governance & Forensic Finance Specialist","quote":"Trusted to design control systems for NGOs, private sector corporations, and development organisations. His work focuses on removing reliance on individual integrity and replacing it with enforceable institutional systems.","paragraphs":["Austin Precious Phiri is a Malawian institutional governance architect and forensic finance practitioner with twelve years of applied experience across the financial sector, international development, private sector, and civil society.","He is the Managing Director of Austin Phiri Advisory Limited and Board-Appointed CFO of a national professional association in Malawi. His practice focuses on designing and implementing structural control environments for NGOs, private sector corporations, professional associations, and development sector organisations operating in Southern Africa.","He has managed multi-donor and corporate portfolios totalling <strong>$300,000+ USD</strong> across nine international partners with <strong>zero negative audit findings</strong>, and has documented six forensic finance investigations resulting in institutional control remediation.","He developed the <strong>Structural Integrity Framework (SIF)</strong> and the<strong> Forensic Readiness Framework (FRF)</strong> — two practitioner methodologies grounded in twelve years of applied experience in African institutional environments."],"footnote":"Austin Phiri Advisory Limited is registered in Malawi. Registration date: 21 April 2026."}'::jsonb);

INSERT INTO page_blocks (page, type, position, content)
VALUES ('about', 'list', 3, '{"title":"Certifications","icon":"Award","items":["Forensic Accounting and Fraud Examination (WVU)","Business Foundations (Wharton)","Finance and Quantitative Modeling (Wharton)","Financial Accounting (UIUC)","Advanced Financial Reporting (UIUC)","Investments I and II (UIUC)","Strategic Business Leadership (University of Glasgow)"],"footnote":"CFE Candidacy in progress — Association of Certified Fraud Examiners"}'::jsonb);