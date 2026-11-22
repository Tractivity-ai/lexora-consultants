'use client';
import { useState } from 'react';
import Link from 'next/link';
import { NAV } from '@/lib/data';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="hdr">
      <div className="wrap hdr-in">
        <Link href="/" aria-label="Lexora Advocates and Consultants, home" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/images/logo.png" alt="Lexora Advocates and Consultants" />
        </Link>
        <nav className="nav-d" aria-label="Primary">
          {NAV.filter((n) => n.label !== 'Contact').map((n) => <Link key={n.label} href={n.href}>{n.label}</Link>)}
          <Link href="/contact">Contact</Link>
        </nav>
        <Link href="/contact" className="btn btn-k nav-d" style={{ minHeight: 44 }}>Contact the office</Link>
        <button className="menu-b" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#141414" strokeWidth="1.5" aria-hidden="true">
            {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M3 7h18M3 12h18M3 17h18" />}
          </svg>
        </button>
      </div>
      {open && (
        <nav className="nav-m" aria-label="Mobile">
          {NAV.map((n) => <Link key={n.label} href={n.href} onClick={() => setOpen(false)}>{n.label}</Link>)}
        </nav>
      )}
    </header>
  );
}
