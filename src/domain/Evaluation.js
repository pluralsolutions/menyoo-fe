export default class Evaluation {
  constructor({ score, evaluationCount }) {
    this.score = score;
    this.evaluationCount = evaluationCount;
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
