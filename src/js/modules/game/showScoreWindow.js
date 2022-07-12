const showScoreWindow = () => {
    const game = document.querySelector('.game');
    const scoreWindow = document.querySelector('.game__end');

    if (game) {
        scoreWindow.classList.add('game__end-active');
        game.classList.add('game__finish');
    }
}
export default showScoreWindow;