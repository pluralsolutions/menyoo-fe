export default class Order {
  constructor({ products = [], totalValue = 0 }) {
    this.products = products;
    this.totalValue = totalValue;
  }

  addProduct(productOrder) {
    const productIndex = this.products.findIndex(p => productOrder.equalTo(p));
    if (productIndex >= 0) {
      this.products[productIndex].productQuantity += productOrder.productQuantity;
    } else {
      this.products.push(productOrder);
    }

    this.totalValue += productOrder.productOrderIngredients.sumAdditionalPrice() +
                        (productOrder.productQuantity * productOrder.product.unitPrice);
  }
}
