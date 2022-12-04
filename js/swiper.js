new Swiper('.swiper', {

    direction: 'horizontal',
    loop: false,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },

    simulateTouch: false,

    mousewheel: {
        sensitivity: 1,
    },

    // slidesPerView: 'auto',
    watchOverflow: true,

    spaceBetween: 17,

    freeMode: true,

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 'auto',
            pagination: {
                el: '.pagination',
                clickable: false,
            },
        },
    },

});