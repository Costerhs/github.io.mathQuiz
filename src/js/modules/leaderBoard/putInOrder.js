function putInOrder(arr, elem) {
    return arr.sort((a, b) => {
        if (a[elem] > b[elem]) {
            console.log(a[elem])
            return -1

        } else if (b[elem] > a[elem]) {
            console.log(a[elem])
            return 1
        }
        return 0
    })
}

export default putInOrder;