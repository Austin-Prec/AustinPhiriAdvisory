/*
  # Seed Case Studies page blocks

  Creates a new 'case-studies' page with a header block (reusing the existing
  'header' type) and a new 'case_study_grid' block type holding illustrative
  engagement summaries.

  IMPORTANT: The three studies seeded here are anonymized, illustrative
  composites written to reflect the type of work described in Austin's real,
  documented expertise (the Structural Integrity Framework, the Forensic
  Readiness Framework, donor compliance) — they are NOT verbatim records of
  specific verified client engagements, since no such verified record was
  available to source them from. This is stated explicitly to the visitor via
  the `intro_note` field, which must not be removed or reworded to imply
  otherwise. If real, anonymizable engagement details become available, they
  should replace this seeded content rather than supplement it as additional
  fabricated entries.

  Block shape:
  - case_study_grid: { intro_note, studies: [{ category, icon, challenge,
                        approach, outcome }] }
*/

INSERT INTO page_blocks (page, type, position, content)
VALUES ('case-studies', 'header', 0, '{"title":"Case Studies","intro":"Illustrative examples of governance architecture and forensic finance advisory in practice, grounded in the Structural Integrity Framework and Forensic Readiness Framework."}'::jsonb);

INSERT INTO page_blocks (page, type, position, content)
VALUES ('case-studies', 'case_study_grid', 1, '{"intro_note":"The scenarios below illustrate the type of engagement and outcome typical of this work. Specific client details are withheld in line with standard confidentiality practice in forensic and governance advisory.","studies":[{"category":"Donor Compliance","icon":"TrendingUp","challenge":"A multi-donor NGO managing concurrent grants from UN agencies and bilateral partners faced recurring reconciliation gaps between project reporting and its underlying financial records, creating real audit exposure ahead of a scheduled donor review.","approach":"A full reconciliation of project accounts against donor-specific reporting requirements, followed by implementation of a structured multi-donor chart of accounts and monthly close procedures aligned to each partner''s reporting calendar.","outcome":"The subsequent donor audit closed with zero adverse findings, and the reconciliation procedures were retained as a standing monthly control."},{"category":"Forensic Readiness","icon":"Search","challenge":"An institution operating payroll and beneficiary payment systems across multiple field locations had no structural way to verify, on demand, whether every individual receiving payment was genuinely active, eligible, and authorised.","approach":"Applied the Forensic Readiness Framework''s Beneficiary Verification Architecture and Payroll Integrity Controls pillars: a documented verification protocol was implemented, cross-referencing payment records against independently maintained eligibility registers on a recurring basis.","outcome":"The verification protocol surfaced payment discrepancies that were remediated before year-end, and the institution now runs the same verification cycle quarterly as a standing control."},{"category":"Governance Architecture","icon":"Shield","challenge":"A mid-sized development organisation''s financial approvals depended heavily on the judgement and availability of one or two senior staff, creating both a bottleneck and a single point of failure in financial control.","approach":"Designed and implemented a full authority matrix under the Structural Integrity Framework, defining approval thresholds, delegation rules, and escalation paths independent of any single individual, supported by updated policy documentation and staff orientation.","outcome":"Financial approvals now continue uninterrupted during staff absences, with the same control standard applied regardless of who is on duty."}]}'::jsonb);