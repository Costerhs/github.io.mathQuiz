import setNewScore from "./setNewScore.js";

const showScore = (score, correctNum, incorrectNum) => {
    let scoreBlock = document.querySelector('.score__count');
    let correct = document.querySelector('.score__correct');
    let incorrect = document.querySelector('.score__incorrect');

    scoreBlock.textContent = score;
    correct.textContent += correctNum;
    incorrect.textContent += incorrectNum;

    setNewScore(score)
}

export default showScore;