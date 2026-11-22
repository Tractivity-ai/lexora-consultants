export const SITE = {
  name: 'Lexora Advocates & Consultants',
  phone1: '7304916240',
  phone2: '8805241341',
  phone1Tel: '+917304916240',
  phone2Tel: '+918805241341',
  wa: 'https://wa.me/917304916240',
  email: 'lexoraconsultants@gmail.com',
  address: ['56, Ganeshpeth,', 'Nagpur, Maharashtra 440018'],
  hours: 'Mon to Sat, 10:30 AM to 7:00 PM [confirm]',
};

export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'The Firm', href: '/the-firm' },
  { label: 'Our People', href: '/our-people' },
  { label: 'Practice Areas', href: '/practice-areas' },
  { label: 'Knowledge Centre', href: '/knowledge-centre' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

// Icon paths (line icons, navy), one per practice area
const IC = {
  bank: 'M3 9l9-5 9 5z M5 11v7 M9 11v7 M15 11v7 M19 11v7 M3 20h18',
  house: 'M3.5 11.5L12 4l8.5 7.5 M6 10v10h12V10 M10 20v-5h4v5',
  scales: 'M12 4v16 M7 20h10 M5 7h14 M5 7l-2.5 6a2.5 2.5 0 0 0 5 0z M19 7l-2.5 6a2.5 2.5 0 0 0 5 0z',
  doc: 'M7 3h7l5 5v13H7z M14 3v5h5 M10 13h6 M10 17h4',
  case: 'M4 8h16v11H4z M9 8V5.5h6V8 M4 13h16 M11 13v2h2v-2',
  building: 'M6 21V5l9-2v18 M15 9h4v12 M3 21h18 M9 8h3 M9 12h3 M9 16h3',
  people: 'M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M16.5 10.5a2.5 2.5 0 1 0 0-5 M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5 M16 14.8c2.8.2 5 2 5 5.2',
  nodes: 'M12 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z M5.5 15.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z M18.5 15.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z M12 8.5v3.5 M10.5 13L7 15.5 M13.5 13L17 15.5',
};

// Content as written in the company profile
export const AREAS = [
  {
    n: 1, slug: 'banking-finance-recovery', icon: IC.bank,
    t: 'Banking, Finance & Recovery Laws:',
    d: 'We offer end-to-end legal services to banks, NBFCs, and financial institutions, covering lending matters from pre-sanction to recovery and enforcement.',
    inc: ['SARFAESI proceedings, DRT/DRAT representation, and recovery & execution matters', 'Section 138 Negotiable Instruments Act cases', 'Drafting & vetting of mortgage, hypothecation, and security documents', 'Title search reports, encumbrance verification, and pre/post-sanction legal advisory'],
  },
  {
    n: 2, slug: 'property-land-due-diligence', icon: IC.house,
    t: 'Property Law, Land Acquisition & Legal Due Diligence',
    d: 'We offer end-to-end legal services to banks, NBFCs, and financial institutions, covering lending matters from pre-sanction to recovery and enforcement.',
    inc: ['Title verification and chain-of-ownership analysis', 'Legal search reports for land and large parcels', 'Encumbrance, litigation, and compliance checks with advisory under land/revenue laws', 'Conveyancing, transfer documentation, and legal audits for projects & institutional deals'],
  },
  {
    n: 3, slug: 'civil-commercial-criminal-litigation', icon: IC.scales,
    t: 'Civil, Commercial & Criminal Litigation:',
    d: 'Litigation is a core strength of the firm. The firm handles covering civil, commercial, writ petitions, consumer, criminal, and execution matters with a strong strategic, outcome-focused approach.',
    inc: ['Bombay High Court (Nagpur Bench)', 'District and Sessions Courts', 'Consumer Forums', 'Labour and Industrial Tribunals', 'Other statutory and quasi-judicial authorities'],
  },
  {
    n: 4, slug: 'government-psu-statutory-advisory', icon: IC.doc,
    t: 'Government, PSU & Statutory Advisory',
    d: 'Lexora advises and represents government bodies, statutory authorities, PSUs, development authorities, and public institutions.',
    inc: ['Land acquisition advisory and legal search', 'Panel litigation and court representation', 'Vetting of tenders, contracts, and MoUs with compliance opinions', 'Service & labour matters, and constitutional/administrative remedies'],
  },
  {
    n: 5, slug: 'corporate-msme-commercial-advisory', icon: IC.case,
    t: 'Corporate, MSME & Commercial Advisory:',
    d: 'We provide practical and business-oriented legal advisory to corporates, MSMEs, startups, and family-owned businesses. The firm’s corporate practice focuses on dispute prevention and enforceable contracts.',
    inc: ['Drafting & vetting of commercial contracts', 'Employment/labour advisory and corporate compliance', 'Legal risk assessment, opinions, and arbitration/dispute resolution', 'Retainer-based ongoing legal advisory'],
  },
  {
    n: 6, slug: 'real-estate-rera-project-advisory', icon: IC.building,
    t: 'Real Estate, RERA & Project Advisory',
    d: 'We offer complete legal advice to builders, developers, promoters, and landowners across the entire lifecycle of real estate projects.',
    inc: ['Title due diligence and land acquisition advisory', 'Development agreements, sale deeds, and conveyancing', 'Project documentation, agreements for sale, and RERA compliance', 'RERA representation, consumer disputes, arbitration, and ongoing support'],
  },
  {
    n: 7, slug: 'family-law-matrimonial-disputes', icon: IC.people,
    t: 'Family Law & Matrimonial Disputes',
    d: 'Advisory and representation in matrimonial and family law matters, including divorce, maintenance, alimony, custody, guardianship, domestic violence, and related proceedings before competent courts.',
    inc: ['Advisory and representation in matrimonial and family law proceedings before Family Courts and competent authorities', 'Handling divorce matters (mutual and contested), including ancillary reliefs', 'Maintenance, alimony, child custody, and guardianship disputes and matrimonial remedies'],
  },
  {
    n: 8, slug: 'arbitration-mediation-conciliation', icon: IC.nodes,
    t: 'Arbitration, Mediation and Conciliation (ADR)',
    d: 'Advisory and representation in arbitration, mediation, and conciliation under the Arbitration and Conciliation Act, 1996, including drafting clauses, conducting proceedings, settlements, and enforcement or challenge of awards.',
    inc: ['Arbitration, mediation, and conciliation representation', 'Drafting of arbitration clauses and frameworks', 'Conduct of proceedings, pleadings, and hearings', 'Settlement, enforcement, and challenge of awards'],
  },
];

export const WHO = [
  [['LEXORA Advocates & Consultants', 1], [' is a full-service law firm based in Nagpur, Maharashtra, offering a balanced combination of deep courtroom experience and modern legal advisory. The firm has been founded with a clear objective to deliver '], ['practical, reliable, and enforceable legal solutions', 1], [' to institutions, businesses, government bodies, and individuals.']],
  [[' What distinguishes LEXORA is its ability to think beyond paperwork and appearances. Every advisory, opinion, or document prepared by the firm is guided by one fundamental question will this stand the test of law if challenged tomorrow? This litigation-backed mindset allows LEXORA to provide advice that is not only legally sound but also commercially and institutionally dependable.']],
  [['The firm brings together over 31 years of senior litigation experience', 1], [' and a dynamic team of young professionals trained in research, drafting, compliance, and execution. LEXORA functions as a structured legal institution rather than a traditional chamber practice, with '], ['defined practice areas, partner-led responsibilities, and standardized internal systems.', 1]],
];

export const PHILOSOPHY = {
  lead: 'We follow a clear, client-focused philosophy:',
  items: ['Strong emphasis on compliance and risk mitigation', 'Clear communication and transparency with clients', 'Time-bound delivery and professional accountability', 'Senior partner involvement in all critical matters', 'Advice rooted in practical litigation experience'],
  quote: 'At LEXORA, the law is not treated as theory ; it is applied as a solution.',
};

export const WHY = [
  'Strong senior leadership with over three decades of experience',
  'Litigation-backed and practically enforceable advice',
  'Institutional and compliance-oriented approach',
  'Clear communication and transparent fee structures',
  'Direct partner involvement in every significant matter',
];

export const FOUNDERS = [
  {
    id: 'shahid', img: null, initials: 'SR', name: 'ADV. SHAHID RAZA', role: 'Senior Partner',
    parts: [['Adv. Shahid Raza is a senior advocate with more than '], ['30 years of uninterrupted legal practice since 1994', 1], [', forming the backbone of LEXORA’s litigation, banking, and institutional advisory practice. '], ['He holds an LL.B. from Dr. Babasaheb Ambedkar Law College (1994), and an M.A. in Sociology from Nagpur University (1998).', 1], [' Over the years, he has handled a wide spectrum of matters including banking and recovery laws, property disputes, land acquisition, contractual documentation, and civil litigation, while advising and representing banks, insurance companies, statutory authorities, trusts, and corporate bodies. He also possesses significant expertise in drafting pleadings, conveyancing, and rendering legal opinions. Known for his strong command over land laws, civil procedure, and acquisition processes, he brings proven expertise in high-value and public interest litigation, with drafting skills aligned to government scrutiny and a reputation for delivering timely, precise, and risk-mitigated legal solutions.']],
  },
  {
    id: 'shreyash', img: '/images/shreyash.jpg', name: 'ADV. SHREYASH R. KUMBHALKAR', role: 'Founding Partner | Litigation & Dispute Resolution',
    parts: [['Adv. Shreyash R. Kumbhalkar represents the firm’s new-generation litigation and advisory practice, regularly appearing before the Bombay High Court (Nagpur Bench) and various courts and tribunals. His work covers '], ['civil and criminal litigation, writing petitions, negotiable instrument matters, public interest litigations, and appellate proceedings, along with arbitration, legal drafting, and client advisory', 1], ['. He is actively involved in litigation strategy, court representation, compliance, and coordinating with institutional clients, as well as conducting search reports for banks and financial institutions. '], ['He holds a B.A. LL.B. (2023) from Dr. Babasaheb Ambedkar College of Law, RTMNU.', 1]],
  },
  {
    id: 'adesh', img: '/images/adesh.jpg', name: 'ADV. ADESH M. THAKUR', role: 'Founding Partner | Corporate, Banking & Commercial Advisory',
    parts: [['Adv. Adesh M. Thakur holds an '], ['LL.M. in Business and Corporate Law from Symbiosis Law School, Pune (2024)', 1], [', and brings strong corporate and regulatory expertise to LEXORA. His work includes '], ['contract drafting and vetting, banking and securities law, investment advisory, compliance structuring, and arbitration support, combining legal precision with commercial insight.', 1], [' He has also participated in the Youth Parliament (2022) as a cabinet minister for the Ministry of Roadways, and in a Legal Literacy Camp (2018), contributing to legal awareness, family law discussions, and rural development research in Maharashtra.']],
  },
];

export const ARTICLES = [
  { slug: 'what-is-bail', cat: 'Know Your Law', date: '18 Nov 2026', rt: '6 min read', t: 'What is bail? Types and procedure under the BNSS, 2023', ex: 'Bail is the release of an accused person while a case is pending. This explainer sets out the types of bail and the procedure under the Bharatiya Nagarik Suraksha Sanhita, 2023.', au: 'Adv. Adesh Thakur', bg: '#EEEEF3' },
  { slug: 'cheque-bounced-what-the-law-says', cat: 'Legal Explainers', date: '11 Nov 2026', rt: '5 min read', t: 'Your cheque bounced: what the law says', ex: 'A dishonoured cheque can lead to both civil and criminal proceedings. Here is what Section 138 provides and the time limits that apply.', au: 'Adv. Shreyash Kumbhalkar', bg: '#E9E9E9' },
  { slug: 'power-of-attorney', cat: 'Know Your Law', date: '4 Nov 2026', rt: '4 min read', t: 'Power of Attorney: general, special or durable?', ex: 'A power of attorney lets one person act for another. The three common forms differ in scope and in how long they last.', au: 'Adv. Adesh Thakur', bg: '#D2D9E2' },
];

export const ARTICLE_BODY = {
  'what-is-bail': [
    'Bail is the temporary release of a person accused of an offence while the case against them is pending. It is a condition-based release, not a finding on guilt.',
    'The Bharatiya Nagarik Suraksha Sanhita, 2023 sets out when an accused person can be released, whether the offence is bailable or non-bailable, and how a court decides. Bail may be granted by the police in some bailable cases, or by a Magistrate, Sessions Court or High Court.',
    'Anticipatory bail is sought before arrest where a person fears arrest in a non-bailable case. Interim bail is short term relief while the main application is pending. Courts attach conditions such as surrendering a passport, appearing when called, and not influencing witnesses.',
  ],
  'cheque-bounced-what-the-law-says': [
    'When a cheque issued for a legally enforceable debt is returned unpaid, Section 138 of the Negotiable Instruments Act, 1881 can apply. The same facts may also support a civil claim for recovery.',
    'The process is time bound. The payee sends a written demand notice within 30 days of the bank return memo, the drawer then has 15 days to pay, and a complaint can be filed before the Magistrate within one month after that period ends.',
    'Missing a step can end the remedy, so the dates are checked against the return memo and the postal record before anything is filed.',
  ],
  'power-of-attorney': [
    'A power of attorney is a document by which one person, the principal, authorises another, the agent, to act on their behalf.',
    'A general power of attorney gives broad authority across many matters. A special power of attorney is limited to a defined act, such as selling one property or appearing in one case. A durable power of attorney is drafted to continue even if the principal later loses the capacity to manage their affairs.',
    'For immovable property, the document usually needs to be stamped and registered to be relied on. The wording should state clearly what the agent can and cannot do.',
  ],
};

const SHORT = {
  'banking-finance-recovery': 'Legal services for banks, NBFCs and financial institutions, from sanction to recovery.',
  'property-land-due-diligence': 'Title verification, legal search reports and due diligence for land and property.',
  'civil-commercial-criminal-litigation': 'Civil, commercial, writ, consumer and criminal matters before courts and tribunals.',
  'government-psu-statutory-advisory': 'Advice and representation for government bodies, PSUs and statutory authorities.',
  'corporate-msme-commercial-advisory': 'Practical advisory and contracts for corporates, MSMEs and startups.',
  'real-estate-rera-project-advisory': 'Legal advice for builders, developers and landowners across a project.',
  'family-law-matrimonial-disputes': 'Divorce, maintenance, custody and related family proceedings.',
  'arbitration-mediation-conciliation': 'Arbitration, mediation and conciliation under the 1996 Act.',
};
AREAS.forEach((a) => { a.short = SHORT[a.slug]; });

const LEAD = {
  shahid: 'Senior advocate in continuous practice since 1994. Litigation, banking and institutional advisory.',
  shreyash: 'Litigation and dispute resolution before the Bombay High Court (Nagpur Bench) and other courts.',
  adesh: 'Corporate, banking and commercial advisory. LL.M., Symbiosis Law School, Pune.',
};
FOUNDERS.forEach((f) => { f.lead = LEAD[f.id]; });
