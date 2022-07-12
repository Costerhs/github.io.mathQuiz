import "../css/style.css";

import { game, showUserName } from "./modules/game";
import { validation, setMode, setActualUser, toggleRules } from './modules/startPage';
import { showUserScore, toggleMode } from "./modules/leaderBoard";
import isExistLocalStorage from "./modules/command/isExistLocalStorage";

isExistLocalStorage()

setMode();
validation();
setActualUser();
toggleRules();

showUserName();
game();

toggleMode();
showUserScore();











