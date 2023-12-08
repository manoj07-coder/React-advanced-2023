import React from "react";
import { BrowserRouter,Routes ,Route} from "react-router-dom";

import Home from "./home";
import About from "./about";
import Error from "./Error";
import People from "./People";
import Person from "./Person";

import Navbar from "./Nav";


function ReactRouterSetup(){
    return (
        <BrowserRouter>
      <Routes>
        <Route
            path='/'
            element={<div>
                <h2>Hello World</h2>
            </div>}
       />
      </Routes>
        </BrowserRouter>
    )
}

export default ReactRouterSetup