import isExist from "./isExist.js";

function setData(activeUser) {
    let users = JSON.parse(localStorage.getItem('users'))
    if (!isExist(activeUser.name, users)) {
        users = [...users, activeUser]
    } else {
        users.map(elem => {
            if (elem.name === activeUser.name) {
                elem.point = activeUser.point
            }
        })
    }
    return localStorage.setItem('users', JSON.stringify(users))
}

export default setData;