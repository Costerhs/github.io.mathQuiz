const setMode = () => {
    const modes = document.querySelectorAll('.start__radio');

    modes.forEach(el => {
        el.addEventListener('click', () => {
            localStorage.setItem('mode', el.id)
        })
    })
}

export default setMode;