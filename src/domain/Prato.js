export default class Prato {

  constructor(titulo = '', descricao = '', urlPhoto = '', valor = 9999.9, estrelas = 0) {
    this.id = 1;
    this.titulo = titulo;
    this.descricao = descricao;
    this.urlPhoto = urlPhoto;
    this.estrelas = estrelas;
    this.valor = valor;
  }

  static sample() {
    return [
      new Prato('Pizza de Mussarela', 'Queijo mussarela e massa média caseira', 'http://www.pizzasdonatello.com.br/imagens/slides/7867e857eef46fd12dfbd2105dc4e3e6.jpg', 12, 5),
      new Prato('Pizza de Manjericão', 'Queijo mussarela e tomates frescos e massa média caseira', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUhAGJJABIFdWDSc4ysVMwaIbeXja7Dz_3XuVLWKnY6BfsJfHMWA', 32.6, 4),
      new Prato('Pizza de Mussarela', 'Queijo mussarela e massa média caseira', 'http://www.pizzasdonatello.com.br/imagens/slides/7867e857eef46fd12dfbd2105dc4e3e6.jpg', 15.98, 3),
      new Prato('Pizza de Manjericão', 'Queijo mussarela e tomates frescos e massa média caseira', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUhAGJJABIFdWDSc4ysVMwaIbeXja7Dz_3XuVLWKnY6BfsJfHMWA', 33, 3),
      new Prato('Pizza de Mussarela', 'Queijo mussarela e massa média caseira', 'http://www.pizzasdonatello.com.br/imagens/slides/7867e857eef46fd12dfbd2105dc4e3e6.jpg', 20.8, 2),
      new Prato('Pizza de Manjericão', 'Queijo mussarela e tomates frescos e massa média caseira', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUhAGJJABIFdWDSc4ysVMwaIbeXja7Dz_3XuVLWKnY6BfsJfHMWA', 20, 1),
    ];
  }
}
