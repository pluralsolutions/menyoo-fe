export default class User {

  constructor(token, name = '', urlPhoto = '', email = '', phone = '') {
    this.token = token;
    this.name = name;
    this.urlPhoto = urlPhoto;
    this.email = email;
    this.phone = phone;
    this.birth = null;
  }

  static n(mod) {
    return Math.floor(Math.random() * 1984 * 12 * 6 * 4) % (mod);
  }

  static sample(commingFrom) {
    const token = `${this.n(9999)}-${commingFrom}-${this.n(99999)}`;
    return new User(token, 'Gabriel Lucas de Toledo Ribeiro', '/static/img/user.jpg', 'gltr@pluralsolutions.com.br', '(11) 98181-5555');
  }
}
