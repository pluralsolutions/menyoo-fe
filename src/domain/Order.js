export default class Order {
  constructor({ products = [], totalValue = 0 }) {
    this.products = products;
    this.totalValue = totalValue;
  }

  updateTotalValue() {
    this.totalValue = 0;
    this.products.forEach((product) => {
      this.totalValue += product.productQuantity *
          (product.productOrderIngredients.sumAdditionalPrice() + product.product.unitPrice);
    });
  }

  quantity() {
    let quantity = 0;
    this.products.forEach((product) => {
      quantity += product.productQuantity;
    });
    return quantity;
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
