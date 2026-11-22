'use client';
import { useId, useState } from 'react';

const MATTERS = ['Civil', 'Criminal', 'Family', 'Property', 'Consumer', 'Labour', 'Cheque bounce', 'GST', 'Income tax', 'Other'];

export default function LeadForm({ variant = 'compact', className = '' }) {
  const id = useId();
  const [state, setState] = useState('idle');
  const bar = variant === 'bar';

  async function onSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setState('sending');
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(fd.entries())),
      });
      if (!res.ok) throw new Error('failed');
      setState('done');
      e.currentTarget.reset();
    } catch {
      setState('error');
    }
  }

  const name = (
    <div><label className="lbl" htmlFor={`${id}n`}>Name</label>
      <input className="fld" id={`${id}n`} name="name" type="text" autoComplete="name" required /></div>
  );
  const phone = (
    <div><label className="lbl" htmlFor={`${id}p`}>Phone</label>
      <input className="fld" id={`${id}p`} name="phone" type="tel" autoComplete="tel" required /></div>
  );
  const matter = (
    <div><label className="lbl" htmlFor={`${id}m`}>Nature of matter</label>
      <select className="fld" id={`${id}m`} name="matter" style={{ padding: '10px 8px' }}>{MATTERS.map((m) => <option key={m}>{m}</option>)}</select></div>
  );
  const send = <button type="submit" className="btn btn-k" style={{ minHeight: 46, padding: '0 18px' }} disabled={state === 'sending'}>{bar ? 'Send enquiry' : 'Send'}</button>;

  return (
    <form onSubmit={onSubmit} className={`lead ${bar ? 'bar' : ''} ${className}`}>
      <div className={bar ? 'bar-in' : ''}>
        <div className={bar ? 'bar-t' : ''}>
          <div className="h3">Quick enquiry</div>
          {bar && <p>The office will call you on a working day.</p>}
        </div>
        {bar ? (<>
          <div className="bar-f">{name}</div><div className="bar-f">{phone}</div><div className="bar-f">{matter}</div>{send}
        </>) : (<>
          <div className="lead-row">{name}{phone}</div>
          <div className="lead-row2">{matter}{send}</div>
        </>)}
      </div>
      <label className="consent">
        <input type="checkbox" name="consent" required />
        I agree to be contacted and accept the privacy policy. Please do not share confidential details.
      </label>
      {state === 'done' && <p className="lead-ok" role="status">Thank you. The office will be in touch.</p>}
      {state === 'error' && <p className="lead-err" role="alert">Something went wrong. Please call +91 73049 16240.</p>}
    </form>
  );
}
