import showUserScore from "./showUsersScore";

const toggleMode = () => {
    const modes = document.querySelectorAll('.score__radio')

    modes.forEach(elem => elem.addEventListener('click', () => {
        showUserScore(elem.id)
    }))
}

export default toggleMode