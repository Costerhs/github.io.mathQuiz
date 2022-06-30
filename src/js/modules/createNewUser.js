import isExist from "./isExist.js";

function createNewUser(name, names) {
    let errorText = document.querySelector('.errorText');
    if (isExist(name, names)) {
        errorText.style.display = 'block';
        return false
    }
    errorText.style.display = 'none'
    return {
        name: name,
        point: 0
    }
}

export default createNewUser