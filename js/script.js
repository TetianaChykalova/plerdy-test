const burgerContent = document.querySelector('.header')
const burgerLine = document.querySelector('.header__line')

burgerLine.addEventListener('click', function () {
    burgerContent.classList.toggle('active');
    document.body.classList.toggle('overflow');
})

document.querySelector('.swiper-button-prev').addEventListener('click', function () {
    console.log('click')
})


