function getUser() {
    const users = JSON.parse(localStorage.getItem('users'))
    const name = localStorage.getItem('activeUser')

    return users.find(el => el.name === name) ?? {
        name: name,
        point: 0
    }
}

export default getUser;