/*CAROUSEL PRESS AND NEWS */

var swiper = new Swiper(".swiperPressAndNews", {


    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 4000,
    },
    speed: 900,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        grid: {
          rows: 1,
        },
      },
      481: {
        slidesPerView: 2,
        spaceBetween: 10,
        loop: true,
      },
      993: {
        slidesPerView: 3,
        spaceBetween: 15,
        grid: {
          rows: 2,
        },
      },
      1600: {
        slidesPerView: 4,
        spaceBetween: 20,
        grid: {
          rows: 2,
        },
      }
    },
  });