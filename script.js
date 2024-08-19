
// Initialize AOS
AOS.init();

// stikcy navbar
window.addEventListener("scroll", function(){
    var header = document.querySelector("nav");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// toggle button
$(document).ready(() => {
    $(".menuOpen").click(() => {
        $(".menu-wrapper").addClass("active")
    }) 
    
     $(".menuClosed").click(() => {
        $(".menu-wrapper").removeClass("active")
     })
});

// pagination
var swiper = new Swiper(".mySwiperHome", {
      pagination: {
        slidesPerView : "auto",
        centeredSlides : true,
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
      autoplay : {
          delay : 2000
      }
});

// navigation 
var swiper = new Swiper(".mySwiperProduct", {
      slidesPerView: "auto",
      navigation: {
        nextEl: ".bx-chevron-right-circle",
        prevEl: ".bx-chevron-left-circle",
      },
});

// Active
$(document).ready(function() {
    $('.link').click(function(){
        $('.link').removeClass('active')
        $(this).addClass('active')
    })
});

// Typing JS
var typed = new Typed('.text-animation', {
    strings: ['Gurih.', 'Berasa.', 'Asli.'],
    typeSpeed: 150,
    backSpeed: 70,
    loop: true,
});

// Count item
let valueDisplay = document.querySelectorAll(".num");
let interval = 5000;

valueDisplay.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute
    ("data-val"));
    let duration = Math.floor(interval /  endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue; 
        if (startValue == endValue ) {
            clearInterval(counter);
        }
    }, duration);
});
