import getMode from "../command/getMode.js"
import showScore from "./showScore.js"
import showScoreWindow from "./showScoreWindow.js"
import timerAttack from "./timerAttack.js"
import animationExample from "./animationExample.js"
import animationScore from "./animationScore.js"

const operators = ['+', '-', '*', '/']

const getRandom = (min, max) => {
    return Math.round(Math.random() * (max - min) + min)
}

const sum = (a, b, operator) => {
    if (operator === '+') return a + b
    if (operator === '-') return a - b
    if (operator === '/') return a / b
    return a * b
}

const generateExample = (divid) => {
    const num1 = getRandom(1, 10)
    const num2 = getRandom(1, 10)
    const operator = divid || operators[getRandom(0, 3)]
    const result = sum(num1, num2, operator)
    if (operator === '/' && num1 % num2 !== 0 || num1 == num2) {
        return generateExample('/')
    }
    return { num1, num2, operator, result }
}

function game() {
    const num1 = document.querySelector('.game__num1')
    const num2 = document.querySelector('.game__num2')
    const operator = document.querySelector('.game__operator')
    const result = document.querySelector('.game__result')
    const winElement = document.querySelector('.game__score')
    const stopGame = document.querySelector('.game__stop')

    const renderExample = (data) => {
        if (num1) {
            num1.textContent = data.num1
            num2.textContent = data.num2
            operator.textContent = data.operator
        }
    }

    let overallWins = 0
    let score = 0
    let fails = 0
    let example = generateExample()
    renderExample(example)

    if (getMode() === 'timeAttack') {
        timerAttack(14000)
    }

    result?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            if (!result.value) return

            const isValidResult = Number(result.value) === example.result
            score += isValidResult ? 1 : -1
            overallWins += isValidResult ? 1 : 0
            fails += !isValidResult ? 1 : 0

            winElement.textContent = score
            result.value = ''

            setTimeout(() => {
                example = generateExample()
                renderExample(example)
            }, 500);

            animationScore(isValidResult)
            animationExample()
            showScore(score, overallWins, fails);
        }
    })

    stopGame?.addEventListener('click', () => {
        showScoreWindow()
        showScore(score, overallWins, fails, true);
    })


}

export default game;