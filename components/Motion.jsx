'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Scroll reveals: IntersectionObserver adds .in, CSS does the motion. No library needed, and
// content stays visible if this never runs (the .mo class is removed by a 5s failsafe in layout).
export default function Motion() {
  const path = usePathname();
  useEffect(() => {
    window.__mo = true;
    const els = [...document.querySelectorAll('[data-rv]:not(.in)')];
    if (!('IntersectionObserver' in window)) { els.forEach((e) => e.classList.add('in')); return undefined; }
    const timers = [];
    const watch = new Map(); // observed node -> elements it releases
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => {
        if (!e.isIntersecting) return;
        (watch.get(e.target) || []).forEach((el) => {
          el.classList.add('in');
          // hand the element back to its normal CSS once the reveal is done (keeps hover transitions)
          timers.push(setTimeout(() => el.removeAttribute('data-rv'), 2600));
        });
        watch.delete(e.target);
        io.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.06 });
    els.forEach((el) => {
      // clipped elements report no visible area, so those are watched through their parent
      const clipped = ['wipe', 'curtain', 'rise'].includes(el.getAttribute('data-rv')) && el.parentElement;
      const t = clipped ? el.parentElement : el;
      if (!watch.has(t)) { watch.set(t, []); io.observe(t); }
      watch.get(t).push(el);
    });
    return () => { io.disconnect(); timers.forEach(clearTimeout); };
  }, [path]);
  return null;
}
