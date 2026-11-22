import Band from '@/components/Band';
import { Btn } from '@/components/ui';
import { SITE } from '@/lib/data';
export const metadata = { title: 'Careers | Lexora Advocates & Consultants' };
export default function Careers() {
  return (<>
    <Band title="Careers" />
    <section className="fold" style={{ borderTop: 0 }}><div className="wrap" style={{ maxWidth: 760 }}>
      <div className="prose">
        <p style={{ marginTop: 0 }}>Lexora considers applications from law students, young advocates and tax professionals for internships and associate roles as they open.</p>
        <p>To apply, send a CV and a short note about your interest to {SITE.email}, or write to the office through the contact page.</p>
        <p style={{ color: '#6B6B6B' }}>No openings are listed at the moment.</p>
        <div style={{ marginTop: 18 }}><Btn href="/contact">Contact the office</Btn></div>
      </div>
    </div></section>
  </>);
}
