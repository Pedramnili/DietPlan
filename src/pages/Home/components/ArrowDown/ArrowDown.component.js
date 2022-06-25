import {BsArrowDownCircle} from "react-icons/bs";
import Button from '@mui/material/Button';
import {CustomTooltip} from "asset/components/styleComponents";
import {getDate} from "functions";
import {useDispatch} from "react-redux";

export const ArrowDown = () => {

    const dispatch = useDispatch();
    const today = getDate('numeric', 'day', 1, 'fa-IR')[0].day
    let data = JSON.parse(localStorage.getItem('finish'));
    data = data.slice(data.map(item => item.day).indexOf(today), (data.map(item => item.day).indexOf(today) + 7))

    const handleClick = () => {
        dispatch({type: 'GET_LIST_FOOD', payload: data})
        dispatch({type: 'BTN_ARROW_DOWN', payload: false})
        dispatch({type: 'BTN_ARROW_LEFT', payload: false})
        dispatch({type: 'BTN_ARROW_RIGHT', payload: false})
    }

    return (
        <CustomTooltip title="امروز" arrow>
            <Button>
                <BsArrowDownCircle className={`arrowDown`} onClick={handleClick}/>
            </Button>
        </CustomTooltip>
    )
}