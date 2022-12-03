const burgerContent = document.querySelector('.header')
const burgerLine = document.querySelector('.header__line')

burgerLine.addEventListener('click', function () {
    burgerContent.classList.toggle('active')
})