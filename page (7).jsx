import Band from '@/components/Band';
import { Btn } from '@/components/ui';
import { COURTS } from '@/lib/data';
export const metadata = { title: 'The Firm | Lexora Advocates & Consultants' };
export default function Firm() {
  return (<>
    <Band title="The Firm" />
    <section className="fold" style={{ borderTop: 0 }}><div className="wrap two">
      <div className="prose">
        <p style={{ marginTop: 0 }}>Lexora Advocates &amp; Consultants is a Nagpur law firm that combines courtroom practice with tax and compliance advisory, so a matter that has both a legal and a tax side stays with one office.</p>
        <p>The firm advises and represents individuals and businesses in civil, criminal, family, consumer, labour, property and cheque bounce matters, and in writ petitions. Tax and compliance work covers GST and income tax, including notices, returns, audits and appeals.</p>
        <p>The firm also publishes Know Your Law explainers, short guides that put the law in plain language.</p>
        <h2 className="h2 mt">Where we practise</h2>
        <ul className="list">{COURTS.map((c) => <li key={c.t}>{c.t}</li>)}</ul>
        <h2 className="h2 mt">The founders</h2>
        <p>The firm was founded by Adv. Adesh Thakur and Adv. Shreyash Kumbhalkar.</p>
        <div style={{ marginTop: 16 }}><Btn href="/our-people">Our people</Btn></div>
      </div>
      <aside className="aside"><h2 className="h3">Discuss a matter</h2><p style={{ margin: '8px 0 0' }}>Send an enquiry and the office will respond on a working day.</p><div style={{ marginTop: 14 }}><Btn href="/contact">Send an enquiry</Btn></div></aside>
    </div></section>
  </>);
}
