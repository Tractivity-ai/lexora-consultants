import Link from 'next/link';
import { Btn, MapPlaceholder } from '@/components/ui';
import { SITE } from '@/lib/data';
import ContactForm from '@/components/ContactForm';

export const metadata = { title: 'Contact | Lexora Advocates & Consultants' };

export default function Contact() {
  return (
    <>
      <div className="titleband">
        <div className="wrap">
          <div className="crumbs"><Link href="/">Home</Link> / Contact</div>
          <h1>Contact</h1>
        </div>
      </div>
      <section className="fold" style={{ borderTop: 0 }}>
        <div className="wrap two" style={{ gridTemplateColumns: undefined }}>
          <div>
            <h2 className="h2">The office</h2>
            <address style={{ fontStyle: 'normal', marginTop: 16 }}>{SITE.address[0]}<br />{SITE.address[1]}</address>
            <p style={{ margin: '12px 0 0' }}><a href={`tel:${SITE.phone1Tel}`}>{SITE.phone1}</a><br /><a href="tel:+918805241341">{SITE.phone2}</a></p>
            <p style={{ margin: '12px 0 0' }}><a href={SITE.wa}>WhatsApp the office</a></p>
            <p style={{ margin: '12px 0 0' }}>{SITE.email}</p>
            <p style={{ margin: '12px 0 0', color: '#6B6B6B' }}>{SITE.hours}</p>
            <div className="map" style={{ marginTop: 20, height: 260 }}><MapPlaceholder /></div>
            <div style={{ marginTop: 18 }}><Btn href="https://maps.google.com/?q=Ganeshpeth+Nagpur">Get directions</Btn></div>
          </div>
          <div>
            <h2 className="h2">Send an enquiry</h2>
            <p style={{ margin: '8px 0 0', color: '#6B6B6B' }}>Please do not share confidential details here.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
