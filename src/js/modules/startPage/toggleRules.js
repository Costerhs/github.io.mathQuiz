const toggleRules = () => {
    const rules = document.querySelector('.start__rules-texts');
    const btn = document.querySelector('.start__rules');

    btn?.addEventListener('click', (e) => {
        rules.classList.toggle('start__rules-passive')
    });
}

export default toggleRules;