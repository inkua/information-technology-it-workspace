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

$(document).ready(function(){
    setTimeout(() => {
        $('#variante').text('Happy life.');
    }, 3000);
    setTimeout(() => {
        $('#variante').text('Good Action.');
    }, 6000);
    setTimeout(() => {
        $('#variante').text('Difference.');
    }, 9000);
});


$(document).ready(function () {
    $("#color_mode").on("change", function () {
        colorModePreview(this);
    });
});

function colorModePreview(ele) {
    if ($(ele).prop("checked") == true) {
        $("body").addClass("dark-preview");
        $("body").removeClass("white-preview");
    } else if ($(ele).prop("checked") == false) {
        $("body").addClass("white-preview");
        $("body").removeClass("dark-preview");
    }
}

const navbarLinks = document.querySelectorAll(".navbar .menu li a");

navbarLinks.forEach((link) => {
    link.addEventListener("click", function () {
        navbarLinks.forEach((link) => {
            link.classList.remove("active");
        });

        this.classList.add("active");
    });
});
