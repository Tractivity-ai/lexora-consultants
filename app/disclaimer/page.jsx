import Band from '@/components/Band';
export const metadata = { title: 'Disclaimer | Lexora Advocates & Consultants' };
export default function Page() {
  return (<>
    <Band title="Disclaimer" />
    <section className="fold" style={{ borderTop: 0 }}><div className="wrap" style={{ maxWidth: 760 }}><div className="prose"><p style={{ marginTop: 0 }}>Under the rules of the Bar Council of India, Lexora Advocates & Consultants may not solicit work or advertise. The contents of this website are for informational purposes only and do not constitute legal advice or solicitation. The information is true and accurate to the best of our knowledge. The firm is not liable for any action taken in reliance on the material on this website. Where you need assistance, seek independent legal advice.</p></div></div></section>
  </>);
}
