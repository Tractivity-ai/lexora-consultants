import Link from 'next/link';
import Band from '@/components/Band';
import { Arrow } from '@/components/ui';
import { AreaIcon } from '@/components/blocks';
import { AREAS } from '@/lib/data';
export const metadata = { title: 'Practice areas | Lexora Advocates & Consultants' };
export default function PracticeAreas() {
  return (<>
    <Band title="Practice Areas & Services" trail="Practice areas" />
    <section className="fold" style={{ borderTop: 0 }}><div className="wrap">
      <div className="g-pa" style={{ marginTop: 0 }}>
        {AREAS.map((a, i) => (
          <div className="pa" key={a.slug} style={{ animationDelay: `${0.04 + i * 0.05}s` }}>
            <span className="num">{a.n}</span><span className="pi"><AreaIcon d={a.icon} /></span>
            <Link href={`/practice-areas/${a.slug}`} className="pc2">
              <h3>{a.t}</h3><p>{a.d}</p>
              <p className="inc">Which includes but not limited to:</p>
              <ul>{a.inc.map((x) => <li key={x}>{x}</li>)}</ul>
              <span className="more">Read more<Arrow /></span>
            </Link>
          </div>
        ))}
      </div>
    </div></section>
  </>);
}
