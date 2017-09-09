export default class PaymentCard {

  constructor({ id, name, number, expireAt, cvv, cardFlag }) {
    this.id = id || 0;
    this.name = name;
    this.number = number;
    this.expireAt = expireAt;
    this.cvv = cvv;
    this.cardFlag = cardFlag;
  }

  static sample(limit = 4) {
    const r = [];
    const expire = new Date();
    const k = ['visa', 'master', 'amex'];
    r.push(new PaymentCard({
      id: -1,
      name: '',
      number: '',
      cardFlag: 'new',
      expireAt: new Date() }));
    expire.setMonth(expire.getMonth() + 1);
    for (let i = 1; i <= limit; i += 1) {
      expire.setMonth(expire.getMonth() + i);
      r.push(new PaymentCard({
        id: i * (10 * Math.random()).toFixed(0),
        name: `Cartão ${i}`,
        number: 'xxxx xxxx xxxx 1234',
        cvv: (i * (10000 * Math.random()).toFixed(0)) % 999,
        expireAt: expire,
        cardFlag: k[i % 3],
      }));
    }
    return r;
  }
}
