import createNewUser from './modules/createNewUser.js';
import putInOrder from './modules/putInOrder.js';
import { store } from './modules/store.js';
import inputAnimate from './modules/inputAnimate.js';
import activeMode from './modules/activeMode.js';
inputAnimate();
activeMode();

let btn = document.querySelector('.send');
let username = document.querySelector('.name');
let scoreTable = document.querySelector('.score');

function render() {
    scoreTable.textContent = null;
    putInOrder(store.users).forEach(elem => {
        let block = document.createElement('div');
        let names = document.createElement('div');
        let point = document.createElement('div');
        block.classList.add('score__item');
        names.classList.add('score__name');
        point.classList.add('score__point');
        names.textContent = elem.name;
        point.textContent = elem.point;
        block.append(names, point);
        scoreTable.append(block)
    }
    )
}
render()
btn?.addEventListener('click', function () {
    let newUser = createNewUser(username.value, store.users.map(el => el.name));
    if (newUser !== false) {
        store.dispatch({ type: 'PUT__USER', data: newUser })
        render()
    }
});
