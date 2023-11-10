/* CAROUSEL SUPPORTERS SECTION */

var swiper = new Swiper(".swiperSupporters", {


    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 2000,
    },
    speed: 900,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      481: {
        slidesPerView: 1.5,
        spaceBetween: 10,
      },
      620: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      993: {
        slidesPerView: 3,
        spaceBetween: 15,
      }
    },
  });