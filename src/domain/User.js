export default class User {

  constructor(token, name = '', urlPhoto = '') {
    this.token = token;
    this.name = name;
    this.urlPhoto = urlPhoto;
  }

  static sample() {
    return new User('123345', 'Gabriel Lucas de Toledo Toledo', 'http://tudosobrecachorros.com.br/wp-content/uploads/cachorro-independente.jpg');
  }
}
