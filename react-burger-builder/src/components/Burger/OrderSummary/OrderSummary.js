import React from "react";
import Aux from "../../../hoc/Aux";
const orderSummary = props => {
  const ingredients = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with following ingredients</p>
      <ul>{ingredients}</ul>
      <p>Continue to Chekout?</p>
    </Aux>
  );
};

export default orderSummary;
