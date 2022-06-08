import {getDate , getDay , getListFood} from "./components";

export const TableBody = ({rowHead}) => {

    getListFood()
    getDate()

    let data = JSON.parse(localStorage.getItem('finish'));

    data = data.slice((data.map(item => item.day).indexOf(getDay())), (data.map(item => item.day).indexOf(getDay())) + 7)

    return (
        <tbody>
            {data.map((item, index) => (
                <tr key={index}>
                    {rowHead.map((column, index2) => (
                        <th key={index2} className={item.day === getDay() ? 'select' : null}>
                            {column.id === 'day' ? item.week : null}
                            {column.id === 'date' ? (item.day < 10 ? "0" + item.day : item.day)
                                + '/' + (item.month < 10 ? "0" + item.month : item.month) : null}
                            {column.id === 'name' ? (item.food == null ? "دلخواه" : item.food) : null}
                        </th>
                    ))}
                </tr>
            ))}
        </tbody>
    )
}