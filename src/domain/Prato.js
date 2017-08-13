export default class Prato {

  constructor(titulo = '', descricao = '', urlPhoto = '', estrelas = 0) {
    this.id = 1;
    this.titulo = titulo;
    this.descricao = descricao;
    this.urlPhoto = urlPhoto;
    this.estrelas = estrelas;
  }
}
