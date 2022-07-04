import isExist from "../command/isExist.js";

function setData(activeUser) {
    let users = JSON.parse(localStorage.getItem('users'))
    if (isExist(activeUser.name, users)) {
        const user = users.find(elem => elem.name === activeUser.name);
        user.point = activeUser.point
    } else {
        users = [...users, activeUser]
    }
    return localStorage.setItem('users', JSON.stringify(users))
}

export default setData;