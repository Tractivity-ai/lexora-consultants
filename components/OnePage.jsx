'use client';
import { useEffect } from 'react';

// One-page panel scroll (desktop): each wheel tick, key press or swipe moves exactly one full-screen panel,
// like khaitanco.com. Below 900px wide, on short screens, or with reduced motion, the page scrolls normally.
export default function OnePage() {
  useEffect(() => {
    const root = document.documentElement;
    const wrap = document.querySelector('.op-wrap');
    const track = document.querySelector('.op-track');
    if (!wrap || !track) return undefined;
    const panels = [...track.children];
    let on = false, stops = [], cur = 0, busyUntil = 0, lastWheel = 0, prevMag = 0, ty0 = null;

    const wanted = () => window.innerWidth >= 900 && window.innerHeight >= 520 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const build = () => {
      const vh = window.innerHeight; stops = [];
      panels.forEach((p, i) => {
        stops.push({ y: p.offsetTop, i });
        if (p.offsetHeight > vh + 6) stops.push({ y: p.offsetTop + p.offsetHeight - vh, i });
      });
    };
    const announce = () => {
      const s = stops[cur];
      panels.forEach((p, i) => p.classList.toggle('active', i === s.i));
      window.dispatchEvent(new CustomEvent('op:index', { detail: { index: s.i, step: cur, total: stops.length } }));
    };
    const go = (n, instant) => {
      if (!on) return;
      cur = Math.max(0, Math.min(stops.length - 1, n));
      if (instant) track.style.transition = 'none';
      track.style.transform = `translate3d(0,${-stops[cur].y}px,0)`;
      if (instant) { void track.offsetHeight; track.style.transition = ''; }
      busyUntil = performance.now() + 1050;
      announce();
    };
    const goId = (id) => { const i = panels.findIndex((p) => p.id === id); if (i < 0) return; const n = stops.findIndex((s) => s.i === i); go(n); };
    const blocked = () => root.classList.contains('lock') || document.querySelector('.dsc');

    const onWheel = (e) => {
      if (!on || blocked()) return;
      e.preventDefault();
      const now = performance.now(), mag = Math.abs(e.deltaY);
      const inertia = now - lastWheel < 90 && mag <= prevMag;
      lastWheel = now; prevMag = mag;
      if (now < busyUntil || inertia || mag < 4) return;
      go(cur + (e.deltaY > 0 ? 1 : -1));
    };
    const onKey = (e) => {
      if (!on || blocked()) return;
      const t = e.target;
      if (t && /^(INPUT|TEXTAREA|SELECT|BUTTON)$/.test(t.tagName) && e.key !== 'PageDown' && e.key !== 'PageUp') return;
      const k = e.key; let d = 0, to = null;
      if (k === 'ArrowDown' || k === 'PageDown' || (k === ' ' && !e.shiftKey)) d = 1;
      else if (k === 'ArrowUp' || k === 'PageUp' || (k === ' ' && e.shiftKey)) d = -1;
      else if (k === 'Home') to = 0; else if (k === 'End') to = stops.length - 1; else return;
      e.preventDefault();
      if (performance.now() < busyUntil) return;
      go(to !== null ? to : cur + d);
    };
    const onTS = (e) => { ty0 = e.touches[0].clientY; };
    const onTE = (e) => {
      if (!on || ty0 === null || blocked() || performance.now() < busyUntil) return;
      const dy = ty0 - e.changedTouches[0].clientY; ty0 = null;
      if (Math.abs(dy) > 50) go(cur + (dy > 0 ? 1 : -1));
    };
    const onGoto = (e) => goId(e.detail);
    const onFocus = (e) => { if (!on) return; const i = panels.findIndex((p) => p.contains(e.target)); if (i >= 0 && stops[cur].i !== i) go(stops.findIndex((s) => s.i === i), true); };
    const resetScroll = () => { wrap.scrollTop = 0; wrap.scrollLeft = 0; };

    const apply = () => {
      const w = wanted();
      if (w && !on) { on = true; root.classList.add('op'); build(); window.scrollTo(0, 0); go(Math.min(cur, stops.length - 1), true); }
      else if (!w && on) { on = false; root.classList.remove('op'); track.style.transform = ''; panels.forEach((p) => p.classList.remove('active')); window.dispatchEvent(new CustomEvent('op:index', { detail: { index: -1 } })); }
      else if (on) { const cp = stops[cur].i; build(); const n = stops.findIndex((s) => s.i === cp); go(n < 0 ? 0 : n, true); }
    };
    apply();
    const h = location.hash.slice(1); if (h && on) goId(h);
    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('keydown', onKey);
    window.addEventListener('touchstart', onTS, { passive: true });
    window.addEventListener('touchend', onTE, { passive: true });
    window.addEventListener('resize', apply);
    window.addEventListener('op:goto', onGoto);
    document.addEventListener('focusin', onFocus);
    wrap.addEventListener('scroll', resetScroll);
    return () => {
      window.removeEventListener('wheel', onWheel); window.removeEventListener('keydown', onKey);
      window.removeEventListener('touchstart', onTS); window.removeEventListener('touchend', onTE);
      window.removeEventListener('resize', apply); window.removeEventListener('op:goto', onGoto);
      document.removeEventListener('focusin', onFocus); wrap.removeEventListener('scroll', resetScroll);
      root.classList.remove('op'); track.style.transform = '';
    };
  }, []);
  return null;
}
