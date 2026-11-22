import Band from '@/components/Band';
import { FounderTile } from '@/components/blocks';
import { FOUNDERS } from '@/lib/data';
export const metadata = { title: 'Our People | Lexora Advocates & Consultants' };
export default function People() {
  return (<>
    <Band title="Our People" />
    <section className="fold" style={{ borderTop: 0 }}><div className="wrap">
      <h2 className="h2 tab">Founders<br />Details</h2>
      <div className="g-fo">{FOUNDERS.map((f, i) => <FounderTile key={f.id} f={f} delay={i * 0.08} />)}</div>
    </div></section>
  </>);
}
