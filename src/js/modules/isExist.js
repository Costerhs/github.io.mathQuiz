function isExist(name, users) {
    return users.some(el => el.name === name);
}

export default isExist;