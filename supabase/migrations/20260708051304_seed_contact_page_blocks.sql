/*
  # Seed Contact page blocks

  Ports the existing Contact.tsx header and sidebar content into page_blocks
  rows, reusing the 'header' block type already used on About/Frameworks/
  Services, and introducing a new 'contact_sidebar' type for the direct
  contact channels list.

  Position 1 (between header and sidebar) is deliberately left open for the
  contact form itself, which is NOT a page_blocks row — the form has real
  client-side state, validation, and a live Formspree POST submission, which
  makes it functional code rather than editable content, the same
  distinction applied to the blog editor and page-block system throughout
  this project. The form renders as a fixed React component positioned
  between these two blocks in Contact.tsx.

  Deliberately excluded: the Legal Registration and UN & Procurement details
  that were also hardcoded on this page. That content was already
  consolidated onto the About page in an earlier migration
  (20260706035534_move_registration_to_about.sql) specifically to reduce
  repetition of the same numbers across multiple pages — reproducing it
  here again would undo that consolidation.

  Block shapes seeded here:
  - header: { title, intro } — same shape as About/Frameworks/Services
  - contact_sidebar: { heading, channels: [{ icon, label, value, link?, sub? }],
                        response_time }
*/

INSERT INTO page_blocks (page, type, position, content)
VALUES ('contact', 'header', 0, '{"title":"Let''s Talk","intro":"Whether you have a specific governance challenge or want to understand how advisory support could strengthen your institution — start here."}'::jsonb);

INSERT INTO page_blocks (page, type, position, content)
VALUES ('contact', 'contact_sidebar', 2, '{"heading":"Direct Contact","channels":[{"icon":"Mail","label":"Email","value":"austinpphiri@gmail.com","link":"mailto:austinpphiri@gmail.com"},{"icon":"Phone","label":"Phone / WhatsApp","value":"+265 888 879 052","link":"tel:+265888879052"},{"icon":"MapPin","label":"Location","value":"Zomba, Malawi","sub":"Southern Africa"},{"icon":"Linkedin","label":"LinkedIn","value":"Connect with Austin","link":"https://linkedin.com/in/austinphiriadvisory"}],"response_time":"Within two business days"}'::jsonb);