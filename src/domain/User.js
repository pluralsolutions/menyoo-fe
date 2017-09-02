export default class User {

  constructor(token, name = '', urlPhoto = '') {
    this.token = token;
    this.name = name;
    this.urlPhoto = urlPhoto;
  }

  static n(mod) {
    return Math.floor(Math.random() * 1984 * 12 * 6 * 4) % (mod);
  }

  static sample(a) {
    const token = `${this.n(9999)}-${a}-${this.n(99999)}`;
    return new User(token, 'Gabriel Lucas de Toledo Ribeiro', '/static/img/user.jpg');
  }
}
