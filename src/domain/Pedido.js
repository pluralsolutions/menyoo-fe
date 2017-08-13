import Prato from './Prato';

export default class Pedido {
  constructor(prato = { type: Prato }, valor, quantidade) {
    this.prato = prato;
    this.valor = valor;
    this.quantidade = quantidade;
  }
}
