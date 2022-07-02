const showScoreWindow = () => {
    let game = document.querySelector('.game');
    let scoreWindow = document.querySelector('.game__end');

    scoreWindow.classList.add('game__end-active');
    game.classList.add('game__finish');
}
export default showScoreWindow;