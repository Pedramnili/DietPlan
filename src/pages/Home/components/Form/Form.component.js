import * as style from "./styleSX";
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import FormControlLabel from '@mui/material/FormControlLabel';
import {list_food} from "api/listFood.api"
import {useState} from 'react';
import {useDispatch} from "react-redux";

export const FormData = () => {

    const [chicken, setChicken] = useState(false);
    const [fast, setFast] = useState(false);
    const [guest, setGuest] = useState(false);
    const [meat, setMeat] = useState(false);
    const [other, setOther] = useState(false);
    const [rice, setRice] = useState(false);
    const [modal, setModal] = useState(null);
    const [result, setResult] = useState("!... " + "نتیجه");
    const dispatch = useDispatch();

    const handleChangeChicken = (event) => {
        if (meat) {
            setMeat(false)
        }
        if (other) {
            setOther(false)
        }
        event.target.checked ? setModal('chicken') : setModal(null);
        setChicken(event.target.checked);
    };

    const handleChangeFast = (event) => {
        if (rice) {
            setRice(false)
        }
        setFast(event.target.checked);
    };

    const handleChangeGuest = (event) => {
        setGuest(event.target.checked);
    };

    const handleChangeMeat = (event) => {
        if (chicken) {
            setChicken(false)
        }
        if (other) {
            setOther(false)
        }
        event.target.checked ? setModal('meat') : setModal(null);
        setMeat(event.target.checked);
    };

    const handleChangeOther = (event) => {
        if (chicken) {
            setChicken(false)
        }
        if (meat) {
            setMeat(false)
        }
        event.target.checked ? setModal('') : setModal(null);
        setOther(event.target.checked);
    };

    const handleChangeRice = (event) => {
        if (fast) {
            setFast(false)
        }
        setRice(event.target.checked);
    };

    const handleSubmit = (event) => {
        event.preventDefault()

        const list = list_food.filter(item => item.model === modal && item.health === !fast && item.rice === rice);

        dispatch({type: 'OPEN_MODAL_SUGGESTION', payload: true});

        list.length === 0 ? rice || fast ?
                setResult("مکمل انتخاب کنید") :
                setResult("! نتیجه یافت نشد") :
            setResult(`(${list.length}) نتایج `);

        list ? dispatch({type: 'FOOD_SUGGESTION', payload: list}) :
            dispatch({type: 'FOOD_SUGGESTION', payload: " :(  نتیجه یافت نشد"});

    }

    const theme = createTheme()
    theme.typography.body1 = {fontSize: '.8rem'};

    return (
        <ThemeProvider theme={theme}>
            <div>
                <FormControlLabel control={<Checkbox sx={style.meatStyle} checked={meat} onChange={handleChangeMeat}
                                                     icon={<FavoriteBorder/>} checkedIcon={<Favorite/>}/>} label="گوشت"
                />
                <FormControlLabel
                    control={<Checkbox sx={style.chiStyle} checked={chicken} onChange={handleChangeChicken}
                                       icon={<FavoriteBorder/>} checkedIcon={<Favorite/>}/>} label="مرغ"
                />
                <FormControlLabel control={<Checkbox sx={style.othStyle} checked={other} onChange={handleChangeOther}
                                                     icon={<FavoriteBorder/>} checkedIcon={<Favorite/>}/>} label="غیره"
                />
                <FormControlLabel control={<Checkbox sx={style.riceStyle} checked={rice} onChange={handleChangeRice}
                                                     icon={<FavoriteBorder/>} checkedIcon={<Favorite/>}/>} label="برنج"
                />
                <FormControlLabel control={<Checkbox sx={style.fastStyle} checked={fast} onChange={handleChangeFast}
                                                     icon={<FavoriteBorder/>} checkedIcon={<Favorite/>}/>}
                                  label="فست فود"
                />
                <FormControlLabel control={<Checkbox sx={style.guestStyle} checked={guest} onChange={handleChangeGuest}
                                                     icon={<FavoriteBorder/>} checkedIcon={<Favorite/>}/>} label="مهمان"
                />
            </div>
            <Button sx={style.btn} color="warning" variant="contained" onClick={handleSubmit}>{result}</Button>
        </ThemeProvider>

    )
}