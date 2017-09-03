export default class User {

  constructor(token = '', name = '', urlPhoto = '/static/img/user.jpg', email = '', phone = '', birth = '', cpf = '') {
    this.token = token;
    this.name = name;
    this.urlPhoto = urlPhoto;
    this.email = email;
    this.phone = phone;
    this.birth = birth;
    this.cpf = cpf;
  }
  clone = () =>
  new User(this.token, this.name, this.urlPhoto, this.email, this.phone, this.birth, this.cpf);

  static n(mod) {
    return Math.floor(Math.random() * 1984 * 12 * 6 * 4) % (mod);
  }

  static sample(commingFrom) {
    const token = `${this.n(9999)}-${commingFrom}-${this.n(99999)}`;
    return new User(token, 'Gabriel Lucas de Toledo Ribeiro', '/static/img/user.jpg', 'gltr@pluralsolutions.com.br', '(11) 98181-5555', '06/12/1984', '11111111111');
  }
}
