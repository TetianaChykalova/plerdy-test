const popup = document.querySelector('#popup')
const popupBtn = document.querySelectorAll('.popup-btn')
const popupClose = document.querySelector('#popup-close')

popupBtn.forEach(btn => btn.addEventListener('click', function () {
    popup.classList.add('open')
    document.body.classList.add('overflow')
}))

popupClose.addEventListener('click', function () {
    popup.classList.remove('open')
    document.body.classList.remove('overflow')
})