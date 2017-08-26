export default class Product {

  constructor({ id, title, description, image, unitPrice, score, ingredients }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.image = image;
    this.unitPrice = unitPrice;
    this.score = score;
    this.ingredients = ingredients;
  }

  static sample(limit = 1) {
    const images = [
      'http://www.pizzasdonatello.com.br/imagens/slides/7867e857eef46fd12dfbd2105dc4e3e6.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUhAGJJABIFdWDSc4ysVMwaIbeXja7Dz_3XuVLWKnY6BfsJfHMWA',
      'http://www.pizzasdonatello.com.br/imagens/slides/7867e857eef46fd12dfbd2105dc4e3e6.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUhAGJJABIFdWDSc4ysVMwaIbeXja7Dz_3XuVLWKnY6BfsJfHMWA',
      'http://www.pizzasdonatello.com.br/imagens/slides/7867e857eef46fd12dfbd2105dc4e3e6.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUhAGJJABIFdWDSc4ysVMwaIbeXja7Dz_3XuVLWKnY6BfsJfHMWA',
    ];
    const titles = [
      'Queijo mussarela e massa média caseira',
      'Queijo mussarela e tomates frescos e massa média caseira',
      'Queijo mussarela e massa média caseira',
      'Queijo mussarela e tomates frescos e massa média caseira',
      'Queijo mussarela e massa média caseira',
      'Queijo mussarela e tomates frescos e massa média caseira',
    ];

    const products = [];
    for (let x = 0; x < limit; x += 1) {
      const index = Math.floor((Math.random() * (limit - 1)) + 1);
      const sampleData = {
        id: x,
        title: titles[index],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        image: images[index],
        unitPrice: 32.23,
        score: (Math.random() * (100 - 10)) + 10,
        ingredients: [],
      };

      products.push(new Product(sampleData));
    }

    return products;
  }
}
