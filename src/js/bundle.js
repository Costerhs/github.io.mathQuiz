import "../css/style.css";

import setActualUser from './modules/startPage/setActualUser.js';
import game from "./modules/game";
import showUserName from "./modules/game/showUserName";
import timerAttack from "./modules/game/timerAttack";
import validation from "./modules/startPage/validation.js";
import setMode from "./modules/startPage/setMode";
import showUserScore from "./modules/leaderBoard/showUsersScore";

if (localStorage.getItem('users') === null) {
    localStorage.setItem('users', JSON.stringify([]))
};
// localStorage.setItem('users', JSON.stringify([
//     { name: 'nuralim', practice: 100, timeAttack: 40 },
//     { name: 'awa', practice: 90, timeAttack: 70 },
//     { name: 'john', practice: 80, timeAttack: 90 }
// ]))
// setMode()
// validation();
// setActualUser();
// game();
// showUserName();
showUserScore()
// timerAttack(12);









