const TERMS = [
  // OSHA
  { term: "HazCom (Hazard Communication Standard)", category: "OSHA", definition: "OSHA standard 29 CFR 1910.1200 requiring employers to inform and train workers about hazardous chemicals through labels, Safety Data Sheets, and a written program. Aligned with the Globally Harmonized System (GHS)." },
  { term: "PEL (Permissible Exposure Limit)", category: "OSHA", definition: "OSHA's legal limit on a worker's exposure to a chemical or physical agent, typically expressed as an 8-hour time-weighted average concentration in air." },
  { term: "LOTO (Lockout/Tagout)", category: "OSHA", definition: "Energy control procedures under 29 CFR 1910.147 requiring isolation and locking of energy sources before servicing machinery to prevent unexpected startup or release of stored energy." },
  { term: "29 CFR 1910", category: "OSHA", definition: "OSHA's General Industry standards covering most workplaces outside of construction, agriculture, and maritime, including PPE, machine guarding, hazardous materials, and walking-working surfaces." },
  { term: "29 CFR 1926", category: "OSHA", definition: "OSHA's Construction Industry standards covering fall protection, scaffolding, excavations, electrical, cranes, and other hazards specific to construction work." },
  { term: "PPE (Personal Protective Equipment)", category: "OSHA", definition: "Equipment worn to minimize exposure to workplace hazards. OSHA 29 CFR 1910 Subpart I requires hazard assessments and employer-provided PPE for many hazards." },
  { term: "SDS (Safety Data Sheet)", category: "OSHA", definition: "16-section document required by HazCom describing properties, hazards, handling, storage, and emergency procedures for a hazardous chemical. Replaced the older MSDS format." },
  { term: "OSHA 300 Log", category: "OSHA", definition: "Form used to record work-related injuries and illnesses meeting recording criteria. Employers must post the annual summary (300A) from February 1 to April 30." },

  // NFPA
  { term: "NFPA 70", category: "NFPA", definition: "The National Electrical Code (NEC) — the benchmark for safe electrical design, installation, and inspection in the United States, updated every three years." },
  { term: "NFPA 70E", category: "NFPA", definition: "Standard for Electrical Safety in the Workplace, addressing arc flash hazard analysis, approach boundaries, PPE categories, and energized work permits." },
  { term: "NFPA 101", category: "NFPA", definition: "Life Safety Code, addressing construction, protection, and occupancy features needed to minimize danger to life from fire, smoke, fumes, and panic." },
  { term: "NFPA 13", category: "NFPA", definition: "Standard for the Installation of Sprinkler Systems, covering design, installation, and acceptance testing of automatic fire sprinkler systems." },
  { term: "NFPA 72", category: "NFPA", definition: "National Fire Alarm and Signaling Code, covering application, installation, performance, inspection, testing, and maintenance of fire alarm and emergency communication systems." },
  { term: "NFPA 704", category: "NFPA", definition: "Standard System for the Identification of the Hazards of Materials for Emergency Response — the diamond-shaped placard rating health (blue), flammability (red), instability (yellow), and special hazards (white) on a 0–4 scale." },
  { term: "NFPA 30", category: "NFPA", definition: "Flammable and Combustible Liquids Code, covering safe storage, handling, and use of flammable and combustible liquids including container and tank requirements." },

  // SB / State Law / California
  { term: "SB 553", category: "SB / State Law (California)", definition: "California law (effective July 1, 2024) requiring nearly all employers to establish a written Workplace Violence Prevention Plan, maintain a violent incident log, and provide annual training." },
  { term: "SB 1162", category: "SB / State Law (California)", definition: "California Pay Transparency Act requiring employers with 15+ employees to include pay scales in job postings and to file annual pay data reports with the Civil Rights Department." },
  { term: "SB 253", category: "SB / State Law (California)", definition: "Climate Corporate Data Accountability Act requiring U.S. companies with revenues over $1 billion doing business in California to publicly disclose Scope 1, 2, and 3 greenhouse gas emissions." },
  { term: "SB 261", category: "SB / State Law (California)", definition: "Climate-Related Financial Risk Act requiring U.S. companies with revenues over $500 million doing business in California to biennially publish climate-related financial risk reports aligned with TCFD." },
  { term: "Prop 65", category: "SB / State Law (California)", definition: "California's Safe Drinking Water and Toxic Enforcement Act of 1986 requiring warnings before exposing individuals to listed chemicals known to cause cancer, birth defects, or reproductive harm." },
  { term: "Cal/OSHA", category: "SB / State Law (California)", definition: "California Division of Occupational Safety and Health — the state-plan agency that enforces workplace safety standards in California, often stricter than federal OSHA (e.g., heat illness, IIPP)." },
  { term: "IIPP (Injury and Illness Prevention Program)", category: "SB / State Law (California)", definition: "Cal/OSHA Title 8 §3203 requirement for every California employer to maintain a written, effective program identifying responsible persons, hazard assessment, correction procedures, and training." },

  // EPA / Environmental
  { term: "RCRA", category: "EPA / Environmental", definition: "Resource Conservation and Recovery Act — the primary U.S. law governing the cradle-to-grave management of hazardous waste, including generation, transportation, treatment, storage, and disposal." },
  { term: "CERCLA", category: "EPA / Environmental", definition: "Comprehensive Environmental Response, Compensation, and Liability Act of 1980, also known as Superfund, providing federal authority and funding to clean up sites contaminated with hazardous substances." },
  { term: "TSCA", category: "EPA / Environmental", definition: "Toxic Substances Control Act giving EPA authority to require reporting, recordkeeping, testing, and restrictions on chemical substances and mixtures, excluding food, drugs, cosmetics, and pesticides." },
  { term: "NPDES", category: "EPA / Environmental", definition: "National Pollutant Discharge Elimination System — Clean Water Act permit program controlling point-source discharges of pollutants to waters of the United States." },
  { term: "Clean Air Act", category: "EPA / Environmental", definition: "Federal law authorizing EPA to set National Ambient Air Quality Standards (NAAQS) and regulate emissions of hazardous air pollutants from stationary and mobile sources." },
  { term: "SARA Title III (EPCRA)", category: "EPA / Environmental", definition: "Emergency Planning and Community Right-to-Know Act provisions requiring facilities to report hazardous chemical inventories (Tier II) and toxic releases (Form R / TRI)." },
  { term: "SPCC Plan", category: "EPA / Environmental", definition: "Spill Prevention, Control, and Countermeasure plan required under 40 CFR 112 for facilities with aboveground oil storage capacity above thresholds, to prevent oil discharges to navigable waters." },

  // FDA / Healthcare
  { term: "21 CFR Part 11", category: "FDA / Healthcare", definition: "FDA regulation governing electronic records and electronic signatures, requiring controls such as audit trails, system validation, and authority checks for records that satisfy predicate rules." },
  { term: "21 CFR Part 820", category: "FDA / Healthcare", definition: "Quality System Regulation establishing current good manufacturing practice requirements for medical device manufacturers, harmonizing with ISO 13485 under the QMSR final rule." },
  { term: "cGMP", category: "FDA / Healthcare", definition: "Current Good Manufacturing Practice — FDA regulations (e.g., 21 CFR 210/211 for drugs) ensuring pharmaceuticals are consistently produced and controlled to quality standards appropriate for their intended use." },
  { term: "HACCP", category: "FDA / Healthcare", definition: "Hazard Analysis and Critical Control Points — a systematic preventive approach to food safety identifying biological, chemical, and physical hazards and establishing critical control points to mitigate them." },
  { term: "510(k)", category: "FDA / Healthcare", definition: "Premarket Notification under section 510(k) of the FD&C Act demonstrating that a medical device is substantially equivalent to a legally marketed predicate device." },
  { term: "PMA (Premarket Approval)", category: "FDA / Healthcare", definition: "FDA's most stringent device review process required for Class III devices, requiring valid scientific evidence of safety and effectiveness." },
  { term: "GLP (Good Laboratory Practice)", category: "FDA / Healthcare", definition: "21 CFR Part 58 regulations governing nonclinical laboratory studies that support applications for FDA-regulated products, ensuring data quality and integrity." },

  // Privacy / Data
  { term: "HIPAA", category: "Privacy / Data", definition: "Health Insurance Portability and Accountability Act of 1996 — U.S. law setting national standards for protecting Protected Health Information through Privacy, Security, and Breach Notification Rules." },
  { term: "PHI (Protected Health Information)", category: "Privacy / Data", definition: "Individually identifiable health information held or transmitted by a HIPAA-covered entity or business associate, in any form (electronic, paper, oral)." },
  { term: "GDPR", category: "Privacy / Data", definition: "General Data Protection Regulation (EU 2016/679) governing the processing of personal data of EU residents, with extraterritorial reach and fines up to 4% of global annual turnover." },
  { term: "CCPA", category: "Privacy / Data", definition: "California Consumer Privacy Act of 2018 granting California residents rights to know, delete, opt-out of sale, and non-discrimination regarding their personal information." },
  { term: "CPRA", category: "Privacy / Data", definition: "California Privacy Rights Act of 2020 amending the CCPA, creating the California Privacy Protection Agency and adding rights to correction and limit use of sensitive personal information." },
  { term: "PII (Personally Identifiable Information)", category: "Privacy / Data", definition: "Information that can be used to identify, contact, or locate a specific individual, either alone or combined with other accessible data sources." },
  { term: "DPIA", category: "Privacy / Data", definition: "Data Protection Impact Assessment — a process required under GDPR Article 35 for processing likely to result in high risk to individuals, evaluating necessity, proportionality, and risk mitigations." },
  { term: "Data Subject Access Request (DSAR)", category: "Privacy / Data", definition: "A formal request by an individual under privacy laws (GDPR, CCPA, etc.) to access, correct, port, or delete personal data held by an organization." },

  // Finance / SEC
  { term: "SOX (Sarbanes-Oxley)", category: "Finance / SEC", definition: "2002 federal law mandating internal controls over financial reporting for U.S. public companies. Section 302 requires CEO/CFO certification; Section 404 requires management and auditor attestation." },
  { term: "PCI DSS", category: "Finance / SEC", definition: "Payment Card Industry Data Security Standard — proprietary information security standard for organizations that handle branded credit cards, currently version 4.0.1." },
  { term: "AML (Anti-Money Laundering)", category: "Finance / SEC", definition: "Set of laws and regulations (e.g., Bank Secrecy Act) requiring financial institutions to detect and report suspicious activity that could indicate money laundering or terrorist financing." },
  { term: "KYC (Know Your Customer)", category: "Finance / SEC", definition: "Customer due diligence requirements for verifying client identity, assessing risk, and monitoring transactions, typically a component of an institution's AML program." },
  { term: "FCPA", category: "Finance / SEC", definition: "Foreign Corrupt Practices Act of 1977 prohibiting U.S. persons and companies from bribing foreign officials and requiring accurate books, records, and internal accounting controls." },
  { term: "Dodd-Frank", category: "Finance / SEC", definition: "2010 Wall Street Reform and Consumer Protection Act creating the CFPB, the FSOC, the Volcker Rule, and SEC whistleblower bounty programs in response to the 2008 financial crisis." },
  { term: "SEC Rule 10b-5", category: "Finance / SEC", definition: "SEC rule under the Securities Exchange Act prohibiting fraud, material misstatements or omissions, and insider trading in connection with the purchase or sale of any security." },
  { term: "Form 10-K", category: "Finance / SEC", definition: "Annual report filed by U.S. public companies with the SEC containing audited financial statements, MD&A, risk factors, and a comprehensive overview of business and financial condition." },

  // ISO / Standards
  { term: "ISO 9001", category: "ISO / Standards", definition: "International standard specifying requirements for a Quality Management System (QMS), based on principles such as customer focus, process approach, and continual improvement." },
  { term: "ISO 14001", category: "ISO / Standards", definition: "International standard for Environmental Management Systems (EMS) helping organizations identify, manage, monitor, and control environmental aspects in a holistic manner." },
  { term: "ISO 45001", category: "ISO / Standards", definition: "International standard for Occupational Health and Safety Management Systems, replacing OHSAS 18001, focused on worker protection through risk-based, leadership-driven management." },
  { term: "ISO 27001", category: "ISO / Standards", definition: "International standard specifying requirements for an Information Security Management System (ISMS), including risk assessment and Annex A controls now aligned with ISO 27002:2022." },
  { term: "ISO 13485", category: "ISO / Standards", definition: "International standard for Quality Management Systems specific to medical device manufacturers, used as the basis for the FDA's Quality Management System Regulation (QMSR)." },
  { term: "ISO 22301", category: "ISO / Standards", definition: "International standard for Business Continuity Management Systems, providing a framework to prepare for, respond to, and recover from disruptive incidents." },
  { term: "ISO 31000", category: "ISO / Standards", definition: "International standard providing principles, framework, and process for managing risk, applicable to any organization regardless of size, activity, or sector." },
  { term: "ISO 50001", category: "ISO / Standards", definition: "International standard for Energy Management Systems (EnMS), helping organizations establish processes to continually improve energy performance, efficiency, and use." },

  // Civil Rights / Accessibility
  { term: "ADA", category: "Civil Rights / Accessibility", definition: "Americans with Disabilities Act of 1990 — civil rights law prohibiting discrimination based on disability in employment (Title I), public services (II), and public accommodations (III)." },
  { term: "WCAG", category: "Civil Rights / Accessibility", definition: "Web Content Accessibility Guidelines published by W3C, organized under POUR principles (Perceivable, Operable, Understandable, Robust) with levels A, AA, and AAA." },
  { term: "Section 508", category: "Civil Rights / Accessibility", definition: "Provision of the Rehabilitation Act requiring U.S. federal agencies to make their electronic and information technology accessible to people with disabilities, harmonized with WCAG 2.0 AA." },
  { term: "Title VII", category: "Civil Rights / Accessibility", definition: "Title VII of the Civil Rights Act of 1964 prohibiting employment discrimination based on race, color, religion, sex, or national origin, enforced by the EEOC." },
  { term: "FMLA", category: "Civil Rights / Accessibility", definition: "Family and Medical Leave Act entitling eligible employees of covered employers to 12 weeks of unpaid, job-protected leave per year for specified family and medical reasons." },
  { term: "Equal Pay Act", category: "Civil Rights / Accessibility", definition: "1963 federal law amending the FLSA to prohibit sex-based wage discrimination between employees performing substantially equal work in the same establishment." },

  // ANSI / DOT
  { term: "ANSI Z87.1", category: "ANSI / DOT", definition: "American National Standard for Occupational and Educational Personal Eye and Face Protection Devices, specifying impact, splash, dust, and optical radiation performance criteria." },
  { term: "ANSI Z359", category: "ANSI / DOT", definition: "Family of standards for fall protection and fall restraint, covering equipment, anchorages, training, and managed fall protection programs in general industry." },
  { term: "ANSI Z358.1", category: "ANSI / DOT", definition: "Standard for Emergency Eyewash and Shower Equipment specifying installation, performance, testing, training, and maintenance requirements for plumbed and self-contained units." },
  { term: "49 CFR", category: "ANSI / DOT", definition: "U.S. Department of Transportation regulations governing transportation, including Hazardous Materials Regulations (HMR) in 49 CFR Parts 100–185 covering classification, packaging, marking, and shipping papers." },
  { term: "IATA DGR", category: "ANSI / DOT", definition: "International Air Transport Association Dangerous Goods Regulations — the global reference for shipping hazardous materials by air, based on the ICAO Technical Instructions and updated annually." },
  { term: "IMDG Code", category: "ANSI / DOT", definition: "International Maritime Dangerous Goods Code published by the IMO governing the carriage of dangerous goods by sea, covering classification, packaging, marking, labeling, and stowage." },
  { term: "DOT Hazard Classes", category: "ANSI / DOT", definition: "Nine classes used to categorize hazardous materials for transport: 1 Explosives, 2 Gases, 3 Flammable Liquids, 4 Flammable Solids, 5 Oxidizers/Organic Peroxides, 6 Toxic/Infectious, 7 Radioactive, 8 Corrosive, 9 Miscellaneous." },
  { term: "Placards", category: "ANSI / DOT", definition: "Diamond-shaped signs (10.8\" minimum) displayed on bulk packages and transport vehicles to identify hazardous materials by class, division, and (when required) UN identification number." },

  // Cyber / NIST
  { term: "NIST CSF", category: "Cyber / NIST", definition: "NIST Cybersecurity Framework — voluntary risk-based framework. CSF 2.0 (2024) organizes outcomes into six Functions: Govern, Identify, Protect, Detect, Respond, and Recover." },
  { term: "NIST SP 800-53", category: "Cyber / NIST", definition: "Catalog of security and privacy controls for federal information systems and organizations, used as the control baseline for the FISMA and FedRAMP programs." },
  { term: "NIST SP 800-171", category: "Cyber / NIST", definition: "Security requirements for protecting Controlled Unclassified Information (CUI) in nonfederal systems, mandated for many U.S. Department of Defense contractors via DFARS 252.204-7012." },
  { term: "CMMC", category: "Cyber / NIST", definition: "Cybersecurity Maturity Model Certification — DoD program assessing contractor implementation of NIST 800-171 (Level 2) and NIST 800-172 (Level 3) for handling FCI and CUI." },
  { term: "NIST SP 800-30", category: "Cyber / NIST", definition: "Guide for Conducting Risk Assessments of federal information systems, defining a process for identifying threats, vulnerabilities, likelihood, impact, and risk." },
  { term: "FIPS 140-3", category: "Cyber / NIST", definition: "Federal Information Processing Standard specifying security requirements for cryptographic modules used to protect sensitive but unclassified information; FIPS 140-3 is the current version, replacing 140-2." },
  { term: "FedRAMP", category: "Cyber / NIST", definition: "Federal Risk and Authorization Management Program providing a standardized approach to security assessment, authorization, and continuous monitoring for cloud services used by U.S. federal agencies." },
  { term: "Zero Trust (NIST 800-207)", category: "Cyber / NIST", definition: "Architecture in which trust is never implicit; access to resources is granted per session based on dynamic policy evaluating identity, device, and context, assuming the network is hostile." },
  { term: "SOC 2", category: "Cyber / NIST", definition: "AICPA attestation report on a service organization's controls relevant to the Trust Services Criteria: Security, Availability, Processing Integrity, Confidentiality, and Privacy." }
];
