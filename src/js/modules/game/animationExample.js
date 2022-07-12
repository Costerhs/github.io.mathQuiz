const animationExample = () => {
    const gameBlock = document.querySelector('.game__mid');

    gameBlock.classList.add('game__left')
    gameBlock.classList.remove('game__right')

    setTimeout(() => {
        gameBlock.classList.remove('game__left')
        gameBlock.classList.add('game__right')
    }, 500);
}

export default animationExample