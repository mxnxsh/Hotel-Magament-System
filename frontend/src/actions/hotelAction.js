import axios from "axios";
const {
  HOTEL_LIST_REQUEST,
  HOTEL_LIST_SUCCESS,
  HOTEL_LIST_FAIL,
} = require("../constants/hotelConstants");

const listHotel = () => async (dispatch) => {
  try {
    dispatch({
      type: HOTEL_LIST_REQUEST
    });
    const {
      data
    } = await axios.get("api/hotels");
    dispatch({
      type: HOTEL_LIST_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: HOTEL_LIST_FAIL,
      payload: error
    });
  }
};
const addHotel = (hotel) => async (dispatch) => {
  console.log(hotel)
  try {
    dispatch({
      type: HOTEL_LIST_REQUEST,
      payload: hotel
    });
    const {
      data
    } = await axios.post("api/hotels", hotel);
    dispatch({
      type: HOTEL_LIST_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: HOTEL_LIST_FAIL,
      payload: error
    });
  }
};
export {
  listHotel,
  addHotel
};