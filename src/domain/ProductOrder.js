import IngredientProductOrder from '@/domain/IngredientProductOrder';

export default class ProductOrder {
  constructor({ product, productOrderIngredients, productQuantity }) {
    this.product = product;
    this.productQuantity = productQuantity;
    this.ingredients = productOrderIngredients;
  }

  get productOrderIngredients() {
    return new IngredientProductOrder({ ingredients: this.ingredients });
  }

  set productOrderIngredients(v) {
    this.ingredients = v;
  }

  equalTo(productOrder) {
    return productOrder.product.id === this.product.id &&
            this.productOrderIngredients.equalTo(productOrder.ingredients);
  }
}
