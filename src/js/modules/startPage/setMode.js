import getMode from "../command/getMode";

const setMode = () => {
    const modes = document.querySelectorAll('.start__radio');

    modes.forEach(el => {
        if (el.checked) {
            localStorage.setItem('mode', el.id)
        }
    })

    modes.forEach(el => {
        el.addEventListener('click', () => {
            localStorage.setItem('mode', el.id)
        })
    })
}

export default setMode;