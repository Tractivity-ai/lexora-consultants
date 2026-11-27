'use client';
import { useEffect, useState } from 'react';

// Side pagination (desktop), like the dots on khaitanco.com. Follows the one-page scroll, or the page scroll when that is off.
export default function Rail() {
  const [items, setItems] = useState([]);
  const [act, setAct] = useState(0);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const els = [...document.querySelectorAll('[data-ch]')];
    setItems(els.map((e) => ({ id: e.id, label: e.getAttribute('data-ch') })));
    const op = () => document.documentElement.classList.contains('op');
    const io = new IntersectionObserver((es) => {
      if (op()) return;
      es.forEach((e) => { if (e.isIntersecting) setAct(els.indexOf(e.target)); });
    }, { rootMargin: '-45% 0px -50% 0px' });
    els.forEach((e) => io.observe(e));
    const onIdx = (e) => { if (e.detail.index >= 0) { setAct(e.detail.index); setOn(e.detail.index > 0); } };
    const onScroll = () => { if (!op()) setOn(window.scrollY > window.innerHeight * 0.7); };
    onScroll();
    window.addEventListener('op:index', onIdx);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { io.disconnect(); window.removeEventListener('op:index', onIdx); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, []);

  const click = (e, id) => {
    if (document.documentElement.classList.contains('op')) { e.preventDefault(); window.dispatchEvent(new CustomEvent('op:goto', { detail: id })); }
  };
  if (!items.length) return null;
  return (
    <nav className={`rail${on ? ' on' : ''}`} aria-label="Sections on this page">
      <button type="button" className="rail-m" aria-label="Open menu" onClick={() => window.dispatchEvent(new CustomEvent('lx:menu'))}><i /><i /><i /></button>
      <ol>
        {items.map((it, i) => (
          <li key={it.id}><a href={`#${it.id}`} onClick={(e) => click(e, it.id)} className={i === act ? 'act' : ''}><span>{it.label}</span><i /></a></li>
        ))}
      </ol>
    </nav>
  );
}
