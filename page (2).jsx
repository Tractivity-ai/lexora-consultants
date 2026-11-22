import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Btn } from '@/components/ui';
import { ARTICLES, ARTICLE_BODY } from '@/lib/data';
export function generateStaticParams() { return ARTICLES.map((a) => ({ slug: a.slug })); }
export function generateMetadata({ params }) { const a = ARTICLES.find((x) => x.slug === params.slug); return { title: a ? `${a.t} | Lexora` : 'Article' }; }
export default function Article({ params }) {
  const a = ARTICLES.find((x) => x.slug === params.slug);
  if (!a) notFound();
  return (<>
    <div className="titleband"><div className="wrap">
      <div className="crumbs"><Link href="/">Home</Link> / <Link href="/knowledge-centre">Knowledge Centre</Link></div>
      <h1>{a.t}</h1>
      <p style={{ margin: '10px 0 0', fontSize: 14, color: '#6B6B6B' }}>{a.cat} · {a.date} · {a.rt} · {a.au}</p>
    </div></div>
    <section className="fold" style={{ borderTop: 0 }}><div className="wrap two">
      <div className="prose">
        <p style={{ marginTop: 0 }}>{a.ex}</p>
        {(ARTICLE_BODY[a.slug] || []).map((t, i) => <p key={i}>{t}</p>)}
        <p className="mt" style={{ fontSize: 14, color: '#6B6B6B' }}>This article is for general information and educational purposes only and is not legal advice.</p>
        <div style={{ marginTop: 16 }}><Btn href="/knowledge-centre">All articles</Btn></div>
      </div>
      <aside className="aside"><h2 className="h3">Discuss a matter</h2><p style={{ margin: '8px 0 0' }}>Send an enquiry and the office will respond on a working day.</p><div style={{ marginTop: 14 }}><Btn href="/contact">Send an enquiry</Btn></div></aside>
    </div></section>
  </>);
}
