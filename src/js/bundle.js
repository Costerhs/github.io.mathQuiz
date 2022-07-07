import "../css/style.css";

import setActualUser from './modules/startPage/setActualUser.js';
import game from "./modules/game";
import showUserName from "./modules/game/showUserName";
import timerAttack from "./modules/game/timerAttack";
import validation from "./modules/startPage/validation.js";
import setMode from "./modules/startPage/setMode";
import showUserScore from "./modules/leaderBoard/showUsersScore";
import toggleMode from "./modules/leaderBoard/toggleMode";

if (localStorage.getItem('users') === null) {
    localStorage.setItem('users', JSON.stringify([]))
};


setMode()
validation();
setActualUser();

showUserName();
game();

toggleMode();
showUserScore();











