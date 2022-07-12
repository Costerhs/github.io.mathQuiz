import getAllUsers from "./getAllUsers";
import getMode from "./getMode";

const isExistLocalStorage = () => {
    if (getAllUsers() === null) {
        localStorage.setItem('users', JSON.stringify([]))
    }
    if (getMode() === null) {
        localStorage.setItem('mode', 'timeAttack')
    }
}

export default isExistLocalStorage;