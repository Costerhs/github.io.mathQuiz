function validationName(name, errorText) {
    if (name.value <= 0) {
        errorText.textContent = '* это поле обязательно';
        return false
    } else {
        errorText.textContent = '';
        return true
    }
}

function validation() {
    const nickname = document.querySelector('.start__name');
    const errorTextName = document.querySelector('.errorText');
    const btnStart = document.querySelector('.start__a');

    btnStart?.addEventListener('click', () => {
        if (validationName(nickname, errorTextName)) {
            btnStart.href = 'game.html'
        }
    })
}



export default validation