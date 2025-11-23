export function initScrollAnimations() {
  if (typeof window === 'undefined') return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        (e.target as HTMLElement).classList.add('in-view');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('[data-anim]').forEach(el => obs.observe(el));
}
