import "../css/style.css";

import { game, showUserName } from "./modules/game";
import { validation, setMode, setActualUser } from './modules/startPage';
import { showUserScore, toggleMode } from "./modules/leaderBoard";
import isExistLocalStorage from "./modules/command/isExistLocalStorage";

isExistLocalStorage()

setMode();
validation();
setActualUser();


showUserName();
game();

toggleMode();
showUserScore();











