const toggleClass = (elem, classes, num) => {
    elem.classList.add(classes)

    setTimeout(() => {
        elem.classList.remove(classes)
    }, num * 1000);
}

const animationScore = (isCorrect) => {
    const count = document.querySelector('.game__count');
    const scoreBlock = document.querySelector('.game__down-left');

    if (isCorrect) {
        count.textContent = '+1';
        toggleClass(count, 'game__count-animation', 0.4)
    } else {
        count.textContent = '-1';
        toggleClass(count, 'game__count-animation', 0.4)
        toggleClass(scoreBlock, 'game__incorrect', 0.4)
    }
}

export default animationScore;