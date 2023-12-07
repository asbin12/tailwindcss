// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 2.5,
//   freeMode: true,
//   pagination: {
//     el: ".swiper-pagination1",
//     type: "progressbar",
//   },
//   mousewheel: true,
// });

// var swiper = new Swiper(".mySecondSwiper", {
//   spaceBetween: 30,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   // mousewheel: true,
// });

// var swiper = new Swiper(".myTestimonialSwiper", {
//   cssMode: true,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   mousewheel: true,
//   keyboard: true,
// });

// const navLinks = document.querySelector(".nav-links");
// function onToggleMenu(e) {
//   e.name = e.name === "menu" ? "close" : "menu";
//   navLinks.classList.toggle("top-[100%]");
//   // console.log(e.name);
// }
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

const navLinks = document.querySelector(".nav-links");
function onToggleMenu(e) {
  e.name = e.name === "menu" ? "close" : "menu";
  navLinks.classList.toggle("top-[100%]");
  // console.log(e.name);
}
