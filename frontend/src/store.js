import {combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { hotelAddReducer, hotelListReducer } from "./reducers/hotelReducer";

const inititalState = {}

const reducers = combineReducers({
    hotelList: hotelListReducer,
    addHotel: hotelAddReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(reducers, inititalState,composeEnhancer(applyMiddleware(thunk)))

export default store;