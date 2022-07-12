import setNewScore from "./setNewScore.js";

const showScore = (score, correctNum, incorrectNum, isFinish) => {
    const scoreBlock = document.querySelector('.score__count');
    const correct = document.querySelector('.score__correct');
    const incorrect = document.querySelector('.score__incorrect');

    if (scoreBlock) {
        scoreBlock.textContent = score;
        correct.textContent = 'Correct: ' + correctNum;
        incorrect.textContent = 'Incorrect: ' + incorrectNum;
    }

    if (isFinish) setNewScore(score)
}

export default showScore;