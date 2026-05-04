/**
 * GSAP-based scroll animations + page transition + magnetic + cursor.
 * All effects gated on prefers-reduced-motion. Idempotent — can be re-called
 * after Astro view transitions.
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const PREFERS_REDUCED = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let registered = false;

export const setupGsap = () => {
  if (registered) return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
};

/* ── reveal: opacity + translateY on viewport entry ─────────────── */
export const initReveals = (root: ParentNode = document) => {
  if (PREFERS_REDUCED()) return;
  setupGsap();

  const els = root.querySelectorAll<HTMLElement>('[data-reveal]');
  els.forEach((el) => {
    const delay = parseFloat(el.dataset.revealDelay ?? '0');
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 1.1,
      ease: 'expo.out',
      delay,
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
    });
  });

  // line-by-line reveal
  const lineEls = root.querySelectorAll<HTMLElement>('[data-reveal-line] > span > span');
  lineEls.forEach((inner, i) => {
    const wrap = inner.parentElement?.parentElement;
    if (!wrap) return;
    gsap.to(inner, {
      y: '0%',
      duration: 1.1,
      ease: 'expo.out',
      delay: i * 0.05,
      scrollTrigger: { trigger: wrap, start: 'top 90%', toggleActions: 'play none none none' },
    });
  });
};

/* ── parallax images ────────────────────────────────────────────── */
export const initParallax = (root: ParentNode = document) => {
  if (PREFERS_REDUCED()) return;
  setupGsap();

  root.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
    const depth = parseFloat(el.dataset.parallax ?? '0.2');
    gsap.fromTo(
      el,
      { yPercent: -depth * 50 },
      {
        yPercent: depth * 50,
        ease: 'none',
        scrollTrigger: {
          trigger: el.parentElement ?? el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  });
};

/* ── magnetic buttons ───────────────────────────────────────────── */
export const initMagnetic = (root: ParentNode = document) => {
  if (PREFERS_REDUCED()) return;

  const bound = new WeakSet<HTMLElement>();
  root.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
    if (bound.has(el)) return;
    bound.add(el);

    const strength = parseFloat(el.dataset.magnetic || '0.35');
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    };
    const onLeave = () => {
      el.style.transition = 'transform .6s cubic-bezier(0.16, 1, 0.3, 1)';
      el.style.transform = '';
      window.setTimeout(() => (el.style.transition = ''), 700);
    };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
  });
};

/* ── custom cursor ─────────────────────────────────────────────── */
export const initCursor = () => {
  if (PREFERS_REDUCED()) return;
  if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return;
  if (document.querySelector('.cursor-dot')) return;

  const dot = document.createElement('div');
  dot.className = 'cursor-dot';
  const ring = document.createElement('div');
  ring.className = 'cursor-ring';
  document.body.appendChild(dot);
  document.body.appendChild(ring);

  let dotX = 0, dotY = 0, ringX = 0, ringY = 0, mx = 0, my = 0;
  const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
  document.addEventListener('mousemove', onMove);

  const tick = () => {
    dotX += (mx - dotX) * 0.6;
    dotY += (my - dotY) * 0.6;
    ringX += (mx - ringX) * 0.18;
    ringY += (my - ringY) * 0.18;
    dot.style.transform = `translate3d(${dotX - 3}px, ${dotY - 3}px, 0)`;
    ring.style.transform = `translate3d(${ringX - 18}px, ${ringY - 18}px, 0)`;
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);

  const hoverables = 'a, button, [data-magnetic], input, textarea, [role="button"]';
  document.addEventListener('mouseover', (e) => {
    const t = e.target as Element;
    if (t.closest && t.closest(hoverables)) ring.classList.add('is-hover');
  });
  document.addEventListener('mouseout', (e) => {
    const t = e.target as Element;
    if (t.closest && t.closest(hoverables)) ring.classList.remove('is-hover');
  });
};

/* ── menu overlay ──────────────────────────────────────────────── */
export const initMenu = () => {
  const trigger = document.querySelector<HTMLButtonElement>('[data-menu-trigger]');
  const overlay = document.querySelector<HTMLElement>('[data-menu-overlay]');
  const closeBtn = document.querySelector<HTMLButtonElement>('[data-menu-close]');
  if (!trigger || !overlay || trigger.dataset.menuBound) return;
  trigger.dataset.menuBound = '1';

  const setOpen = (v: boolean) => {
    overlay.classList.toggle('is-open', v);
    trigger.setAttribute('aria-expanded', String(v));
    document.documentElement.style.overflow = v ? 'hidden' : '';
  };
  trigger.addEventListener('click', () => setOpen(!overlay.classList.contains('is-open')));
  closeBtn?.addEventListener('click', () => setOpen(false));

  // close on link click + on Escape
  overlay.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
};

/* ── page transition (Astro view transitions) ─────────────────── */
export const initPageTransitions = () => {
  // The view-transitions API + CSS already does the visual choreography.
  // We just need to re-init effects after each navigation.
  const reinit = () => {
    initReveals();
    initParallax();
    initMagnetic();
    initMenu();
    if (window.ScrollTrigger?.refresh) window.ScrollTrigger.refresh();
  };
  document.addEventListener('astro:page-load', reinit);
};

/* ── boot ─────────────────────────────────────────────────────── */
export const boot = () => {
  document.documentElement.classList.add('has-js');
  setupGsap();
  initReveals();
  initParallax();
  initMagnetic();
  initMenu();
  initCursor();
  initPageTransitions();
};

declare global {
  interface Window {
    ScrollTrigger?: { refresh: () => void };
  }
}
