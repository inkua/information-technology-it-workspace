function cambiarBotonActivo(botonID){

    //cambio de borde dorado a boton activo

    document.getElementById("icono-paypal").classList.remove("donate-active");
    document.getElementById("icono-twint").classList.remove("donate-active");
    document.getElementById("icono-zahlteil").classList.remove("donate-active");
    document.getElementById(botonID).classList.add("donate-active");
    //cambia boton de icon de blanco y negro a color

    document.getElementById("icono-paypal").classList.remove("icono-paypal-active");
    document.getElementById("icono-paypal").classList.add("icono-paypal-unactive");

    document.getElementById("icono-twint").classList.remove("icono-twint-active");
    document.getElementById("icono-twint").classList.add("icono-twint-unactive");

    document.getElementById("icono-zahlteil").classList.remove("icono-zahlteil-active");
    document.getElementById("icono-zahlteil").classList.add("icono-zahlteil-unactive");

    const removeValue = botonID +"-unactive";
    const addValue = botonID +"-active";
    document.getElementById(botonID).classList.remove(removeValue);
    document.getElementById(botonID).classList.add(addValue);
    


}