import {getDate , mergeObject} from "functions"

(function getDietPlan() {

    const list = JSON.parse(localStorage.getItem('menu'));
    const listFinish = JSON.parse(localStorage.getItem('finish'));
    const today = getDate('numeric', 'day', 1, 'fa-IR')[0].day
    const tomonth = getDate('numeric', 'month', 1, 'fa-IR')[0].month

    if (listFinish == null) {
        const day = getDate('numeric', 'day', 40, 'fa-IR')
        const weekday = getDate('long', 'weekday', 40, 'fa-IR')
        const month = getDate('numeric', 'month', 40, 'fa-IR')
        const dietPlan = mergeObject(day, weekday, month, list)
        localStorage.setItem('finish', JSON.stringify(dietPlan));
    } else if (listFinish[39]?.day === +today && listFinish[39]?.month === +tomonth) {
        localStorage.removeItem("finish");
        localStorage.removeItem("menu");
    }

})();



