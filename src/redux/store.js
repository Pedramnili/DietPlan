import * as reducer from 'redux/reducers'
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducers = combineReducers(
    {
        arrowDown : reducer.setArrowDown,
        arrowLeft: reducer.setArrowLeft,
        arrowRight: reducer.setArrowRight,
        foodSuggestion: reducer.setFoodSuggestion,
        listFood: reducer.setListFood,
        modal: reducer.setModal ,
        modalSuggestion: reducer.setModalS
    });

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;