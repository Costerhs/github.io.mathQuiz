import getMode from "../command/getMode";
import putInOrder from "./putInOrder";

const showUserScore = () => {
    let users = JSON.parse(localStorage.getItem('users'));
    let mode = getMode();

    let table = document.querySelector('.score__users');
    for (let user of users) {
        let block = document.createElement('div')
        let name = document.createElement('div')
        let point = document.createElement('div')

        block.classList.add('score__item')
        name.classList.add('score__name')
        point.classList.add('score__point')
        name.textContent = user.name
        point.textContent = user.practice
        block.append(name, point)
        table.append(block)
    }
    // console.log(putInOrder(users, mode))
}

export default showUserScore;