import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Btn } from '@/components/ui';
import { AREAS, SITE } from '@/lib/data';

export function generateStaticParams() { return AREAS.map((a) => ({ slug: a.slug })); }
export function generateMetadata({ params }) {
  const a = AREAS.find((x) => x.slug === params.slug);
  return { title: a ? `${a.t.replace(/:$/, '')} | Lexora Advocates & Consultants` : 'Practice area' };
}

export default function Area({ params }) {
  const a = AREAS.find((x) => x.slug === params.slug);
  if (!a) notFound();
  const title = a.t.replace(/:$/, '');
  return (<>
    <div className="titleband"><div className="wrap">
      <div className="crumbs"><Link href="/">Home</Link> / <Link href="/practice-areas">Practice Areas</Link> / {title}</div>
      <h1>{title}</h1>
    </div></div>
    <section className="fold" style={{ borderTop: 0 }}><div className="wrap two">
      <div className="prose">
        <p style={{ marginTop: 0 }}>{a.d}</p>
        <h2 className="h2 tab mt">Which includes but not limited to</h2>
        <ul className="list" style={{ marginTop: 20 }}>{a.inc.map((m) => <li key={m}>{m}</li>)}</ul>
        <p className="mt" style={{ fontSize: 13, color: '#5B5958' }}>This page is for general information and educational purposes only and is not legal advice.</p>
      </div>
      <aside className="aside">
        <h2 className="h3">Discuss a matter</h2>
        <p style={{ margin: '8px 0 0' }}>Call <a href={`tel:${SITE.phone1Tel}`}>{SITE.phone1}</a> / <a href={`tel:${SITE.phone2Tel}`}>{SITE.phone2}</a> or send an enquiry.</p>
        <div style={{ marginTop: 14 }}><Btn href="/contact" className="btn btn-k">Send an enquiry</Btn></div>
        <h3 className="h3" style={{ marginTop: 24, fontSize: 15 }}>Practice areas</h3>
        <ul className="list" style={{ listStyle: 'none', paddingLeft: 0, fontSize: 14 }}>
          {AREAS.map((x) => (<li key={x.slug}><Link href={`/practice-areas/${x.slug}`} style={{ fontWeight: x.slug === a.slug ? 700 : 500 }}>{x.t.replace(/:$/, '')}</Link></li>))}
        </ul>
      </aside>
    </div></section>
  </>);
}
