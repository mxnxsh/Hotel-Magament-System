import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { listHotel } from '../actions/hotelAction';
import Loading from "../components/Loading"

function Rooms(props) {
    const [type,setType] = useState("All");
    const [person, setPerson] = useState(1);
    const [charge, setCharge] = useState(1000);
    const hotelList = useSelector(state => state.hotelList);
    const {loading, hotels, error} = hotelList;
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(listHotel())
    },[]);
    const filters = hotels.filter((hotel) => {
        if (type === "All") {
            return hotel && person <= hotel.capacity && charge <= hotel.price
        } else if (type === "Single") {
            return (hotel.title === "Single" && charge <= hotel.price && person <= hotel.capacity)
        } else if (type === "Double") {
            return (hotel.title === "Double" && charge <= hotel.price && person <= hotel.capacity)
        } else if (type === "Deluxe") {
            return (hotel.title === "Deluxe" && charge <= hotel.price && person <= hotel.capacity)
        } else if (type === "Presedential") {
            return (hotel.title === "Presedential" && charge <= hotel.price && person <= hotel.capacity)
        }
    });
    return (
        <>
            <div class="container-fluid">
            <h1 style={{textAlign: 'center', color:"#f0932b", marginTop:"5px"}}>Search Rooms</h1>
                    <div class="row mt-5 d-flex justify-content-center">
                        <div class="col-lg-3 col-md-6 col-10 py-3">
                        <select class="select"  value={type} onChange={(e) =>{setType(e.target.value)}}>
                            <option value="All">All</option>
                            <option value="Single">Single</option>
                            <option value="Double">Double</option>
                            <option value="Deluxe">Deluxe</option>
                            <option value="Presedential">Presedential</option>
                        </select>
                        </div>
                        <div class="col-lg-3 col-md-6 col-10 py-3">
                        <label for="customRange2" class="form-label">{person} Persons</label>
                        <input type="range" class="form-range" value={person} onChange={(e) => {setPerson(e.target.value)}} min="1" max="6" id="customRange2" />
                        </div>
                        <div class="col-lg-3 col-md-6 col-10 py-3">
                        <label for="customRange2" class="form-label">${charge}</label>
                        <input type="range" class="form-range" value={charge} onChange={(e) => {setCharge(e.target.value)}} min="1000" max="30000" id="customRange2" />
                        </div>
                    </div>
            </div>
            <div class="container">
                <div class="row p-4">
                {loading && <Loading/>}
                {error && <div>{error}</div>}
                {filters.map((hotel) => {
                    return (
                    <div class="col-lg-4 col-md-6 col-10 p-3">
                    <div class="card" style={{width: "18rem", boxShadow:"0 5px 10px rgba(0,0,0,0.3)", borderColor:"#f0932b"}}>
                        <img
                            src={hotel.image}
                            class="card-img-top"
                            width="300px"
                            height="200px"
                        />
                        <div class="card-body">
                            <p class="card-text text-center" style={{fontSize:"1.5rem", color:"#f0932b",}} >
                                {hotel.title}
                            </p>
                            <p class="card-text text-center" style={{fontSize:"1.5rem"}} >
                                ${hotel.price}
                            </p>
                        </div>
                    </div>
                    </div>)
                })}
                </div>
            </div>
        </>
    )
}

export default Rooms;
