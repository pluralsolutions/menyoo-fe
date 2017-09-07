export default class PaymentCard {

  constructor({ id, name, number, expireAt, cvv }) {
    this.id = id || 0;
    this.name = name;
    this.number = number;
    this.expireAt = expireAt;
    this.cvv = cvv;
  }

  static sample(limit = 2) {
    const r = [];
    const expire = new Date();
    r.push(new PaymentCard({
      id: -1,
      name: '',
      number: '',
      expireAt: expire }));
    // expire.setMonth(expire.getMonth() + 1);
    for (let i = 1; i <= limit; i += 1) {
      expire.setMonth(expire.getMonth() + (1 * i));
      r.push(new PaymentCard({
        id: i * (10 * Math.random()).toFixed(0),
        name: `Cartão ${i}`,
        number: 'xxxx xxxx xxxx 1234',
        expireAt: expire }));
    }
    return r;
  }
}
