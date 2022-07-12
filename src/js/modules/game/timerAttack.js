import setNewScore from "./setNewScore"
import showScoreWindow from "./showScoreWindow"

const timerAttack = (time) => {
    const minute = document.querySelector('.game__min')
    const twice = document.querySelector('.game__t')
    const second = document.querySelector('.game__second')

    const minuteNum = Math.floor(time / 60)
    const secondNum = time % 60

    if (minute) {
        minute.textContent = minuteNum
        twice.textContent = ':'
        second.textContent = String(secondNum).padStart(2, '0');
    }

    if (time >= 1) {
        setTimeout(() => {
            timerAttack(time - 1)
        }, 1000);
    } else {
        const scoreBlock = document.querySelector('.score__count');
        showScoreWindow()
        setNewScore(scoreBlock.textContent)
        const gameResult = document.querySelector('.game__result')
        gameResult.disabled = true
    }

}

export default timerAttack;