import React from "react";
import logo from "./logo.svg";
import { Navbar, NavbarBrand } from "reactstrap";
import "./App.css";
import Main from "./components/MainComponent";
import { Dishes } from "./shared/dishes";
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
     <div className="App">
      <Main />
    </div>
    </BrowserRouter>
   
  );
}

export default App;
