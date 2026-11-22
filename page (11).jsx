import Band from '@/components/Band';
export const metadata = { title: 'Privacy Policy | Lexora Advocates & Consultants' };
export default function Page() {
  return (<>
    <Band title="Privacy Policy" />
    <section className="fold" style={{ borderTop: 0 }}><div className="wrap" style={{ maxWidth: 760 }}><div className="prose"><p style={{ marginTop: 0 }}>This website collects the details you enter in the enquiry form, such as your name, phone number, email and a short message, only to respond to your enquiry. The details are not sold or shared for advertising. Please do not include confidential information in the form. To ask for your details to be corrected or removed, contact the office.</p></div></div></section>
  </>);
}
