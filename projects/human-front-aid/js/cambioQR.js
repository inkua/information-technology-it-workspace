function cambiarQR(rutaImagen){
    var imagen = document.getElementsByClassName("imagen-qr");
    imagen[0].src = rutaImagen;


    /* Efecto de scroll para la vista en Tablet */
    if (screen.width >= 481 && screen.width <= 992) {
        window.scroll(0, 450);
    }
    
}
