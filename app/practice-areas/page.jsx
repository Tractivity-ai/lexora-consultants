import Link from 'next/link';
import { Arrow, Icon } from '@/components/ui';
import { AREAS, TAX } from '@/lib/data';

export const metadata = { title: 'Practice areas | Lexora Advocates & Consultants' };
const VAR = ['va', 'vb', 'vc'];

export default function PracticeAreas() {
  return (
    <>
      <div className="titleband"><div className="wrap">
        <div className="crumbs"><Link href="/">Home</Link> / Practice areas</div>
        <h1>Practice areas</h1>
      </div></div>
      <section className="fold" style={{ borderTop: 0 }}><div className="wrap">
        <div className="grid g-areas" style={{ marginTop: 0 }}>
          {AREAS.map((a, i) => (
            <Link key={a.slug} href={`/practice-areas/${a.slug}`} className={`card ${VAR[i % 3]}`}>
              <span className="tile"><Icon f={a.f} p={a.p} /></span>
              <span className="ct"><span className="h3" style={{ display: 'block' }}>{a.t}</span><p>{a.d}</p></span>
              <Arrow /><span className="bar" />
            </Link>
          ))}
        </div>
        <Link href="/practice-areas/tax-and-compliance" className="card wide tint" style={{ background: '#E7E5E0', borderColor: '#CFCCC5' }}>
          <span className="tile" style={{ background: '#F6F5F2', borderColor: '#CFCCC5' }}><Icon f={TAX.f} p={TAX.p} fill="#CFCCC5" /></span>
          <span className="ct"><span className="h3" style={{ display: 'block' }}>Tax and compliance</span><p style={{ color: '#4A4A4A' }}>GST registration and returns, notices and appeals, income tax returns, tax audit and statutory compliance.</p></span>
          <Arrow />
        </Link>
      </div></section>
    </>
  );
}
