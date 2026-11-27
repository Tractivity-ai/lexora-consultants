'use client';
import { useEffect } from 'react';

// Scrubbed effects only: hero parallax and the pinned philosophy sequence. GSAP loads on the home page only.
export default function HomeMotion() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    let ctx; let dead = false;
    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([import('gsap'), import('gsap/ScrollTrigger')]);
      if (dead) return;
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        const mm = gsap.matchMedia();
        mm.add('(min-width: 0px)', () => {
          const hero = document.querySelector('.hero');
          if (!hero) return;
          gsap.to('.hero-art .room', { yPercent: 9, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true } });
          gsap.to('.hero-copy', { y: -36, opacity: 0.25, ease: 'none', scrollTrigger: { trigger: hero, start: '30% top', end: 'bottom top', scrub: true } });
        });
        mm.add('(min-width: 900px)', () => {
          const sec = document.querySelector('.phb');
          const items = gsap.utils.toArray('.phb-list li');
          if (!sec || !items.length) return;
          if (sec.offsetHeight > window.innerHeight - 24) return; // too tall to pin safely
          sec.classList.add('phb-steps');
          const tl = gsap.timeline({ scrollTrigger: { trigger: sec, start: 'top top', end: `+=${items.length * 55}%`, pin: true, scrub: 0.6, anticipatePin: 1 } });
          items.forEach((li, i) => {
            tl.to(li, { opacity: 1, duration: 1, ease: 'none' }, i);
            if (i > 0) tl.to(items[i - 1], { opacity: 0.38, duration: 0.6, ease: 'none' }, i + 0.3);
          });
          tl.to('.phb-art', { y: -18, ease: 'none', duration: items.length }, 0);
          return () => sec.classList.remove('phb-steps');
        });
      });
    })();
    return () => { dead = true; if (ctx) ctx.revert(); };
  }, []);
  return null;
}
