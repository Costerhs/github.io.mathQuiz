function getUser() {
    const users = JSON.parse(localStorage.getItem('users'))
    const name = localStorage.getItem('activeUser')

    return users.find(el => el.name === name) ?? {
        name: name,
        practice: 0,
        timeAttack: 0
    }
}

export default getUser;