import setNewScore from "./setNewScore.js";

const setScore = (score, correctNum, incorrectNum) => {
    const scoreBlock = document.querySelector('.score__count');
    const correct = document.querySelector('.score__correct');
    const incorrect = document.querySelector('.score__incorrect');

    if (scoreBlock) {
        scoreBlock.textContent = score;
        correct.textContent = 'Correct: ' + correctNum;
        incorrect.textContent = 'Incorrect: ' + incorrectNum;
    }

    setNewScore(score)
}

export default setScore;