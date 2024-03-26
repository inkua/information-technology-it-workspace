window.addEventListener("load", programa);

function programa(){
    const btns = document.getElementById("idTestimonialsBtns").children;

    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", (e)=> {
            e.preventDefault();
            for (let i = 0; i < btns.length; i++) {
                btns[i].classList.remove("active")
            }

            btns[i].classList.add("active")
        });
    }
}