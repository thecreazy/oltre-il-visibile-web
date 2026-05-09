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
    gsap.fromTo(el,
      { opacity: 0, y: 40 },
      {
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
      }
    );
  });

  // line-by-line reveal
  const lineEls = root.querySelectorAll<HTMLElement>('[data-reveal-line] > span > span');
  lineEls.forEach((inner, i) => {
    const wrap = inner.parentElement?.parentElement;
    if (!wrap) return;
    gsap.fromTo(inner,
      { y: '110%' },
      {
        y: '0%',
        duration: 1.1,
        ease: 'expo.out',
        delay: i * 0.05,
        scrollTrigger: { trigger: wrap, start: 'top 90%', toggleActions: 'play none none none' },
      }
    );
  });
};

/* ── gallery image clip-path reveal ────────────────────────────── */
export const initImageReveal = (root: ParentNode = document) => {
  if (PREFERS_REDUCED()) return;
  setupGsap();

  root.querySelectorAll<HTMLElement>('.gallery-img-wrap').forEach((el, i) => {
    const delay = parseFloat(el.dataset.revealDelay ?? '0');
    gsap.fromTo(el,
      { clipPath: 'inset(0 0 100% 0)' },
      {
        clipPath: 'inset(0 0 0% 0)',
        duration: 1.5,
        ease: 'expo.out',
        delay: delay + (i % 2) * 0.1,
        scrollTrigger: {
          trigger: el,
          start: 'top 92%',
          toggleActions: 'play none none none',
        },
      }
    );
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
let _cursorAC: AbortController | null = null;

export const initCursor = () => {
  if (PREFERS_REDUCED()) return;
  if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return;

  // tear down previous instance (page transition)
  _cursorAC?.abort();
  _cursorAC = new AbortController();
  const { signal } = _cursorAC;

  document.querySelector('.cursor-dot')?.remove();
  document.querySelector('.cursor-ring')?.remove();

  const dot = document.createElement('div');
  dot.className = 'cursor-dot';
  const ring = document.createElement('div');
  ring.className = 'cursor-ring';
  document.body.appendChild(dot);
  document.body.appendChild(ring);

  let dotX = 0, dotY = 0, ringX = 0, ringY = 0, mx = 0, my = 0;
  let imageMode = false;
  let currentImageEl: Element | null = null;

  const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
  document.addEventListener('mousemove', onMove, { signal });

  const tick = () => {
    dotX += (mx - dotX) * 0.6;
    dotY += (my - dotY) * 0.6;
    dot.style.transform = `translate3d(${dotX - 3}px, ${dotY - 3}px, 0)`;
    // always lerp internal coords so release is smooth
    ringX += (mx - ringX) * 0.18;
    ringY += (my - ringY) * 0.18;
    if (!imageMode) {
      ring.style.transform = `translate3d(${ringX - 18}px, ${ringY - 18}px, 0)`;
    }
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);

  const ease = 'cubic-bezier(0.16, 1, 0.3, 1)';

  const snapToImage = (el: Element) => {
    imageMode = true;
    currentImageEl = el;
    const r = el.getBoundingClientRect();
    ring.style.transition = `width .65s ${ease}, height .65s ${ease}, transform .65s ${ease}, border-radius .65s ${ease}, opacity .4s ease`;
    ring.style.width = `${r.width}px`;
    ring.style.height = `${r.height}px`;
    ring.style.transform = `translate3d(${r.left}px, ${r.top}px, 0)`;
    ring.style.borderRadius = '0px';
    ring.style.opacity = '0.35';
  };

  const releaseFromImage = () => {
    imageMode = false;
    currentImageEl = null;
    ring.style.transition = `width .5s ${ease}, height .5s ${ease}, border-radius .5s ${ease}, opacity .3s ease`;
    ring.style.width = '36px';
    ring.style.height = '36px';
    ring.style.borderRadius = '50%';
    ring.style.opacity = '1';
    // after shape transition, clear inline styles so tick controls transform again
    setTimeout(() => { if (!imageMode) ring.style.transition = ''; }, 600);
  };

  // keep ring aligned to image on scroll
  window.addEventListener('scroll', () => {
    if (!imageMode || !currentImageEl) return;
    const r = currentImageEl.getBoundingClientRect();
    ring.style.transition = 'none';
    ring.style.transform = `translate3d(${r.left}px, ${r.top}px, 0)`;
    ring.style.width = `${r.width}px`;
    ring.style.height = `${r.height}px`;
  }, { passive: true, signal });

  const imageSel = '.gallery-img-wrap, .tilecard .frame';
  const hoverables = 'a, button, [data-magnetic], input, textarea, [role="button"]';

  document.addEventListener('mouseover', (e) => {
    const t = e.target as Element;
    const imgEl = t.closest?.(imageSel);
    if (imgEl) {
      snapToImage(imgEl);
    } else if (!imageMode && t.closest?.(hoverables)) {
      ring.classList.add('is-hover');
    }
  }, { signal });
  document.addEventListener('mouseout', (e) => {
    const t = e.target as Element;
    if (t.closest?.(imageSel)) releaseFromImage();
    if (t.closest?.(hoverables)) ring.classList.remove('is-hover');
  }, { signal });
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
    ScrollTrigger.getAll().forEach((t: ScrollTrigger) => t.kill());
    initCursor();
    initReveals();
    initImageReveal();
    initParallax();
    initMagnetic();
    initMenu();
  };
  document.addEventListener('astro:page-load', reinit);
};

/* ── boot ─────────────────────────────────────────────────────── */
export const boot = () => {
  document.documentElement.classList.add('has-js');
  setupGsap();
  initReveals();
  initImageReveal();
  initParallax();
  initMagnetic();
  initMenu();
  initCursor();
  initPageTransitions();
};

