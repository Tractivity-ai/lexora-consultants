'use client';
import { useEffect, useState } from 'react';

// Chapter rail (desktop only): shows where you are on the home page. Plain anchors, native scrolling.
export default function Rail() {
  const [items, setItems] = useState([]);
  const [act, setAct] = useState(0);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const els = [...document.querySelectorAll('[data-ch]')];
    setItems(els.map((e) => ({ id: e.id, label: e.getAttribute('data-ch') })));
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) setAct(els.indexOf(e.target)); });
    }, { rootMargin: '-45% 0px -50% 0px' });
    els.forEach((e) => io.observe(e));
    const onScroll = () => setOn(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { io.disconnect(); window.removeEventListener('scroll', onScroll); };
  }, []);

  if (!items.length) return null;
  return (
    <nav className={`rail${on ? ' on' : ''}`} aria-label="Sections on this page">
      <ol>
        {items.map((it, i) => (
          <li key={it.id}><a href={`#${it.id}`} className={i === act ? 'act' : ''}><span>{it.label}</span><i /></a></li>
        ))}
      </ol>
    </nav>
  );
}
