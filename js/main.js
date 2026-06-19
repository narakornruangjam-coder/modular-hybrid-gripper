// Language toggle (EN <-> TH). Elements carry a data-th attribute holding the
// Thai version; the original English is captured into data-en on first apply.
function applyLang(lang) {
  document.querySelectorAll('[data-th]').forEach(function (el) {
    if (el.getAttribute('data-en') === null) {
      el.setAttribute('data-en', el.innerHTML);
    }
    el.innerHTML = (lang === 'th') ? el.getAttribute('data-th') : el.getAttribute('data-en');
  });
  document.documentElement.setAttribute('lang', lang);
  document.querySelectorAll('.lang-opt').forEach(function (opt) {
    var on = opt.getAttribute('data-lang') === lang;
    opt.classList.toggle('active', on);
    opt.setAttribute('aria-pressed', on ? 'true' : 'false');
  });
  try { localStorage.setItem('lang', lang); } catch (e) {}
}

function getLang() {
  try { return localStorage.getItem('lang') || 'en'; } catch (e) { return 'en'; }
}

// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  // Apply the saved language and wire the toggle button
  applyLang(getLang());
  document.querySelectorAll('.lang-opt').forEach(function (opt) {
    opt.addEventListener('click', function () {
      applyLang(opt.getAttribute('data-lang'));
    });
  });

  var btn = document.querySelector('.nav-menu-btn');
  var links = document.querySelector('.nav-links');
  if (btn && links) {
    btn.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Frosted nav: intensify background/blur once scrolled off the top
  var nav = document.querySelector('.nav');
  if (nav) {
    var onScroll = function () {
      nav.classList.toggle('scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Mark active nav link
  var path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // Intersection observer — reveal .fade-up elements on scroll
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('[data-reveal]').forEach(function (el) { io.observe(el); });
});
