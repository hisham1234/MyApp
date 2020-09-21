import React, { useState } from "react";
import Dishdetail from "./DishdetailComponent";

import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
function Menu(props) {
  //  const dishes=
  const [selectedDish, setSelectedDish] = useState(null);

  const onDishSelect = (dish) => {
    console.log("came");
    setSelectedDish(dish);
  };

  const menu = props.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-1 text-left">
        <Card onClick={() => onDishSelect(dish)}>
          <CardImg width="100%" object src={dish.image} alt={dish.name} />

          <CardImgOverlay>
            <CardTitle>{dish.name} </CardTitle>
          </CardImgOverlay>
        </Card>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">{menu}</div>
      <Dishdetail clickedDish={selectedDish} />
    </div>
  );
}
export default Menu;
