/*CAROUSEL PRESS AND NEWS */

var swiper = new Swiper(".swiperPressAndNews", {


    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      480: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      993: {
        slidesPerView: 3,
        spaceBetween: 10,
        grid: {
          rows: 2,
        },
      }
    },
  });