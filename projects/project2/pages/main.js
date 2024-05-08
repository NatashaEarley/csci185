document.addEventListener('DOMContentLoaded', function () {
    var swiper1 = new Swiper(".mySwiper", { 
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination", 
        },
        loop: true 
    });

    var swiper2 = new Swiper(".mySwiper2", { 
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination2", 
            type: "progressbar",
        },
        loop: true 
    })
    var swiper3 = new Swiper(".swiper-slide3", {

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
});