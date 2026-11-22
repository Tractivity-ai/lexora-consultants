import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Btn } from '@/components/ui';
import { Rich } from '@/components/blocks';
import { FOUNDERS, SITE } from '@/lib/data';

export function generateStaticParams() { return FOUNDERS.map((f) => ({ slug: f.id })); }
export function generateMetadata({ params }) {
  const f = FOUNDERS.find((x) => x.id === params.slug);
  return { title: f ? `${f.name} | Lexora Advocates & Consultants` : 'Our People' };
}

export default function Person({ params }) {
  const f = FOUNDERS.find((x) => x.id === params.slug);
  if (!f) notFound();
  return (<>
    <div className="titleband"><div className="wrap">
      <div className="crumbs"><Link href="/">Home</Link> / <Link href="/our-people">Our People</Link> / {f.name}</div>
      <h1>{f.name}</h1>
    </div></div>
    <section className="fold" style={{ borderTop: 0 }}><div className="wrap two">
      <div className="prose">
        <p style={{ marginTop: 0, fontWeight: 600, color: 'var(--navy)' }}>{f.role}</p>
        <p><Rich parts={f.parts} /></p>
        <p className="mt" style={{ fontSize: 13, color: '#5B5958' }}>This page is for general information only and is not legal advice.</p>
      </div>
      <aside className="aside">
        <div className="pf-ph">{f.img ? <img src={f.img} alt={f.name} /> : <span aria-hidden="true">{f.initials}</span>}</div>
        <h2 className="h3" style={{ marginTop: 18 }}>Speak to the office</h2>
        <p style={{ margin: '8px 0 0' }}>Call <a href={`tel:${SITE.phone1Tel}`}>{SITE.phone1}</a> / <a href={`tel:${SITE.phone2Tel}`}>{SITE.phone2}</a> or send an enquiry.</p>
        <div style={{ marginTop: 14 }}><Btn href="/contact" className="btn btn-k">Send an enquiry</Btn></div>
        <h3 className="h3" style={{ marginTop: 24, fontSize: 15 }}>Our people</h3>
        <ul className="list" style={{ listStyle: 'none', paddingLeft: 0, fontSize: 14 }}>
          {FOUNDERS.map((x) => (<li key={x.id}><Link href={`/our-people/${x.id}`} style={{ fontWeight: x.id === f.id ? 700 : 500 }}>{x.name}</Link></li>))}
        </ul>
      </aside>
    </div></section>
  </>);
}
