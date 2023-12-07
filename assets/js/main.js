var swiperOptions = {
  freeMode: true,
  pagination: {
    el: ".swiper-pagination1",
    type: "progressbar",
  },
  mousewheel: true,
};

if (window.innerWidth >= 1024 && window.innerWidth < 1280) {
  swiperOptions.slidesPerView = 2;
} else if (window.innerWidth >= 1280) {
  swiperOptions.slidesPerView = 2.5;
}

var swiper = new Swiper(".mySwiper", swiperOptions);

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


