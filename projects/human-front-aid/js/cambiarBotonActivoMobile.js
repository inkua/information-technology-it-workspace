function cambiarBotonActivoMobile(botonID){

    //cambio de borde dorado a boton activo

    document.getElementById("icono-paypal-mobile").classList.remove("donate-active");
    document.getElementById("icono-twint-mobile").classList.remove("donate-active");
    document.getElementById("icono-zahlteil-mobile").classList.remove("donate-active");
    document.getElementById(botonID).classList.add("donate-active");
    //cambia boton de icon de blanco y negro a color

    document.getElementById("icono-paypal-mobile").classList.remove("icono-paypal-active");
    document.getElementById("icono-paypal-mobile").classList.add("icono-paypal-unactive");

    document.getElementById("icono-twint-mobile").classList.remove("icono-twint-active");
    document.getElementById("icono-twint-mobile").classList.add("icono-twint-unactive");

    document.getElementById("icono-zahlteil-mobile").classList.remove("icono-zahlteil-active");
    document.getElementById("icono-zahlteil-mobile").classList.add("icono-zahlteil-unactive");

    const removeValue = botonID[0,-6]+"unactive"
    const addValue = botonID[0,-6] +"active";
    document.getElementById(botonID).classList.remove(removeValue);
    document.getElementById(botonID).classList.add(addValue);
    


}