import React, { useState } from "react";
import Header from './HeaderComponent'
import Menu from "./MenuComponent";
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotion";
import Dishdetail from "./DishdetailComponent";
import Footer from './FooterComponent'
import Contact from './ContactComponent'
import Home from "./HomeComponent"
import  { Switch,Route,Redirect } from 'react-router-dom';


function Main() {
  const [selectedDish, setSelectedDish] = useState(null);
  const [comments, setComments] = useState(COMMENTS);
  const [promotions, setPromotions] = useState(PROMOTIONS);
  const [leaders, setLeaders] = useState(LEADERS);

  const onDishSelect = (dishId) => {
    console.log("came");
    setSelectedDish(dishId);
  };

  const HomePage=()=>{
    console.log(leaders.filter((leaders)=>leaders.featured))
    return (
      <Home dish={DISHES.filter((dish)=>dish.featured)[0]}
      promotions={promotions.filter((promotions)=>promotions.featured)[0]}
      leaders={leaders.filter((leaders)=>leaders.featured)[0]}
       
      />
    )
  }
  return (
    <div className="App">
      <Header />
      {/* <Menu dishes={Dishes} onClick={(dishId) => onDishSelect(dishId)} />*/}
     {/*  <Dishdetail
        clickedDish={Dishes.filter((dish) => dish.id === selectedDish)[0]}
      />  */}
      <Switch>
        <Route path="/home" component={HomePage}/>
    <Route exact path="/menu" component={()=> <Menu dishes={DISHES} onClick={(dishId) => onDishSelect(dishId)} />} />
    <Route path="/contactus" component={Contact}/>
    <Redirect to="/home"/>
      </Switch>
      <Footer />
          </div>
  );
}

export default Main;
