import Link from 'next/link';
import { SITE } from '@/lib/data';

const Col = ({ title, items }) => (
  <div className="col"><b>{title}</b>{items.map(([l, h]) => <Link key={l} href={h}>{l}</Link>)}</div>
);

export default function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="grid4">
          <div>
            <img src="/images/logo-white.png" alt="Lexora Advocates and Consultants" />
            <p style={{ margin: '16px 0 0', fontSize: 15 }}>Advocates &amp; Consultants, Nagpur</p>
          </div>
          <div className="cols">
            <Col title="The Firm" items={[['The Firm', '/the-firm'], ['Our People', '/our-people'], ['Knowledge Centre', '/knowledge-centre'], ['Careers', '/careers'], ['Contact', '/contact']]} />
            <Col title="Practice" items={[['Civil', '/practice-areas/civil'], ['Criminal', '/practice-areas/criminal'], ['Family', '/practice-areas/family-and-matrimonial'], ['Cheque bounce', '/practice-areas/cheque-bounce'], ['Tax and compliance', '/practice-areas/tax-and-compliance']]} />
          </div>
          <div className="off">
            <b>Office</b>
            <address style={{ fontStyle: 'normal', marginTop: 6 }}>
              {SITE.address.join(' ')}<br />{SITE.phone1} · {SITE.phone2}<br />{SITE.hours}
            </address>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', minHeight: 44, color: '#fff' }}>Get directions →</Link>
          </div>
        </div>
        <div className="legal">
          <p>© 2026 Lexora Advocates &amp; Consultants · <Link href="/disclaimer">Disclaimer</Link> · <Link href="/privacy">Privacy Policy</Link> · <Link href="/terms">Terms of Use</Link></p>
          <p>Disclaimer: The contents of this website are for informational purposes only and do not constitute legal advice or solicitation. The information is true and accurate to the best of our knowledge.</p>
        </div>
      </div>
    </footer>
  );
}
