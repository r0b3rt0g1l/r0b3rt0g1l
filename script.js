(function () {
  'use strict';

  var links = document.querySelectorAll('.link-btn');

  links.forEach(function (link) {
    link.addEventListener('mouseenter', function () {
      link.style.willChange = 'transform, box-shadow';
    });

    link.addEventListener('mouseleave', function () {
      link.style.willChange = 'auto';
    });
  });

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('[style*="animation"], .label, .name, .sub, .links, .footer').forEach(function (el) {
      el.style.animation = 'none';
      el.style.opacity = '1';
    });
  }
})();
