import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {setArrowDown , setArrowLeft , setArrowRight , setListFood , setModal} from 'redux/reducers'
import thunk from 'redux-thunk'
import {} from "./reducers/include/.reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducers = combineReducers(
    {
        arrowDown : setArrowDown,
        arrowLeft: setArrowLeft,
        arrowRight: setArrowRight,
        listFood: setListFood,
        modal: setModal
    });

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;