import setNewScore from "./setNewScore.js";

const showScore = (score, correctNum, incorrectNum) => {
    const scoreBlock = document.querySelector('.score__count');
    const correct = document.querySelector('.score__correct');
    const incorrect = document.querySelector('.score__incorrect');

    scoreBlock.textContent = score;
    correct.textContent += correctNum;
    incorrect.textContent += incorrectNum;

    setNewScore(score)
}

export default showScore;