import Link from 'next/link';
import Band from '@/components/Band';
import { Arrow } from '@/components/ui';
import { ARTICLES } from '@/lib/data';
export const metadata = { title: 'Knowledge Centre | Lexora Advocates & Consultants' };
export default function Know() {
  return (<>
    <Band title="Knowledge Centre" />
    <section className="fold" style={{ borderTop: 0 }}><div className="wrap">
      <p style={{ margin: 0, maxWidth: '60ch' }}>Know Your Law explainers: short guides that put the law in plain language. They are general information and not legal advice.</p>
      <div className="g-know" style={{ marginTop: 28 }}>
        {ARTICLES.map((a) => (
          <Link href={`/knowledge-centre/${a.slug}`} className="krow" key={a.slug}>
            <span className="meta">{a.cat} · {a.date} · {a.rt} · {a.au}</span>
            <span className="ttl">{a.t}</span>
            <span className="ex">{a.ex}</span>
            <Arrow />
          </Link>
        ))}
      </div>
    </div></section>
  </>);
}
