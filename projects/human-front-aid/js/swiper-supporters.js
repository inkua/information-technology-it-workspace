// Obtener el tamaño de la pantalla al cargar la página
var screenSize = window.innerWidth;

// Función para modificar el comportamiento del script según el tamaño de la pantalla
function modificarScriptSegunTamaño() {
if (screenSize <= 480) {
    var swiper = new Swiper(".swiperSupporters", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    });
} else if (screenSize >= 481 && screenSize <= 992){
    var swiper = new Swiper(".swiperSupporters", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    });
}else {
    var swiper = new Swiper(".swiperSupporters", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    });
}
}

// Llamar a la función inicialmente
modificarScriptSegunTamaño();

// Llamar a la función cuando se redimensione la ventana
window.addEventListener('resize', function() {
screenSize = window.innerWidth;
modificarScriptSegunTamaño();
});