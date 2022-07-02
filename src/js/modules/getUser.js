import isExist from "./isExist.js";

function getUser() {
    let users = JSON.parse(localStorage.getItem('users'))
    let name = localStorage.getItem('activeUser')
    if (isExist(name, users)) {
        for (let el of users) {
            if (el.name === name) {
                return el
            }
        }
    } else {
        let newUser = {
            name: name,
            point: 0
        }
        return newUser
    }

}

export default getUser