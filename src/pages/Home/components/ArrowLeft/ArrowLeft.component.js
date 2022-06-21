import {BsArrowLeftCircle} from "react-icons/bs";
import Button from '@mui/material/Button';
import {CustomTooltip} from "asset/components/styleComponents";
import {getDate} from "functions";
import {useDispatch, useSelector} from "react-redux";

export const ArrowLeft = () => {

    const dispatch = useDispatch();
    const state = useSelector(state => state)
    let title
    let today = getDate('numeric', 'day', 1, 'fa-IR')[0].day

    let data = JSON.parse(localStorage.getItem('finish'));
    data = data
        .slice((data.map(item => item.day).indexOf(today) - 7) < 0 ? 0 : (data.map(item => item.day).indexOf(today)) - 7,
            ((data.map(item => item.day).indexOf(today) - 7) < 0 ? 0 : (data.map(item => item.day).indexOf(today)) - 7) + 7);

    data.map(item => item.day).indexOf(today) < 6 ? title = "روز های قبل" : title = "هفته قبل";

    const handleClick = () => {
        dispatch({type: 'GET_LIST_FOOD', payload: data})
        dispatch({type: 'BTN_ARROW_DOWN', payload: false})
        dispatch({type: 'BTN_ARROW_LEFT', payload: true})
        dispatch({type: 'BTN_ARROW_RIGHT', payload: true})
    }

    return (
        <CustomTooltip title={title} arrow>
            <Button disabled={state.arrowLeft}>
                <BsArrowLeftCircle className={`arrow ${state.arrowLeft ? 'arrowDis' : null}`} onClick={handleClick}/>
            </Button>
        </CustomTooltip>
    )
}