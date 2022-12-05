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


const phoneDiv = document.querySelector('.popup__form-tel')
const phoneInputField = document.querySelector("#popup-tel");
const phoneInput = window.intlTelInput(phoneInputField, {
    preferredCountries: ["ua", "pl"],
    utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});


const requestInput = document.querySelectorAll('.req')
const submitBtn = document.querySelector('.popup__btn-sale')

function addErr(input) {
    input.classList.add('error')
}

submitBtn.addEventListener('click', function () {
    for (let i = 0; i < requestInput.length; i++) {
        let input = requestInput[i].querySelector('input')
        if(!input.value) {
            addErr(requestInput[i])
            submitBtn.setAttribute('disabled', false)
        }
    }
})

function changedInput() {
    for (let i = 0; i < requestInput.length; i++) {
        let input = requestInput[i].querySelector('input')
        input.addEventListener('input', function () {
            requestInput[i].classList.remove('error')
            submitBtn.removeAttribute('disabled')
        })
    }
}

changedInput()


