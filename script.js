(function () {
  'use strict';

  var slides = document.querySelectorAll('.hero-slide');
  if (slides.length === 0) return;

  var current = 0;
  var interval = 5000; // 5秒ごとに切り替え

  function showSlide(index) {
    slides.forEach(function (slide) { slide.classList.remove('is-active'); });
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('is-active');
  }

  function next() {
    showSlide(current + 1);
  }

  showSlide(0);
  setInterval(next, interval);
})();
