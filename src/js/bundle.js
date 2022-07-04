import "../css/style.css";

import setActualUser from './modules/startPage/setActualUser.js';
import game from "./modules/game";

setActualUser();
game()

if (localStorage.getItem('users') === null) {
    localStorage.setItem('users', JSON.stringify([]))
};



