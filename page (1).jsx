import Link from 'next/link';
import Band from '@/components/Band';
import { Arrow, BookIcon } from '@/components/ui';
import { ARTICLES } from '@/lib/data';
export const metadata = { title: 'Knowledge Centre | Lexora Advocates & Consultants' };
export default function Know() {
  return (<>
    <Band title="Knowledge Centre" />
    <section className="fold" style={{ borderTop: 0 }}><div className="wrap">
      <p style={{ margin: 0, maxWidth: '60ch' }}>Know Your Law explainers: short guides that put the law in plain language. They are general information and not legal advice.</p>
      <div className="g-know">
        {ARTICLES.map((a) => (
          <Link href={`/knowledge-centre/${a.slug}`} className="kc" key={a.slug}>
            <div className="kt" style={{ background: a.bg }}><span className="c">{a.cat}</span><span className="ki"><BookIcon /></span></div>
            <div className="kb">
              <span style={{ fontSize: 14, color: '#6B6B6B' }}>{a.date} · {a.rt}</span>
              <span className="h3 ttl">{a.t}</span>
              <span style={{ display: 'block', marginTop: 10, fontSize: 15, lineHeight: 1.55 }}>{a.ex}</span>
              <span style={{ display: 'block', marginTop: 12, fontSize: 14, color: '#6B6B6B' }}>{a.au}</span>
              <span className="btn btn-g">Read article<Arrow /></span>
            </div>
          </Link>
        ))}
      </div>
    </div></section>
  </>);
}
