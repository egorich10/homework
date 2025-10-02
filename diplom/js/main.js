// слайдер в хиро
new Swiper('.hero__swiper', {
    // Optional parameters
    direction: 'vertical',

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

});

// слайдер в секции
new Swiper('.top-sellers__swiper', {
    direction: 'horizontal',
    slidesPerView: 4,
    spaceBetween: 70,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Бегущая строка
const ticker = document.querySelector('.marquee__content');
let x = 0;

function move() {
    x -= 1; // скорость
    if (Math.abs(x) >= ticker.scrollWidth / 2) {
        x = 0; // как только половина уехала, сбрасываем
    }
    ticker.style.transform = `translateX(${x}px)`;
    requestAnimationFrame(move);
}

move();
