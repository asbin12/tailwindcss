var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2.5,
  // spaceBetween: 30,
  freeMode: true,
  // centeredSlides: true,
  pagination: {
    el: ".swiper-pagination1",
    clickable: true,
  },
  mousewheel: true,
});

var swiper = new Swiper(".mySecondSwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // mousewheel: true,
});

var swiper = new Swiper(".myTestimonialSwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  mousewheel: true,
  keyboard: true,
});
