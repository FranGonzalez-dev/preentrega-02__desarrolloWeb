// Cambiar navbar en scrollY
const nav = document.getElementById("navbar");
window.addEventListener("scroll", () =>
    window.scrollY >= 50
        ? nav.classList.add("active-nav")
        : nav.classList.remove("active-nav")
);

// Pausar video en scrollY
const video = document.getElementById("video");
window.addEventListener("scroll", () =>
    window.scrollY >= 250 ? video.pause() : video.play()
);

// Form inputs
document.querySelectorAll( ".input__text" )
.forEach( element => {
    element.addEventListener( "blur", event => {
        ( event.target.value != "" )
        ? event.target.nextElementSibling.classList.add("filled")
        : event.target.nextElementSibling.classList.remove("filled")
    });
});