const getMode = () => {
    const mode = localStorage.getItem('mode')
    return mode
}

export default getMode;