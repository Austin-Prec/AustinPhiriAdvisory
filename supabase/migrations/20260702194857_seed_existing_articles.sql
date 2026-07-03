/*
  # Seed existing articles

  Ports the 3 existing blog posts from the old src/data/articles.json file into the
  new articles table, so nothing is lost when the frontend switches from reading the
  static JSON file to reading from Supabase.

  Slugs are generated from each title (lowercase, non-alphanumeric runs collapsed to a
  single hyphen) so the new URLs are readable, e.g. /insights/why-governance-frameworks-fail-the-enforcement-gap
  instead of the old numeric /insights/1.

  ON CONFLICT (slug) DO NOTHING makes this migration safe to re-run.
*/

INSERT INTO articles (slug, title, excerpt, content, category, author, read_time, icon, status, published_at, created_at, updated_at)
VALUES (
  'why-governance-frameworks-fail-the-enforcement-gap',
  'Why Governance Frameworks Fail: The Enforcement Gap',
  'Institutions don''t fail because they lack governance frameworks. They fail because enforcement is left to individual integrity rather than embedded in structural controls.',
  '<p>Institutions across Africa invest significant resources in developing governance frameworks. Yet governance failures continue to occur. The question is not whether frameworks exist, but whether they are enforceable.</p><p>The fundamental observation is this: institutions do not fail because they lack governance frameworks. They fail because enforcement is left to individual integrity rather than embedded in structural controls.</p>',
  'Governance',
  'Austin Precious Phiri',
  '5 min read',
  'Shield',
  'published',
  '2026-05-06T00:00:00.000Z',
  '2026-05-06T00:00:00.000Z',
  '2026-05-06T00:00:00.000Z'
)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO articles (slug, title, excerpt, content, category, author, read_time, icon, status, published_at, created_at, updated_at)
VALUES (
  'forensic-readiness-preparing-before-fraud-happens',
  'Forensic Readiness: Preparing Before Fraud Happens',
  'Most organisations only think about forensic investigation after fraud is detected. True forensic readiness means building the infrastructure to investigate any transaction at any time.',
  '<p>Most organisations only think about forensic investigation after fraud is detected. By then, evidence may have been destroyed, witnesses may have left, and the trail has gone cold.</p><p>True forensic readiness means building the infrastructure to investigate any transaction at any time—before fraud occurs, not after.</p>',
  'Forensic Finance',
  'Austin Precious Phiri',
  '4 min read',
  'Search',
  'published',
  '2026-05-06T00:00:00.000Z',
  '2026-05-06T00:00:00.000Z',
  '2026-05-06T00:00:00.000Z'
)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO articles (slug, title, excerpt, content, category, author, read_time, icon, status, published_at, created_at, updated_at)
VALUES (
  'most-institutions-have-policies-very-few-have-a-policy-architecture',
  'Most Institutions Have Policies. Very Few Have a Policy Architecture.',
  'The difference is not the document. It is whether the document does anything. A policy filed in a folder is not a control—it is a record of intent.',
  '<p>Most institutions have policies. Very few have a policy architecture.</p><p>The difference is not the document. It is whether the document does anything.</p><p>A policy filed in a folder and referenced at onboarding is not a control. It is a record of intent. It tells you what the institution wanted to do. It says nothing about what actually happens when someone decides not to comply.</p><p>I have walked into institutions that could produce four policy manuals on request. Beautifully formatted. Board-approved. Dated and signed.</p><p>And then I found a finance officer processing payments without purchase orders. A manager approving his own expense claims. A payroll adjustment with no change log and no second signature.</p><p>The policies existed. The controls did not.</p><h2>What Real Policy Architecture Does</h2><p>A real policy architecture does three things that a policy document cannot do alone.</p><ul><li>It specifies who is responsible for enforcing each provision, not just who is responsible for complying with it.</li><li>It defines the consequence for non-compliance before the violation occurs, not after.</li><li>And it is communicated repeatedly, not filed once.</li></ul><p>A policy that staff cannot locate, do not understand, or have never been held accountable to is decoration. It protects no one. It deters nothing.</p><h2>The Question Every Institution Must Ask</h2><p>The question to ask your institution is not: do we have a finance policy?</p><p>The question is: when did someone last face a consequence for violating it?</p><p>If you cannot answer that question, you do not have a policy architecture. You have paperwork.</p>',
  'Governance',
  'Austin Precious Phiri',
  '3 min read',
  'Shield',
  'published',
  '2026-05-07T00:00:00.000Z',
  '2026-05-07T00:00:00.000Z',
  '2026-05-07T00:00:00.000Z'
)
ON CONFLICT (slug) DO NOTHING;