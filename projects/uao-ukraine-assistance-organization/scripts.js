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

    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        initialSlide: 2,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });
});
