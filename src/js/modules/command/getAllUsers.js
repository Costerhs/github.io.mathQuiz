const getAllUsers = () => {
    let users = JSON.parse(localStorage.getItem('users'));;
    return users
}

export default getAllUsers;