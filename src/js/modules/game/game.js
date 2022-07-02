import showScore from "./showScore.js"
import showScoreWindow from "./showScoreWindow.js"

function game() {
    const num1 = document.querySelector('.game__num1')
    const num2 = document.querySelector('.game__num2')
    const operator = document.querySelector('.game__operator')
    const result = document.querySelector('.game__result')
    const winElement = document.querySelector('.game__score')

    const getRandom = (min, max) => {
        return Math.round(Math.random() * (max - min) + min)
    }

    const operators = ['+', '-', '*', '/']

    const sum = (a, b, operator) => {
        if (operator === '+') return a + b
        if (operator === '-') return a - b
        if (operator === '/') return a / b
        return a * b
    }

    const generateExample = (divid) => {
        const num1 = getRandom(1, 2)
        const num2 = getRandom(1, 2)
        const operator = divid || operators[getRandom(0, 3)]
        const result = sum(num1, num2, operator)
        if (operator === '/' && num1 % num2 !== 0 || num1 == num2) {
            return generateExample('/')
        }
        return { num1, num2, operator, result }
    }

    const renderExample = (data) => {
        num1.textContent = data.num1
        num2.textContent = data.num2
        operator.textContent = data.operator
    }

    let overallWin = 0
    let win = 0
    let fall = 0
    let example = generateExample()
    renderExample(example)

    result?.addEventListener('keydown', (e) => {
        if (e.keyCode === 13) {
            if (!result.value && result.value !== 0) return
            win += Number(result.value) === Number(example.result) ? 1 : -1
            overallWin += Number(result.value) === Number(example.result) ? 1 : null
            fall += Number(result.value) !== Number(example.result) ? 1 : null
            winElement.textContent = win
            result.value = ''
            example = generateExample()
            renderExample(example)
        }
        if (fall >= 4) {
            showScoreWindow()
            showScore(win, overallWin, fall);
        }
    })
}

export default game