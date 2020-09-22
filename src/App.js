import React from "react";
import logo from "./logo.svg";
import { Navbar, NavbarBrand } from "reactstrap";
import "./App.css";
import Main from "./components/MainComponent";
import { Dishes } from "./shared/dishes";

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
