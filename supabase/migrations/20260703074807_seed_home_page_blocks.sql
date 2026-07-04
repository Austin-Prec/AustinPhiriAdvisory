/*
  # Seed Home page blocks

  Ports the existing Home.tsx content into page_blocks rows, using four new block
  types specific to Home's landing-page structure (distinct from About's
  header/photo/bio/list types, since Home's sections have a different shape).

  No schema change is needed for this migration: page_blocks.type is plain text
  with no CHECK constraint, so new block type names are enforced only at the
  application layer (see VALID_TYPES in supabase/functions/pages-write/index.ts,
  which must be updated to include these four types before this data is usable).

  Block shapes seeded here:

  - hero:         { background_image_url, headline, subheadline, quote,
                     buttons: [{ label, link, style }] }
  - value_cards:  { title, subtitle, cards: [{ icon, title, description }] }
  - stat_bar:     { label, stats: [{ value, label, detail }] }
  - link_preview: { title, body, link_text, link }

  `link` fields use site-relative paths (/contact, /about, etc.) rather than
  free text, matching the admin editor's page-picker dropdown, which only
  offers real routes to prevent broken links from a typo.
*/

INSERT INTO page_blocks (page, type, position, content)
VALUES ('home', 'hero', 0, '{"background_image_url":"/landing-page-bg.jpg","headline":"We help organisations eliminate audit risk, prevent financial leakages, and build enforcement-driven governance systems.","subheadline":"Through institutional governance architecture and forensic finance advisory.","quote":"“Institutions do not fail because they lack governance frameworks. They fail because enforcement is left to individual integrity rather than embedded in structural controls.”","buttons":[{"label":"Book a Consultation","link":"/contact","style":"primary"},{"label":"Read our Frameworks","link":"/frameworks","style":"secondary"}]}'::jsonb);

INSERT INTO page_blocks (page, type, position, content)
VALUES ('home', 'value_cards', 1, '{"title":"What Clients Gain","subtitle":"Not frameworks. Not methodology. Real outcomes that protect your institution.","cards":[{"icon":"Shield","title":"Structural Integrity","description":"Control systems that prevent override, even at senior management level."},{"icon":"Search","title":"Forensic Readiness","description":"Systems that detect and expose fraud early — before it becomes reputational damage."},{"icon":"FileCheck","title":"Donor & Corporate Compliance","description":"Audit-ready reporting, zero compliance breaches, and confidence across multi-donor and corporate portfolios."}]}'::jsonb);

INSERT INTO page_blocks (page, type, position, content)
VALUES ('home', 'stat_bar', 2, '{"label":"Verified track record across Southern Africa","stats":[{"value":"$300K+","label":"Managed across portfolios","detail":"with zero adverse audit findings"},{"value":"9","label":"International Donors","detail":"UN agencies, bilateral & philanthropic"},{"value":"6","label":"Forensic Investigations","detail":"resulting in institutional control remediation"},{"value":"12","label":"Years Applied Experience","detail":"financial sector, development & private sector"}]}'::jsonb);

INSERT INTO page_blocks (page, type, position, content)
VALUES ('home', 'link_preview', 3, '{"title":"About Austin Phiri Advisory Limited","body":"Austin Phiri Advisory Limited is a registered Malawian consulting firm specialising in institutional governance architecture and forensic finance. The firm brings twelve years of applied practice across the financial sector, international development, private sector, and civil society to bear on the governance and forensic challenges facing African institutions.","link_text":"Read full biography","link":"/about"}'::jsonb);