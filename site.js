const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#site-navigation');

toggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});

nav?.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    nav.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  }
});

document.querySelectorAll('.news p').forEach((item) => {
  const match = item.textContent.trim().match(/^NEW \(([^)]+)\):\s*/);
  if (!match) return;
  item.dataset.date = match[1];
  const firstNode = item.firstChild;
  if (firstNode?.nodeType === Node.TEXT_NODE) {
    firstNode.textContent = firstNode.textContent.replace(/^NEW \([^)]+\):\s*/, '');
  }
});

document.querySelector('#current-year').textContent = new Date().getFullYear();

document.querySelectorAll('a[target="_blank"]').forEach((link) => {
  link.rel = 'noopener noreferrer';
});

const sections = [...document.querySelectorAll('h1[id], h2[id]')];
const links = [...document.querySelectorAll('#site-navigation a')];
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    links.forEach((link) => link.classList.toggle('active', link.hash === `#${entry.target.id}`));
  });
}, { rootMargin: '-20% 0px -70%' });
sections.forEach((section) => observer.observe(section));
