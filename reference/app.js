// Before/after slider
const r = document.getElementById('baRange');
if (r) {
  const bf = document.getElementById('baBefore'), hd = document.getElementById('baHandle');
  const sync = v => { bf.style.clipPath = 'inset(0 ' + (100 - v) + '% 0 0)'; hd.style.left = v + '%'; };
  r.addEventListener('input', e => sync(e.target.value));
  sync(50);
}

// Reveal on scroll + animated counters
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
      e.target.querySelectorAll('[data-to]').forEach(n => {
        const to = +n.dataset.to; let st = performance.now(), dur = 1100;
        const tick = t => {
          let p = Math.min((t - st) / dur, 1);
          n.textContent = Math.round(to * (1 - Math.pow(1 - p, 3)));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
    }
  });
}, { threshold: .15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Mobile menu
const burger = document.querySelector('.burger'), links = document.querySelector('.nav-links');
if (burger && links) {
  burger.addEventListener('click', () => {
    const open = links.style.display === 'flex';
    links.style.cssText = open ? '' : 'display:flex;position:absolute;flex-direction:column;top:78px;left:0;right:0;background:#fff;padding:22px 26px;gap:18px;border-bottom:1px solid var(--line)';
    burger.setAttribute('aria-expanded', !open);
  });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    if (window.innerWidth <= 920) { links.style.cssText = ''; burger.setAttribute('aria-expanded', 'false'); }
  }));
}
