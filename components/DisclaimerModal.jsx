'use client';
import { useEffect, useState } from 'react';

const KEY = 'lexora-disclaimer-accepted';

export default function DisclaimerModal() {
  const [open, setOpen] = useState(true);
  const [declined, setDeclined] = useState(false);

  useEffect(() => {
    try { if (localStorage.getItem(KEY) === 'yes') setOpen(false); } catch {}
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  const accept = () => {
    try { localStorage.setItem(KEY, 'yes'); } catch {}
    setOpen(false);
  };

  return (
    <div className="dsc" role="dialog" aria-modal="true" aria-labelledby="dsct">
      <div className="dsc-card">
        <img src="/images/logo.png" alt="Lexora Advocates and Consultants" />
        {!declined ? (
          <>
            <h2 className="h2" id="dsct" style={{ marginTop: 18 }}>Disclaimer and confirmation</h2>
            <p style={{ margin: '10px 0 0', fontSize: 15, lineHeight: 1.55 }}>
              Under the rules of the Bar Council of India, Lexora Advocates &amp; Consultants (the Firm) may not solicit work or advertise. By selecting I Accept &amp; Proceed, you acknowledge that:
            </p>
            <ul>
              <li>There has been no advertisement, personal communication, solicitation, invitation or inducement of any kind from the Firm or its members to seek work through this website.</li>
              <li>This website exists to give you information about the Firm, its practice areas and its advocates.</li>
              <li>You are seeking this information of your own accord, for personal or professional use.</li>
              <li>Information is provided only at your request, and use of this website does not create a lawyer-client relationship.</li>
              <li>The contents are not legal advice. The Firm is not liable for any action taken in reliance on them, and you should seek independent legal advice where you need it.</li>
              <li>The content of this website is the intellectual property of the Firm.</li>
            </ul>
            <div className="dsc-acts">
              <button className="btn btn-k" onClick={accept}>I Accept &amp; Proceed</button>
              <button className="btn btn-o" onClick={() => setDeclined(true)}>I Do Not Accept</button>
            </div>
          </>
        ) : (
          <>
            <h2 className="h2" id="dsct" style={{ marginTop: 18 }}>Thank you for visiting</h2>
            <p style={{ margin: '10px 0 0' }}>You have chosen not to proceed, so the website contents are not available. You can close this window, or review the notice again.</p>
            <div style={{ marginTop: 20 }}><button className="btn btn-o" onClick={() => setDeclined(false)}>Review the notice</button></div>
          </>
        )}
      </div>
    </div>
  );
}
