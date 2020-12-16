import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeScreen from "./screens/HomeScreen";
import Rooms from './screens/Rooms';
import RoomDetailsScreen from "./screens/RoomDetailsScreen";
import Admin from "./screens/Admin";
import Register from './screens/Register';
import Login from './screens/Login';


function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container-fluid">
          <Navbar />
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/rooms" component={Rooms} />
          <Route exact path="/roomdetaild" component={RoomDetailsScreen} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
