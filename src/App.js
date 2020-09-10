import React from 'react';
import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';
import Menu from "./components/MenuComponent";
import {Dishes} from "./shared/dishes"

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristronate confusion</NavbarBrand>
        </div>
     
      </Navbar>
      <Menu dishes={Dishes}/>
    </div>
  );
}

export default App;
