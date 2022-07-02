import "../css/style.css";

import setData from './modules/setData.js';
import setActuallUser from './modules/startPage/setActuallUser.js';
import game from "./modules/game/game.js";
setActuallUser();
game()

if (localStorage.getItem('users') === null) {
    localStorage.setItem('users', JSON.stringify([]))
};

let users = JSON.parse(localStorage.getItem('users'))
console.log(users)

/*testing functional score*/
// let plus = document.querySelector('.plus');
// let minus = document.querySelector('.minus');
// let sees = document.querySelector('.scores');
// let actuallUser = createNewUser(users);
// let pre = actuallUser.point;
// plus?.addEventListener('click', function () {
//     sees.textContent = Number(sees.textContent) + 1;
//     console.log(actuallUser);
//     if (Number(sees.textContent) > actuallUser.point) {
//         actuallUser.point = sees.textContent;
//         setData(users, actuallUser);
//     }
// });
// minus?.addEventListener('click', function () {
//     sees.textContent = Number(sees.textContent) - 1;
// });
