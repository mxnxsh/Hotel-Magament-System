import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeScreen from "./screens/HomeScreen";
import Rooms from './screens/Rooms';
import RoomDetails from "./screens/RoomDetails";
import Admin from "./screens/Admin";


function App() {
  return (
    <>
    <BrowserRouter>
    <div className="container-fluid">
      <Navbar/>
      <Route exact path="/" component={HomeScreen} />
      <Route exact path="/rooms" component={Rooms}/>
      <Route exact path="/roomdetaild" component={RoomDetails}/>
      <Route exact path="/admin" component={Admin}/>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
