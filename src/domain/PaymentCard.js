export default class PaymentCard {

  constructor({ id, name, number, expireAt, cvv }) {
    this.id = id;
    this.name = name;
    this.number = number;
    this.expireAt = expireAt;
    this.cvv = cvv;
  }

  static sample(limit = 2) {
    const r = [];
    for (let i = 1; i <= limit; i += 1) {
      r.push(new PaymentCard({
        id: i * 10,
        name: `Cartão ${i}`,
        number: 'xxxx xxxx xxxx 1234',
        expiredAt: new Date() + (i * 55) }));
    }
    return r;
  }
}
