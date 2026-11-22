/* ==========================================================
   sayyida.js - fitur tambahan CV Sayyida Nafisa
   1. easing fallback (agar scroll halus jalan tanpa internet)
   2. animasi muncul saat di-scroll (transisi halus)
   3. tahun otomatis di footer
   ========================================================== */
(function () {
  'use strict';

  // 1. Easing "easeInOutExpo" dipakai custom.js untuk scroll menu
  if (window.jQuery && !jQuery.easing.easeInOutExpo) {
    jQuery.easing.easeInOutExpo = function (x, t, b, c, d) {
      if (t === 0) return b;
      if (t === d) return b + c;
      if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
      return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    };
  }

  document.addEventListener('DOMContentLoaded', function () {
    // 2. Reveal on scroll
    var items = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && items.length) {
      document.documentElement.classList.add('reveal-ready');
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
      items.forEach(function (el) { io.observe(el); });
    }

    // 3. Tahun footer
    var y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();

  });
})();
