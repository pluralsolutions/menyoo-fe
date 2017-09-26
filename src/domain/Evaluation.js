export default class Evaluation {
  constructor({ score, quantity }) {
    this.score = score;
    this.evaluationCount = quantity;
  }

  evaluationCountSimplified() {
    if (this.evaluationCount < 999) {
      return this.evaluationCount;
    } else if (this.evaluationCount < 999999) {
      return `+${(this.evaluationCount / 1000).toFixed(0)} k`;
    }
    return `+${(this.evaluationCount / 1000000).toFixed(1)} M`;
  }
}
