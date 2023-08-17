let menuHamburguesa = document.querySelector(".nav__logo")

menuHamburguesa.addEventListener("click", ()=>{
    let menu = document.querySelector(".main__links");

    menu.classList.toggle("list--show")
})