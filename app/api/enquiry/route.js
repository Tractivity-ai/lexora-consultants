import { NextResponse } from 'next/server';

export async function POST(req) {
  let data;
  try { data = await req.json(); } catch { return NextResponse.json({ ok: false }, { status: 400 }); }
  const name = String(data.name || '').trim();
  const phone = String(data.phone || '').trim();
  if (!name || !phone || !data.consent) return NextResponse.json({ ok: false, error: 'Missing fields' }, { status: 422 });

  const payload = {
    name, phone,
    email: String(data.email || '').trim(),
    matter: String(data.matter || '').trim(),
    message: String(data.message || '').trim().slice(0, 2000),
    receivedAt: new Date().toISOString(),
  };

  // Forward to any webhook (Zapier, Make, Slack, CRM, Google Sheet script). Set ENQUIRY_WEBHOOK_URL in Vercel.
  const hook = process.env.ENQUIRY_WEBHOOK_URL;
  if (hook) {
    try { await fetch(hook, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }); } catch {}
  } else {
    console.log('ENQUIRY', payload);
  }
  return NextResponse.json({ ok: true });
}
