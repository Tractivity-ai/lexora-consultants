export const SITE = {
  name: 'Lexora Advocates & Consultants',
  phone1: '+91 73049 16240',
  phone1Tel: '+917304916240',
  phone2: '+91 88052 41341',
  wa: 'https://wa.me/917304916240',
  address: ['56, Ganeshpeth,', 'Nagpur, Maharashtra [PIN]'],
  hours: 'Mon to Sat, 10:30 AM to 7:00 PM [confirm]',
  email: '[professional email]',
};

export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'The Firm', href: '/the-firm' },
  { label: 'Our People', href: '/our-people' },
  { label: 'Practice Areas', href: '/practice-areas' },
  { label: 'Tax & Compliance', href: '/practice-areas/tax-and-compliance' },
  { label: 'Knowledge Centre', href: '/knowledge-centre' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export const TAX = {
  f: 'M5 4h14v16H5z',
  p: 'M5 4h14v16H5z M8 7.5h8 M8 12h2 M12 12h2 M8 16h2 M12 16h2 M16 12v4',
};

export const AREAS = [
  { slug: 'civil', t: 'Civil', d: 'Suits, recovery, injunctions and contract disputes.', f: 'M7 3h7l5 5v13H7z', p: 'M7 3h7l5 5v13H7z M14 3v5h5 M10 13h6 M10 17h4' },
  { slug: 'criminal', t: 'Criminal', d: 'Bail, trial and quashing before the District Court and High Court.', f: 'M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z', p: 'M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z M9 12l2 2 4-4' },
  { slug: 'family-and-matrimonial', t: 'Family and matrimonial', d: 'Divorce, maintenance, custody and domestic matters.', f: 'M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5z', p: 'M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M16.5 10.5a2.5 2.5 0 1 0 0-5 M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5 M16 14.8c2.8.2 5 2 5 5.2' },
  { slug: 'consumer', t: 'Consumer', d: 'Complaints before consumer commissions.', f: 'M5 8h14l-1 12H6z', p: 'M5 8h14l-1 12H6z M9 8V6.5a3 3 0 0 1 6 0V8 M10 12v1 M14 12v1' },
  { slug: 'labour-and-service', t: 'Labour and service', d: 'Employment, industrial disputes and service matters.', f: 'M4 8h16v11H4z', p: 'M4 8h16v11H4z M9 8V5.5h6V8 M4 13h16 M11 13v2h2v-2' },
  { slug: 'rent-and-tenancy', t: 'Rent and tenancy', d: 'Eviction, rent disputes and tenancy agreements.', f: 'M8.5 18a4 4 0 1 1 0-8 4 4 0 0 1 0 8z', p: 'M8.5 18a4 4 0 1 1 3-6.6L20 4 M16.5 7.5L19 10 M14 10l2.5 2.5' },
  { slug: 'land-and-property', t: 'Land and property', d: 'Title, partition, sale deeds and RERA.', f: 'M6 10v10h12V10l-6-5z', p: 'M3.5 11.5L12 4l8.5 7.5 M6 10v10h12V10 M10 20v-5h4v5' },
  { slug: 'cheque-bounce', t: 'Cheque bounce (Sec. 138 NI Act)', d: 'Notice, complaint and trial for a dishonoured cheque.', f: 'M3 6h18v12H3z', p: 'M3 6h18v12H3z M6 10h6 M6 14h4 M14 15c1-1.5 2-1.5 3 0' },
  { slug: 'writ-petitions', t: 'Writ petitions', d: 'Constitutional remedies before the High Court.', f: 'M3 9l9-5 9 5z', p: 'M3 9l9-5 9 5z M5 11v7 M9 11v7 M15 11v7 M19 11v7 M3 20h18' },
];

export const COURTS = [
  { t: 'District and Sessions Court, Nagpur', cap: 'Trial courts', p: 'M3 9l9-5 9 5z M5 11v7 M9 11v7 M15 11v7 M19 11v7 M3 20h18', f: 'M3 9l9-5 9 5z', bg: '#FFFFFF' },
  { t: 'Bombay High Court, Nagpur Bench', cap: 'Constitutional and appellate', p: 'M3 20h18 M5 20V10l7-5 7 5v10 M9 20v-6h6v6 M12 5V3', f: 'M5 10l7-5 7 5v10H5z', bg: '#F6F5F2' },
  { t: 'Consumer commissions and tribunals', cap: 'Commissions and tribunals', p: 'M8 4h8v3H8z M6 5.5h12V21H6z M9 12h6 M9 16h4', f: 'M6 5.5h12V21H6z', bg: '#EFEDE8' },
  { t: 'GST and Income Tax authorities', cap: 'Tax authorities', p: 'M4 7h16v13H4z M4 11h16 M9 4v3 M15 4v3 M8 15h3', f: 'M4 7h16v13H4z', bg: '#E7E5E0' },
];

export const ADVOCATES = [
  { id: 'adesh', name: 'Adv. Adesh Thakur', img: '/images/adesh.jpg', qual: 'LL.M. (Business and Corporate Law), Symbiosis Law School, Pune', focus: 'Civil, criminal, family, consumer and commercial advisory; cheque bounce and writ petitions.' },
  { id: 'shreyash', name: 'Adv. Shreyash Kumbhalkar', img: '/images/shreyash.jpg', qual: 'B.A. LL.B., Rashtrasant Tukadoji Maharaj Nagpur University', focus: 'Criminal defence, family, property, labour and intellectual property.' },
];

export const ARTICLES = [
  { slug: 'what-is-bail', cat: 'Know Your Law', date: '18 Nov 2026', rt: '6 min read', t: 'What is bail? Types and procedure under the BNSS, 2023', ex: 'Bail is the release of an accused person while a case is pending. This explainer sets out the types of bail and the procedure under the Bharatiya Nagarik Suraksha Sanhita, 2023.', au: 'Adv. Adesh Thakur', bg: '#F6F5F2' },
  { slug: 'cheque-bounced-what-the-law-says', cat: 'Legal Explainers', date: '11 Nov 2026', rt: '5 min read', t: 'Your cheque bounced: what the law says', ex: 'A dishonoured cheque can lead to both civil and criminal proceedings. Here is what Section 138 provides and the time limits that apply.', au: 'Adv. Shreyash Kumbhalkar', bg: '#EFEDE8' },
  { slug: 'power-of-attorney', cat: 'Know Your Law', date: '4 Nov 2026', rt: '4 min read', t: 'Power of Attorney: general, special or durable?', ex: 'A power of attorney lets one person act for another. The three common forms differ in scope and in how long they last.', au: 'Adv. Adesh Thakur', bg: '#E7E5E0' },
];

export const CHEQUE = {
  intro: 'A cheque that bounces is both a civil and a criminal matter. The Negotiable Instruments Act treats the dishonour of a cheque issued for a legally enforceable debt as an offence if the amount is not paid within a fixed time. Here is what the law provides and how the process usually works.',
  matters: ['Legal notice to the drawer after the bank returns the cheque', 'Complaints before the Magistrate under Section 138', 'Defence for drawers who receive a notice or summons', 'Compounding and settlement of the complaint', 'Related civil recovery of the amount'],
  forum: 'Complaints are filed before the Magistrate. Time limits are set by the Act, and the office confirms each date against the actual return memo.',
  steps: [
    ['Legal notice', 'A written demand goes to the drawer within 30 days of receiving the bank’s return memo.'],
    ['Fifteen days to pay', 'The drawer has 15 days from receiving the notice to pay the cheque amount.'],
    ['Complaint', 'If payment is not made, a complaint is filed before the Magistrate within one month after that period ends.'],
    ['Trial', 'The Magistrate takes cognisance, issues summons and the matter proceeds to trial.'],
  ],
  docs: ['Original dishonoured cheque', 'Bank return memo stating the reason for dishonour', 'Proof of the debt or liability: invoice, agreement, ledger or messages', 'Copy of the legal notice, postal receipt and tracking record', 'Identity and address details of the drawer', 'Bank statement of the account in which the cheque was deposited'],
  faqs: [
    ['Is a bounced cheque a criminal offence?', 'It can be. Under Section 138, dishonour of a cheque issued for a legally enforceable debt is an offence if the amount is not paid within the time the Act provides. The same facts may also support a civil recovery claim.'],
    ['How long is a cheque valid for presentation?', 'A cheque is generally valid for three months from its date, or within its validity period if that is shorter. Presenting it outside that period affects the remedy under Section 138.'],
    ['Does the legal notice have a time limit?', 'Yes. The notice must be sent within 30 days of the payer receiving information from the bank that the cheque was returned unpaid.'],
    ['What can the court order?', 'The Act provides for imprisonment, a fine of up to twice the cheque amount, or both. Many matters end in settlement and compounding.'],
    ['Can a post-dated or security cheque be the basis of a complaint?', 'It depends on whether the cheque was issued towards a legally enforceable debt at the time of presentation. The office looks at the underlying documents before advising.'],
  ],
};

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

export const AREA_MATTERS = {
  civil: ['Suits for recovery of money and for specific performance', 'Injunctions and interim relief', 'Contract and commercial disputes', 'Execution of decrees and appeals'],
  criminal: ['Bail and anticipatory bail', 'Defence at trial before the District and Sessions Court', 'Quashing of FIRs and complaints before the High Court', 'Appeals, revisions and criminal writs'],
  'family-and-matrimonial': ['Divorce, mutual consent and contested', 'Maintenance and alimony', 'Child custody and guardianship', 'Domestic violence and related protection matters'],
  consumer: ['Complaints for deficiency in service and defective goods', 'Matters before District, State and National Commissions', 'Real estate and insurance disputes', 'Execution of consumer orders'],
  'labour-and-service': ['Industrial disputes and labour court matters', 'Termination, dismissal and service benefits', 'Service matters before the High Court', 'Employment contracts and policies'],
  'rent-and-tenancy': ['Eviction and recovery of possession', 'Rent disputes and arrears', 'Drafting and reviewing tenancy and leave and licence agreements', 'Representation of landlords and tenants'],
  'land-and-property': ['Title verification and due diligence', 'Partition and ownership disputes', 'Sale deeds, gift deeds and agreements', 'RERA complaints and builder disputes'],
  'writ-petitions': ['Writs before the Bombay High Court, Nagpur Bench', 'Challenges to administrative and tax orders', 'Service and education matters', 'Enforcement of fundamental rights'],
  'tax-and-compliance': ['GST registration, returns and reconciliations', 'Replies to GST notices, audits and appeals', 'Income tax return filing and assessment replies', 'Tax audit and statutory compliance for businesses'],
};
