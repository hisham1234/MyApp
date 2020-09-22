import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

function Dishdetail(props) {
  let dish = props.clickedDish;
  function renderDish(dish) {
    return (
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }

  function renderComments(comments) {
    return comments.map((cmt) => {
      const d = new Date(cmt.date);
      const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
      const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
      const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
      return (
        <div>
          <ul className="list-unstyled">
            <li>{cmt.comment}</li>
            <li>
              --{cmt.author}
              {`,${mo},${da},${ye}`}
            </li>
          </ul>
        </div>
      );
    });
  }
  return (
    <div class="container">
      {dish ? (
        <div className="row text-left">
          <div className="col-12 col-md-5 m-1 ">{renderDish(dish)}</div>
          <div className="col-12 col-md-5 m-1 ">
            <h4> Comments</h4>
            {renderComments(dish.comments)}
          </div>
        </div>
      ) : (
        <div> </div>
      )}
    </div>
  );
}

export default Dishdetail;
