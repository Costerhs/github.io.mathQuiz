import getMode from "../command/getMode";
import showUserScore from "./showUsersScore";

const toggleMode = () => {
    const modes = document.querySelectorAll('.score__radio')
    const actualMode = getMode();
    modes.forEach(elem => {
        if (elem.id === actualMode) elem.checked = true
        elem.addEventListener('click', () => {
            showUserScore(elem.id);
            localStorage.setItem('mode', elem.id);
        });
    })
}

export default toggleMode