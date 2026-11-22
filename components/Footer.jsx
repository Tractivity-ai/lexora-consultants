import Link from 'next/link';
import { SITE, AREAS } from '@/lib/data';

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
            <p style={{ margin: '16px 0 0', fontSize: 14 }}>Committed to protecting your rights with precision and dedication.</p>
          </div>
          <div className="cols">
            <Col title="The Firm" items={[['The Firm', '/the-firm'], ['Our People', '/our-people'], ['Knowledge Centre', '/knowledge-centre'], ['Careers', '/careers'], ['Contact', '/contact']]} />
            <Col title="Practice" items={AREAS.slice(0, 5).map((a) => [a.t.replace(/:$/, '').split(' ').slice(0, 3).join(' '), `/practice-areas/${a.slug}`])} />
          </div>
          <div className="off">
            <b>Contact</b>
            <address style={{ fontStyle: 'normal', marginTop: 6, fontSize: 14 }}>
              <a href={`tel:${SITE.phone1Tel}`}>{SITE.phone1}</a> / <a href={`tel:${SITE.phone2Tel}`}>{SITE.phone2}</a><br />
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a><br />
              {SITE.address.join(' ')}
            </address>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', minHeight: 44, color: '#fff', fontWeight: 600 }}>Get directions →</Link>
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
