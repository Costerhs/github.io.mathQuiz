import putInOrder from "./putInOrder";

const showUserScore = (mode) => {
    let users = JSON.parse(localStorage.getItem('users'));
    let usersInOrder = putInOrder(users, mode || 'timeAttack')

    let table = document.querySelector('.score__users');
    table.textContent = ''

    for (let user of usersInOrder) {
        let block = document.createElement('div')
        let name = document.createElement('div')
        let point = document.createElement('div')

        block.classList.add('score__item')
        name.classList.add('score__name')
        point.classList.add('score__point')

        name.textContent = user.name
        point.textContent = user[mode || 'timeAttack']

        block.append(name, point)
        table.append(block)
    }

}

export default showUserScore;