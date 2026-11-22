import Link from 'next/link';
import { SITE } from '@/lib/data';
import { CallIcon, WaIcon } from './ui';

export default function StickyCTA() {
  return (
    <>
      <div className="sbar" role="region" aria-label="Quick contact">
        <a href={`tel:${SITE.phone1Tel}`} className="btn btn-k"><CallIcon color="#fff" />Call</a>
        <a href={SITE.wa} className="btn btn-wa"><WaIcon size={20} />WhatsApp</a>
        <Link href="/contact" className="btn btn-g">Enquire</Link>
      </div>
      <div className="fab">
        <a href={`tel:${SITE.phone1Tel}`} className="call" aria-label="Call the office"><CallIcon size={22} color="#fff" /></a>
        <a href={SITE.wa} className="wa" aria-label="Chat on WhatsApp"><WaIcon size={24} />WhatsApp</a>
      </div>
    </>
  );
}
