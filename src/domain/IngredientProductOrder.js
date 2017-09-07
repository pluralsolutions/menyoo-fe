export default class IngredientProductOrder {
  constructor({ ingredients = [] }) {
    this.ingredients = ingredients;
    Object.freeze(this);
  }

  sumAdditionalPrice() {
    let additionalPrice = 0;

    this.ingredients.forEach(ingredient => (
      additionalPrice += ingredient.additionalPrice
    ));

    return additionalPrice;
  }

  additionalIngredients() {
    return this.ingredients.filter(ingredient => (
      ingredient.additionalPrice > 0
    ));
  }

  equalTo(ingredients) {
    if (ingredients.length !== this.ingredients.length) return false;

    for (let i = 0; i < ingredients.length; i += 1) {
      if (this.ingredients[i].id !== ingredients[i].id) return false;
    }
    return true;
  }
}
