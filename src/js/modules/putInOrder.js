function putInOrder(arr) {
    return arr.sort((a, b) => {
        if (a.point > b.point) {
            return -1
        } else if (b.point > a.point) {
            return 1
        }
        return 0
    })
}

export default putInOrder;