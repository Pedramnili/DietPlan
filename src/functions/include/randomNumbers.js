export function randomNumber(length) {

    const randomNum = []

    for (let i = 0; i < length; i++) {
        const num = Math.floor(Math.random() * length);
        randomNum.indexOf(num) === -1 ? randomNum.push(num) : i--;
    }

    return randomNum
}