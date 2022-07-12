import putInOrder from "./putInOrder";
import getMode from '../command/getMode'
import getAllUsers from "../command/getAllUsers";
const showUserScore = (mode) => {
    let users = getAllUsers();
    let actualMode = getMode();

    let usersInOrder = putInOrder(users, mode || actualMode)

    let table = document.querySelector('.score__users');
    if (table) {
        table.textContent = ''

        for (let user of usersInOrder) {
            let block = document.createElement('div')
            let name = document.createElement('div')
            let point = document.createElement('div')

            block.classList.add('score__item')
            name.classList.add('score__name')
            point.classList.add('score__point')

            name.textContent = user.name
            point.textContent = user[mode || actualMode]

            block.append(name, point)
            table.append(block)
        }
    }
}

export default showUserScore;