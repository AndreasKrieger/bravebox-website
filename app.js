// BRAVE Box Website — minimales Interaktions-Skript (keine Cookies, kein Tracking).
// Regel: nur textContent/createElement, keine URL-Daten ins DOM,
// kein Gebrauch von inner-HTML (auch nicht in zukuenftigen Aenderungen).
(function () {
  'use strict';

  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav-links');
  if (toggle && nav) {
    var labels = document.documentElement.lang === 'en'
      ? ['Open navigation', 'Close navigation']
      : ['Navigation öffnen', 'Navigation schließen'];
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? labels[1] : labels[0]);
    });
  }

  // Footer-Jahr ohne Datums-Logik im Markup.
  var year = document.querySelector('[data-year]');
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
})();
