import {getDay , getMonth} from "./index";

export function getDate() {

    const arr = []

    const list = JSON.parse(localStorage.getItem('menu'));

    const listFinish = JSON.parse(localStorage.getItem('finish'));

    if (listFinish == null) {

        for (let i = 0; i < 40; i++) {

            const today = new Date()

            const tomorrow = new Date(today)

            tomorrow.setDate(today.getDate() + i)

            arr.push(
                {
                    'week': tomorrow.toLocaleDateString('fa-IR', {weekday: 'long'}),
                    'day': tomorrow.toLocaleDateString('fa-IR', {day: 'numeric'})
                        .replace(/([۰-۹])/g, token => String.fromCharCode(token.charCodeAt(0) - 1728)),
                    'month': tomorrow.toLocaleDateString('fa-IR', {month: 'numeric'})
                        .replace(/([۰-۹])/g, token => String.fromCharCode(token.charCodeAt(0) - 1728)),
                    'index': i,
                    'food': list[i]
                })
        }

        console.log(list)

        localStorage.setItem('finish', JSON.stringify(arr));

    }

    console.log(listFinish[39].day , getDay() , listFinish[39].month , getMonth())

    if (listFinish[39].day === getDay() && listFinish[39].month === getMonth()) {

        localStorage.removeItem("finish");
        localStorage.removeItem("menu");

    }
}