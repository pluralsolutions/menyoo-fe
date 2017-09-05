export default class Order {
  constructor({ product, productQuantity, ingredients, totalValue }) {
    this.product = product;
    this.productQuantity = productQuantity;
    this.ingredients = ingredients;
    this.totalValue = totalValue;

    Object.freeze(this);
  }
}
