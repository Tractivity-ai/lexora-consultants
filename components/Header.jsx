'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { NAV, SITE } from '@/lib/data';

export default function Header() {
  const [open, setOpen] = useState(false);
  const hdr = useRef(null);
  const prog = useRef(null);
  const closeBtn = useRef(null);
  const menuBtn = useRef(null);

  // Static through the first fold. After that: compact bar, hides on the way down, returns on the way up.
  useEffect(() => {
    const el = hdr.current;
    if (!el) return;
    let last = window.scrollY, stuck = false, hid = false, tick = false;
    const run = () => {
      tick = false;
      if (document.documentElement.classList.contains('op')) return;
      const y = window.scrollY;
      const th = Math.max(window.innerHeight * 0.85, 420);
      if (!stuck && y > th) {
        stuck = true; hid = true; last = y;
        el.classList.add('is-stuck', 'is-hidden');
        requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('is-ready')));
      } else if (stuck && y <= 60) {
        stuck = false; hid = false;
        el.classList.remove('is-stuck', 'is-hidden', 'is-ready');
      } else if (stuck) {
        const d = y - last;
        if (d > 8 && !hid) { hid = true; el.classList.add('is-hidden'); last = y; }
        else if (d < -8 && hid) { hid = false; el.classList.remove('is-hidden'); last = y; }
        else if ((d > 0 && hid) || (d < 0 && !hid)) last = y;
      }
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (prog.current) prog.current.style.transform = `scaleX(${h > 0 ? Math.min(y / h, 1) : 0})`;
    };
    const onScroll = () => { if (!tick) { tick = true; requestAnimationFrame(run); } };
    // one-page mode: the panel index drives the header (static on the first panel, compact bar after)
    const onIdx = (e) => {
      const { index, step, total } = e.detail;
      if (index < 0) { run(); return; }
      el.classList.toggle('is-stuck', index > 0);
      el.classList.toggle('is-hidden', index > 0);
      if (index > 0) requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('is-ready'))); else el.classList.remove('is-ready');
      if (prog.current) prog.current.style.transform = `scaleX(${total > 1 ? step / (total - 1) : 0})`;
    };
    const onMenu = () => setOpen(true);
    window.addEventListener('op:index', onIdx);
    window.addEventListener('lx:menu', onMenu);
    run();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('lx:menu', onMenu); window.removeEventListener('op:index', onIdx); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (open) {
      root.classList.add('lock');
      const t = setTimeout(() => closeBtn.current && closeBtn.current.focus(), 450);
      const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
      window.addEventListener('keydown', onKey);
      return () => { clearTimeout(t); window.removeEventListener('keydown', onKey); root.classList.remove('lock'); };
    }
    return undefined;
  }, [open]);

  const close = () => { setOpen(false); if (menuBtn.current) menuBtn.current.focus(); };

  return (
    <>
      <header className="hdr" ref={hdr}>
        <div className="hdr-bar">
          <div className="wrap hdr-in">
            <Link href="/" aria-label="Lexora Advocates and Consultants, home" className="lg">
              <img className="lg-n" src="/images/logo-black.png" alt="Lexora Advocates and Consultants" />
              <img className="lg-w" src="/images/logo-white.png" alt="" />
            </Link>
            <nav className="nav-d" aria-label="Primary">
              {NAV.filter((n) => n.label !== 'Contact').map((n) => <Link key={n.label} href={n.href}>{n.label}</Link>)}
              <Link href="/contact">Contact</Link>
            </nav>
            <Link href="/contact" className="btn btn-k nav-d hdr-cta" style={{ minHeight: 44 }}>Contact the office</Link>
            <button ref={menuBtn} className="menu-b" aria-label="Open menu" aria-expanded={open} aria-controls="site-menu" onClick={() => setOpen(true)}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M3 8h18M3 16h12" /></svg>
            </button>
          </div>
          <i className="hdr-prog" ref={prog} aria-hidden="true" />
        </div>
      </header>

      <div id="site-menu" className={`cur${open ? ' open' : ''}`} role="dialog" aria-modal="true" aria-label="Site menu" aria-hidden={!open}>
        <i className="cur-l" style={{ '--j': 0, left: '10%' }} />
        <i className="cur-l cur-l2" style={{ '--j': 1, left: '30%' }} />
        <i className="cur-l" style={{ '--j': 2, left: '50%' }} />
        <i className="cur-l cur-l2" style={{ '--j': 3, left: '70%' }} />
        <i className="cur-l" style={{ '--j': 4, left: '90%' }} />
        <div className="wrap cur-top">
          <img src="/images/logo-white.png" alt="Lexora Advocates and Consultants" />
          <button ref={closeBtn} className="menu-b cur-x" aria-label="Close menu" onClick={close}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19" /></svg>
          </button>
        </div>
        <nav className="wrap cur-nav" aria-label="Site">
          {NAV.map((n, i) => (
            <div className="cur-li" key={n.label}>
              <Link href={n.href} style={{ '--i': i }} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
                {n.label}
              </Link>
            </div>
          ))}
        </nav>
        <div className="wrap cur-f">
          <p>{SITE.address[0]} {SITE.address[1]}</p>
          <p><a href={`tel:${SITE.phone1Tel}`} tabIndex={open ? 0 : -1}>{SITE.phone1}</a> / <a href={`tel:${SITE.phone2Tel}`} tabIndex={open ? 0 : -1}>{SITE.phone2}</a><br /><a href={`mailto:${SITE.email}`} tabIndex={open ? 0 : -1}>{SITE.email}</a></p>
        </div>
      </div>
    </>
  );
}
