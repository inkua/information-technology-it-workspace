$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 0) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
});

// Section carousel
var mySwiper = new Swiper('.mySwiper', {
    initialSlide: 1, // iniciar en el segundo slide
    });
