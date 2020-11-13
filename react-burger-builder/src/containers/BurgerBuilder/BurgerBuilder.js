import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2
    },
    totalPrice: 4
  };

  addIngredientHandler(type) {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount + 1;
    const updatedIngredient = { ...this.state.ingredients };
    updatedIngredient[type] = newCount;
    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({ ingredients: updatedIngredient, totalPrice: newPrice });
  }

  removeIngredientHandler(type) {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const newCount = oldCount - 1;
    const updatedIngredient = { ...this.state.ingredients };
    updatedIngredient[type] = newCount;
    const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
    this.setState({ ingredients: updatedIngredient, totalPrice: newPrice });
  }

  render() {
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler.bind(this)}
          ingredientRemoved={this.removeIngredientHandler.bind(this)}
          disabled={disabledInfo}
        />
      </Aux>
    );
  }
}
export default BurgerBuilder;
