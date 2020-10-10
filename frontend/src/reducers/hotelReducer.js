import {
    HOTEL_ADD_FAIL,
    HOTEL_ADD_REQUEST,
    HOTEL_ADD_SUCCESS,
    HOTEL_LIST_FAIL,
    HOTEL_LIST_REQUEST,
    HOTEL_LIST_SUCCESS
} from "../constants/hotelConstants";

function hotelListReducer(state = {
    hotels: []
}, {
    type,
    payload
}) {
    switch (type) {
        case HOTEL_LIST_REQUEST:
            return {
                loading: true, hotels: []
            }
            case HOTEL_LIST_SUCCESS:
                return {
                    loading: false, hotels: payload
                }
                case HOTEL_LIST_FAIL:
                    return {
                        loading: false, error: payload
                    }
                    default:
                        return state;
    }
}

function hotelAddReducer(state = {
    hotels: {}
}, {
    type,
    payload
}) {
    switch (type) {
        case HOTEL_ADD_REQUEST:
            return {
                loading: true,
            }
            case HOTEL_ADD_SUCCESS:
                return {
                    loading: false, hotels: payload
                }
                case HOTEL_ADD_FAIL:
                    return {
                        loading: false, error: payload
                    }
                    default:
                        return state;
    }
}

export {
    hotelListReducer,
    hotelAddReducer
};