function setActuallUser() {
    let btn = document.querySelector('.start__game');
    let username = document.querySelector('.start__name');
    btn?.addEventListener('click', function () {
        localStorage.setItem('activeUser', username.value);
    });
}

export default setActuallUser;