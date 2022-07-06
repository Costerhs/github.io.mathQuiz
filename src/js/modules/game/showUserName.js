import getUser from "../command/getUser";

const showUserName = () => {
    let nameBlock = document.querySelector('.game__username');
    let activeUser = getUser();

    nameBlock.textContent = 'Have a fun, ' + activeUser.name
}

export default showUserName;