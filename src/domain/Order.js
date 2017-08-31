export default class Order {
  constructor({ product, productQuantity, ingredients }) {
    this.product = product;
    this.productQuantity = productQuantity;
    this.ingredients = ingredients;

    Object.freeze(this);
  }
}
