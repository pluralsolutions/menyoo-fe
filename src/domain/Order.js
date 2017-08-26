import Product from './Product';

export default class Pedido {
  constructor(product = { type: Product }, value = { type: Number }, quantity = { type: Number }) {
    this.product = product;
    this.value = value;
    this.quantity = quantity;
  }
}
