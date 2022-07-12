import getAllUsers from "../command/getAllUsers.js";
import getMode from "../command/getMode.js";
import isExist from "../command/isExist.js";

function setData(activeUser) {
    let users = getAllUsers()
    let mode = getMode();
    if (isExist(activeUser.name, users)) {
        const user = users.find(elem => elem.name === activeUser.name);
        user[mode] = activeUser[mode]
    } else {
        users = [...users, activeUser]
    }
    return localStorage.setItem('users', JSON.stringify(users))
}

export default setData;