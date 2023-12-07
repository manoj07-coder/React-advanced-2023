import React from "react";
import { Routes ,Route, Switch } from "react-router-dom";

import Home from "./home";
import About from "./about";
import Error from "./Error";
import People from "./People";
import Person from "./Person";

import Navbar from "./Nav";


function ReactRouterSetup(){
    return (
        <div>
      <Routes>
        <Route
            path='/'
            element={<Home />}
       />
      </Routes>
        </div>
    )
}

export default ReactRouterSetup