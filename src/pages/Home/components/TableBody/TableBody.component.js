import {useEffect} from 'react';
import {useDispatch , useSelector} from "react-redux";
import {getDate} from "functions";
import "./functions/include/getListFood"
import "./functions/include/getDietPlan"


export const TableBody = ({row}) => {

    const dispatch = useDispatch();
    const state = useSelector(state => state)
    const today = getDate('numeric', 'day', 1, 'fa-IR')[0].day
    let data = JSON.parse(localStorage.getItem('finish'));
    data = data.slice((data.map(item => item.day).indexOf(today)), (data.map(item => item.day).indexOf(today)) + 7)

    useEffect(() => {
        dispatch({type: 'GET_LIST_FOOD', payload: data});
    }, []);

    return (
        <tbody>
        {
            state.listFood?.map((item) => (
            <tr key={item.food}>
                {row?.map((column) => (
                    <th key={column.id} className={item.day === today ? 'select' : null}>
                        {column.id === 'weekday' ? item.weekday : null}
                        {column.id === 'date' ?
                            (item.day < 10 ? "0" + item.day : item.day)
                            + '/' +
                            (item.month < 10 ? "0" + item.month : item.month) : null}
                        {column.id === 'name' ? (item.food == null ? "دلخواه" : item.food) : null}
                    </th>
                )) || <th colSpan={3}>در حال بارگذاری...</th>}
            </tr>
        )) ||
            <tr><td colSpan={3}>در حال بارگذاری...</td></tr>}
        </tbody>
    )
}