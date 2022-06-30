function inputAnimate() {
    let input = document.querySelector('.start__name');

    input.addEventListener('blur', function () {
        if (input.value.length > 0) {
            input.nextElementSibling.classList.add('form__label--active');
        } else {
            input.nextElementSibling.classList.remove('form__label--active')
        }
    })

}

export default inputAnimate;