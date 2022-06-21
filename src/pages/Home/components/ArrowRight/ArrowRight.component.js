import {BsArrowRightCircle} from "react-icons/bs";
import Button from '@mui/material/Button';
import {CustomTooltip} from "asset/components/styleComponents";
import {getDate} from "functions";
import {useDispatch, useSelector} from "react-redux";

export const ArrowRight = () => {

    const dispatch = useDispatch();
    const state = useSelector(state => state)
    let today = getDate('numeric', 'day', 1, 'fa-IR')[0].day

    let data = JSON.parse(localStorage.getItem('finish'));
    data = data.slice((data.map(item => item.day).indexOf(today) + 7), (data.map(item => item.day).indexOf(today) + 14))

    const handleClick = () => {
        dispatch({type: 'GET_LIST_FOOD', payload: data})
        dispatch({type: 'BTN_ARROW_DOWN', payload: false})
        dispatch({type: 'BTN_ARROW_LEFT', payload: true})
        dispatch({type: 'BTN_ARROW_RIGHT', payload: true})
    }

    return (
        <CustomTooltip title="هفته بعد" arrow>
            <Button disabled={state.arrowRight}>
                <BsArrowRightCircle className={`arrow ${state.arrowRight ? 'arrowDis' : null}`}  onClick={handleClick}/>
            </Button>
        </CustomTooltip>
    )
}