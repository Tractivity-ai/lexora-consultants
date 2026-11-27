'use client';
import { useEffect } from 'react';
// Cursor-follow light on cards marked data-fx (desktop pointers only).
export default function Fx() {
  useEffect(() => {
    if (!window.matchMedia('(hover:hover)').matches) return undefined;
    const move = (e) => {
      const t = e.target.closest && e.target.closest('[data-fx]');
      if (!t) return;
      const r = t.getBoundingClientRect();
      t.style.setProperty('--mx', `${e.clientX - r.left}px`);
      t.style.setProperty('--my', `${e.clientY - r.top}px`);
    };
    document.addEventListener('pointermove', move, { passive: true });
    return () => document.removeEventListener('pointermove', move);
  }, []);
  return null;
}
