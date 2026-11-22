import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Btn } from '@/components/ui';
import { AREAS, CHEQUE, SITE, AREA_MATTERS } from '@/lib/data';

const TAXITEM = { slug: 'tax-and-compliance', t: 'Tax and compliance', d: 'GST registration and returns, notices and appeals, income tax returns, tax audit and statutory compliance.' };
const ALL = [...AREAS, TAXITEM];

export function generateStaticParams() { return ALL.map((a) => ({ slug: a.slug })); }
export function generateMetadata({ params }) {
  const a = ALL.find((x) => x.slug === params.slug);
  return { title: a ? `${a.t} | Lexora Advocates & Consultants` : 'Practice area' };
}

export default function Area({ params }) {
  const a = ALL.find((x) => x.slug === params.slug);
  if (!a) notFound();
  const cheque = a.slug === 'cheque-bounce';
  return (
    <>
      <div className="titleband"><div className="wrap">
        <div className="crumbs"><Link href="/">Home</Link> / <Link href="/practice-areas">Practice Areas</Link> / {a.t}</div>
        <h1>{a.t}</h1>
      </div></div>
      <section className="fold" style={{ borderTop: 0 }}><div className="wrap two">
        <div className="prose">
          <p style={{ marginTop: 0 }}>{cheque ? CHEQUE.intro : a.d}</p>
          {cheque ? (<>
            <h2 className="h2 mt">Matters we handle</h2>
            <ul className="list">{CHEQUE.matters.map((m) => <li key={m}>{m}</li>)}</ul>
            <h2 className="h2 mt">Forum and process</h2>
            <p>{CHEQUE.forum}</p>
            <div className="steps">{CHEQUE.steps.map(([t, d], i) => (<div className="step" key={t}><b>{i + 1}. {t}</b>{d}</div>))}</div>
            <h2 className="h2 mt">Documents usually needed</h2>
            <ul className="list">{CHEQUE.docs.map((m) => <li key={m}>{m}</li>)}</ul>
            <h2 className="h2 mt">Frequently asked questions</h2>
            {CHEQUE.faqs.map(([q, ans]) => (<details key={q}><summary>{q}</summary><p>{ans}</p></details>))}
          </>) : (
            <>
              <h2 className="h2 mt">Matters we handle</h2>
              <ul className="list">{(AREA_MATTERS[a.slug] || []).map((m) => <li key={m}>{m}</li>)}</ul>
              <h2 className="h2 mt">How the office works with you</h2>
              <p>The first step is a short conversation about the facts and the documents you hold. The office then explains the forum, the likely steps and the time limits that apply, before any work begins.</p>
            </>
          )}
          <p className="mt" style={{ fontSize: 14, color: '#6B6B6B' }}>This page is for general information and educational purposes only and is not legal advice.</p>
        </div>
        <aside className="aside">
          <h2 className="h3">Discuss a matter</h2>
          <p style={{ margin: '8px 0 0' }}>Call <a href={`tel:${SITE.phone1Tel}`}>{SITE.phone1}</a> or send an enquiry.</p>
          <div style={{ marginTop: 14 }}><Btn href="/contact">Send an enquiry</Btn></div>
          <h3 className="h3" style={{ marginTop: 24, fontSize: 17 }}>Practice areas</h3>
          <ul className="list" style={{ listStyle: 'none', paddingLeft: 0 }}>
            {ALL.map((x) => (<li key={x.slug}><Link href={`/practice-areas/${x.slug}`} style={{ fontWeight: x.slug === a.slug ? 600 : 400 }}>{x.t}</Link></li>))}
          </ul>
        </aside>
      </div></section>
    </>
  );
}
