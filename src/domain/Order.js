export default class Order {
  constructor({ product, totalValue, quantity }) {
    this.product = product;
    this.totalValue = totalValue;
    this.quantity = quantity;
  }
}
