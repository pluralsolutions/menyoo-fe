export default class User {

  constructor(user) {
    this.token = user.token;
    this.uid = user.uid;
    this.name = user.name || user.displayName || user.email;
    this.photoURL = user.photoURL || '/static/img/user_icon.svg';
    this.email = user.email;
    this.phoneNumber = user.phoneNumber;
    this.birthDate = user.birthDate;
    this.cpf = user.cpf;
    this.providerId = user.providerId;
  }

  clone() {
    return new User(this);
  }

  static n(mod) {
    return Math.floor(Math.random() * 1984 * 12 * 6 * 4) % (mod);
  }

  static sample(commingFrom) {
    const token = `${this.n(9999)}-${commingFrom}-${this.n(99999)}`;
    return new User({
      token,
      name: 'Gabriel Lucas de Toledo Ribeiro',
      photoURL: '/static/img/user.jpg',
      email: 'gltr@pluralsolutions.com.br',
      phoneNumber: '(11) 98181-5555',
      birthDate: '06/12/1984',
      cpf: '11111111111',
    });
  }
}
