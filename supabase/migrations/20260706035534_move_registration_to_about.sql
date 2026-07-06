/*
  # Move registration details from Footer to About page

  Adds a new 'credentials_panel' block type to the about page, holding the
  Legal Registration and UN & Procurement details that previously lived in
  the site-wide Footer component. Content is moved verbatim, not altered —
  same legal name, registration number, tax ID, UNGM number, and dates.

  Positioned at position 4, after the existing certifications list block
  (position 3), so the About page reads: header, photo+bio, certifications,
  then these registration credentials — a natural closing sequence of
  proof-of-legitimacy content.

  Block shape:
  - credentials_panel: { panels: [{ heading, fields: [{ label, value }],
                          note, note2? }] }
*/

INSERT INTO page_blocks (page, type, position, content)
VALUES ('about', 'credentials_panel', 4, '{"panels":[{"heading":"Legal Registration","fields":[{"label":"Legal Name","value":"Austin Phiri Advisory Limited"},{"label":"Registration #","value":"COY-BMQHYQE"},{"label":"Tax ID (TPIN)","value":"71065132"}],"note":"✓ Certificate of Incorporation issued 08 May 2026"},{"heading":"UN & Procurement","fields":[{"label":"UNGM #","value":"1217321"}],"note":"✓ Registered as Organization","note2":"PPDA Registration: In Progress"}]}'::jsonb);
