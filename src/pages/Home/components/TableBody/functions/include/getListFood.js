import {list_food} from "api/listFood.api"
import {randomNumber} from "functions"

function listDiet(name) {

    const list = []
    const list_finish = []

    if (name === 'HealF') {
        list.push(list_food.filter(item => !item.health));
    } else if (name === 'riceT') {
        list.push(list_food.filter(item => item.rice));
    } else if (name === 'riceF_Other_HealT') {
        list.push(list_food.filter(item => !item.rice && item.model === "" && item.health));
    } else if (name === 'riceF_Chi_HealT') {
        list.push(list_food.filter(item => !item.rice && item.model === "chicken" && item.health));
    } else if (name === 'riceF_Meat_HealT') {
        list.push(list_food.filter(item => !item.rice && item.model === "meat" && item.health));
    }

    const numbers = randomNumber(list[0].length)

    for (const elem of numbers) {
        list_finish.push(list[0][elem].name)
    }

    return list_finish
}

(function getListFood() {

    const finish = [];

    const HealF = listDiet('HealF');
    const riceT = listDiet('riceT');
    const riceF_Other_HealT = listDiet('riceF_Other_HealT');
    const riceF_Chi_HealT = listDiet('riceF_Chi_HealT');
    const riceF_Meat_HealT = listDiet('riceF_Meat_HealT');
    const allRiceF = [riceF_Other_HealT, riceF_Chi_HealT, riceF_Meat_HealT];


    const list = JSON.parse(localStorage.getItem('menu'));

    if (list == null) {

        for (let i = 0; i < HealF.length; i++) {
            finish [i * 4] = HealF [i]
        }

        for (let i = 0; i < riceT.length; i++) {
            finish [(i * 4) + 1] = riceT [i]
        }

        const randomNum = []
        const listAllRiceF = []

        for (let i = 0; i < 20; i++) {
            const num = Math.floor(Math.random() * 3);
            if (randomNum.slice((
                0 <= i && i < 3 ? 0 :
                    3 <= i && i < 6 ? 3 :
                        6 <= i && i < 9 ? 6 :
                            9 <= i && i < 12 ? 9 :
                                12 <= i && i < 15 ? 12 :
                                    15 <= i && i < 18 ? 15 :
                                        18 <= i && i < 20 ? 18 : null
            ), (
                0 <= i && i < 3 ? 3 :
                    3 <= i && i < 6 ? 6 :
                        6 <= i && i < 9 ? 9 :
                            9 <= i && i < 12 ? 12 :
                                12 <= i && i < 15 ? 15 :
                                    15 <= i && i < 18 ? 18 :
                                        18 <= i && i < 20 ? 20 : null
            )).indexOf(num) === -1) {
                randomNum.push(num)
            } else {
                i--;
            }
        }

        for (let i = 0; i < randomNum.length; i++) {
            for (let k = 0; k < 20; k++) {
                listAllRiceF.push(allRiceF[randomNum[k]][i])
            }
        }

        let uniqueChars = listAllRiceF.filter((elem, index) => {
            return listAllRiceF.indexOf(elem) === index;
        });

        let j = 0

        for (let i = 0; i < 40; i++) {
            if (finish[i] == null) {
                finish[i] = uniqueChars[j]
                j++
            }
        }

        localStorage.setItem('menu', JSON.stringify(finish));
    }
})();


