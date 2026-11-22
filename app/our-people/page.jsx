import Band from '@/components/Band';
import { Btn } from '@/components/ui';
import { ADVOCATES } from '@/lib/data';
export const metadata = { title: 'Our People | Lexora Advocates & Consultants' };
export default function People() {
  return (<>
    <Band title="Our People" />
    <section className="fold" style={{ borderTop: 0 }}><div className="wrap">
      <div className="g-pc" style={{ marginTop: 0 }}>
        {ADVOCATES.map((a) => (
          <div className="pc" id={a.id} key={a.id} style={{ scrollMarginTop: 96 }}>
            <div className="ph"><img src={a.img} alt={a.name} /><div className="fd" /><span className="chip">Founder</span></div>
            <div className="pb">
              <div className="h3" style={{ fontSize: 22 }}>{a.name}</div>
              <div style={{ fontSize: 14, color: '#6B6B6B' }}>Founder, Advocate</div>
              <p>{a.qual}</p>
              <p className="sm">Areas of practice: {a.focus}</p>
              <p className="sm">Enrolment: [Bar Council enrolment number]</p>
              <div style={{ marginTop: 16 }}><Btn href="/contact">Contact the office</Btn></div>
            </div>
          </div>
        ))}
      </div>
    </div></section>
  </>);
}
