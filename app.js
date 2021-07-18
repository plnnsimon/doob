const menuBurger = document.querySelector(".menu");
if (menuBurger) {
    const navMenu = document.querySelector(".header-container");
    menuBurger.addEventListener("click", function(e) {
        menuBurger.classList.toggle('menu-active')
        document.body.classList.toggle('lock');
        navMenu.classList.toggle('active');
    })
}


const swiper = new Swiper(".swiper-container", {
    loop: true,
    slidePerView: 1,
    breakpoints: {
        
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    }
})
const swiper2 = new Swiper(".first-slider", {
    loop: true,
    slidePerView: 1,
    breakpoints: {
     
        1024: {
            slidesPerView: 1,
            spaceBetween: 50,
        }
    }
})