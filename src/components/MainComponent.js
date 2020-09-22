import React, { useState } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponent";
import { Dishes } from "../shared/dishes";
import Dishdetail from "./DishdetailComponent";

function Main() {
  const [selectedDish, setSelectedDish] = useState(null);
  const onDishSelect = (dishId) => {
    console.log("came");
    setSelectedDish(dishId);
  };

  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristronate confusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={Dishes} onClick={(dishId) => onDishSelect(dishId)} />
      <Dishdetail
        clickedDish={Dishes.filter((dish) => dish.id === selectedDish)[0]}
      />
    </div>
  );
}

export default Main;
