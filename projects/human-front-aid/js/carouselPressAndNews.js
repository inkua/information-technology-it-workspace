/*CAROUSEL PRESS AND NEWS */

var swiper = new Swiper(".swiperPressAndNews", {


    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      950: {
        slidesPerView: 3,
        spaceBetween: 10,
        grid: {
          rows: 2,
        },
      }
    },
  });