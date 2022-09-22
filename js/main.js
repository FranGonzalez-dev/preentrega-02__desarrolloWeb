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
    window.scrollY >= 500 ? video.pause() : video.play()
);

// Slider
let slideIndex = 0;

const showSlides = () => {
    let i;
    const slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000);
};

showSlides();


// Number
let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;
valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});





let section_counter = document.querySelector('#section_counter');
let counters = document.querySelectorAll('.counter__item .counter__number');

// Scroll Animation

const CounterObserver = new IntersectionObserver (
    (entries, observer) => {
        const [ entry ] = entries;
        if ( !entry.isIntersecting ) return;

        let speed = 200;

        counters.forEach(( counter, index ) => {
        const UpdateCounter = () => {
            const targetNumber = +counter.dataset.target;
            const initialNumber = +counter.innerText;
            const incPerCount = targetNumber / speed;

            ( initialNumber < targetNumber ) 
            ? counter.innerText = Math.ceil( initialNumber + incPerCount )
                && setTimeout( UpdateCounter, 40 )
            : counter.innerText = targetNumber
        }

        UpdateCounter();

        ( counter.parentElement.style.animation )
        ? counter.parentElement.style.animation = ''
        : counter.parentElement.style.animation = `xd ${ index / counters.length + 0.5}s`
        });

        observer.unobserve(section_counter);
    },
    {
        root: null,
        threshold: window.innerWidth > 768 ? 0.4 : 0.3,
    }
);

CounterObserver.observe(section_counter);

// Form inputs
document.querySelectorAll( ".input__text" )
.forEach( element => {
    element.addEventListener( "blur", event => {
        ( event.target.value != "" )
        ? event.target.nextElementSibling.classList.add("filled")
        : event.target.nextElementSibling.classList.remove("filled")
    });
});



