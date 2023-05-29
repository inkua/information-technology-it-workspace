/*CAROUSEL PRESS AND NEWS */

const carouselPress = document.querySelector('.carousel-div');
const imagenes = document.querySelectorAll(".imgCarousel");
const punto = document.querySelectorAll('.punto')
const contenedor = document.querySelector('.contenedor-img')

let currentIndex = 0;

console.log("carousel ",carouselPress)
console.log("slide",imagenes.length)
console.log("punto ",punto)


punto.forEach( ( cadaPunto , i )=> {
    // Asignamos un clic a cadaPunto
    punto[i].addEventListener('click',()=>{
        
        // Guardar la posición de ese punto
        let posicion  = i
        // Calculando el espacio que debe desplazarse el contenedor
        let operacion = posicion * -10

        // movemos el contenedor
        contenedor.style.transform = `translateX(${ operacion }%)`


        // Recorremos todos los punto
        punto.forEach( ( cadaPunto , i )=>{
            // Quitamos la clase activo a todos los puntos
            punto[i].classList.remove('activo')
            imagenes[i].classList.remove('activo')
        })
        // Añadir la clase activo en el punto y en la imagen que hemos hecho clic
        punto[i].classList.add('activo')
        imagenes[i].classList.add('activo')

    })
})



  