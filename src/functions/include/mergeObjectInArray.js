export function mergeObject () {

    const array = []

    for (let i = 0; i < arguments[0].length ; i++) {

        let all = {
            ...arguments[0][i], ...arguments[1][i] , ...arguments[2][i] , 'food' : arguments[3][i] , 'index': i
        }

        array.push(all)

    }

    return array
}