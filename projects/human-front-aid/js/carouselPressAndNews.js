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
      576: {
        slidesPerView: 2,
        spaceBetween: 10,
        loop: true,
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