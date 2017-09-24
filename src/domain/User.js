export default class User {

  constructor({ token, name, displayName, photoURL,
      email, phoneNumber, birthDate, cpf, uid }) {
    this.token = token;
    this.uid = uid;
    this.name = name || displayName || email;
    this.photoURL = photoURL || '/static/img/user.jpg';
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.birthDate = birthDate;
    this.cpf = cpf;
  }

  clone = () => new User(this);

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
