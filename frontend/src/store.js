import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Cookie from 'js-cookie'

import { hotelAddReducer, hotelListReducer } from "./reducers/hotelReducer";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducer";
const userInfo = Cookie.getJSON('userInfo') || null;

const inititalState = { userLogin: { userInfo } }

const reducers = combineReducers({
    hotelList: hotelListReducer,
    addHotel: hotelAddReducer,
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer,

});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(reducers, inititalState, composeEnhancer(applyMiddleware(thunk)))

export default store;