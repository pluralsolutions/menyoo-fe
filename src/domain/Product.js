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
      'http://www.pizzasdonatello.com.br/imagens/slides/9cc5504d77423192510d02e0f3f798ee.jpg',
      'http://www.pizzasdonatello.com.br/imagens/slides/6f2bc52315cfb4f7713f2d181122248c.jpg',
    ];
    const titles = [
      'Pizza Queijo mussarela e tomates frescos e massa média caseira',
      'Pizza doce de Figo e pessego',
      'Lasanha presunto e queijo cremoso',
    ];

    const products = [];
    const descript = function d() {
      let r = 'Lorem ipsum dolor sit amet';
      const rnd = Math.floor(Math.random() * 4);
      if (rnd % 2 === 0) r += ', consectetur adipiscing elit';
      if (rnd % 3 === 0) r += ', sed do eiusmod tempor incididunt ut labore';
      if (rnd % 4 === 0) r += ', fusce ultrices quam id semper dictum';
      return r;
    };
    for (let x = 0; x < limit; x += 1) {
      const index = Math.floor((Math.random() * (limit - 1)) + 1) % titles.length;
      const sampleData = {
        id: x,
        title: titles[index],
        description: descript(),
        image: images[index],
        unitPrice: (Math.random() * 30) + 9,
        score: (Math.random() * (100 - 10)) + 10,
        ingredients: [],
      };

      products.push(new Product(sampleData));
    }

    return products;
  }
}
