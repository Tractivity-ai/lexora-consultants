import Band from '@/components/Band';
export const metadata = { title: 'Terms of Use | Lexora Advocates & Consultants' };
export default function Page() {
  return (<>
    <Band title="Terms of Use" />
    <section className="fold" style={{ borderTop: 0 }}><div className="wrap" style={{ maxWidth: 760 }}><div className="prose"><p style={{ marginTop: 0 }}>The contents of this website are for general information and do not constitute legal advice or solicitation. Use of this website does not create a lawyer-client relationship. The contents are the intellectual property of Lexora Advocates & Consultants and may not be copied without permission.</p></div></div></section>
  </>);
}
