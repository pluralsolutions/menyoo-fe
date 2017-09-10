export default class Ingredient {
  constructor({ id, name, additionalPrice }) {
    this.id = id;
    this.name = name;
    this.additionalPrice = additionalPrice;

    Object.freeze(this);
  }
}