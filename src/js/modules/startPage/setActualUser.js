function setActualUser() {
    const btn = document.querySelector('.start__game');
    const username = document.querySelector('.start__name');

    btn?.addEventListener('click', function () {
        localStorage.setItem('activeUser', username.value);
    });
}

export default setActualUser;