function cambiarBotonActivo(botonID){

    document.getElementById("icono-paypal").classList.remove("donate-active");
    document.getElementById("icono-twint").classList.remove("donate-active");
    document.getElementById("icono-zahlteil").classList.remove("donate-active");
    document.getElementById(botonID).classList.add("donate-active")
  
}