'use client';
import { useState } from 'react';

const MATTERS = ['Civil', 'Criminal', 'Family', 'Property', 'Consumer', 'Labour', 'Cheque bounce', 'Writ', 'GST', 'Income tax', 'Other'];

export default function ContactForm() {
  const [state, setState] = useState('idle');
  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setState('sending');
    try {
      const res = await fetch('/api/enquiry', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(Object.fromEntries(new FormData(form).entries())) });
      if (!res.ok) throw new Error();
      setState('done'); form.reset();
    } catch { setState('error'); }
  }
  const F = ({ id, label, children }) => (<div style={{ marginTop: 14 }}><label className="lbl" htmlFor={id}>{label}</label>{children}</div>);
  return (
    <form onSubmit={onSubmit}>
      <F id="cn" label="Name"><input className="fld" id="cn" name="name" autoComplete="name" required /></F>
      <F id="cp" label="Phone"><input className="fld" id="cp" name="phone" type="tel" autoComplete="tel" required /></F>
      <F id="ce" label="Email"><input className="fld" id="ce" name="email" type="email" autoComplete="email" /></F>
      <F id="cm" label="Nature of matter"><select className="fld" id="cm" name="matter">{MATTERS.map((m) => <option key={m}>{m}</option>)}</select></F>
      <F id="cg" label="Message"><textarea className="fld" id="cg" name="message" /></F>
      <label className="consent" style={{ marginTop: 14, alignItems: 'flex-start' }}><input type="checkbox" name="consent" required />I agree to be contacted and accept the privacy policy.</label>
      <button type="submit" className="btn btn-k" style={{ marginTop: 16 }} disabled={state === 'sending'}>Send enquiry</button>
      {state === 'done' && <p className="lead-ok" role="status">Thank you. The office will be in touch.</p>}
      {state === 'error' && <p className="lead-err" role="alert">Something went wrong. Please call 7304916240.</p>}
    </form>
  );
}
