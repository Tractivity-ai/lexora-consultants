import Band from '@/components/Band';
import { Btn } from '@/components/ui';
import { Rich } from '@/components/blocks';
import { WHO, PHILOSOPHY, WHY } from '@/lib/data';
export const metadata = { title: 'The Firm | Lexora Advocates & Consultants' };
export default function Firm() {
  return (<>
    <Band title="The Firm" />
    <section className="fold" style={{ borderTop: 0 }}><div className="wrap">
      <h2 className="h2 tab">Who We Are</h2>
      <div className="who" style={{ marginTop: 24 }}>{WHO.map((p, i) => <p key={i}><Rich parts={p} /></p>)}</div>
    </div></section>
    <section className="band on-navy" style={{ padding: '36px 0' }}>
      <img className="band-art" src="/images/thinker.png" alt="" />
      <div className="wrap"><div>
        <h2 className="h2 tab">Philosophy And Working Approach</h2>
        <p style={{ margin: '22px 0 10px' }}>{PHILOSOPHY.lead}</p>
        <ul>{PHILOSOPHY.items.map((i) => <li key={i}>{i}</li>)}</ul>
        <p className="q">{PHILOSOPHY.quote}</p>
      </div></div>
    </section>
    <section className="band on-navy why" style={{ padding: 0, marginTop: 1 }}>
      <img className="why-img" src="/images/gavel.jpg" alt="" />
      <div className="wrap" style={{ padding: '36px 20px' }}><div>
        <h2 className="h2 tab">Why Clients Choose Us</h2>
        <ul style={{ marginTop: 24 }}>{WHY.map((i) => <li key={i}>{i}</li>)}</ul>
      </div></div>
    </section>
    <section className="fold"><div className="wrap"><Btn href="/our-people">Founders details</Btn></div></section>
  </>);
}
