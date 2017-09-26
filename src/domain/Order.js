import ProductOrder from './ProductOrder';

export default class Order {
  constructor({ id, products = [] }) {
    const productList = [];

    products.forEach((product) => {
      productList.push(new ProductOrder(product));
    });

    this.id = id;
    this.products = productList;
    this.totalValue = this.calculateTotalValue();
    this.inserted_at = Date.now;
  }

  updateTotalValue() {
    this.totalValue = 0;
    this.products.forEach((product) => {
      this.totalValue += product.productQuantity *
          (product.productOrderIngredients.sumAdditionalPrice() + product.product.unitPrice);
    });
  }

  calculateTotalValue() {
    let price = 0;
    this.products.forEach((product) => {
      price += product.totalPriceCents;
    });
    return price;
  }

  quantity() {
    return this.products.length;
  }

  addProduct(productOrder) {
    const productIndex = this.products.findIndex(p => productOrder.equalTo(p));
    if (productIndex >= 0) {
      this.products[productIndex].productQuantity += productOrder.productQuantity;
    } else {
      this.products.push(productOrder);
    }
    this.updateTotalValue();
  }

  removeProduct(productOrder, quantity) {
    const { products } = this;
    const productIndex = products.findIndex(p => productOrder.equalTo(p));

    if (productIndex < 0) return;

    if (products[productIndex].productQuantity <= 1) {
      products.splice(productIndex);
      return;
    }

    products[productIndex].productQuantity -= quantity;

    this.updateTotalValue();
  }
}
