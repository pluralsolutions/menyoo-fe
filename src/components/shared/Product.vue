<template>
  <div>
    <div class="product">
      <div class="product-photo">
        <img class="product-foto" :src="prato.urlPhoto" :alt="prato.titulo">
      </div>
      <div class="product-detail">
        <div class="">
          <img class="product-estrelas" src="../../assets/images/estrela.svg" v-for="num in prato.estrelas" v-bind:key="num" />
          <img class="product-nao-estrelas" src="../../assets/images/estrela.svg" v-for="num in 5-prato.estrelas" v-bind:key="num" />
        </div>
        <div class="product-title">
          <h2>{{prato.titulo}}</h2>
        </div>
        <div class="product-desc">
          <h3>{{prato.descricao}}</h3>
        </div>
        <div class="product-value">
          R$ <label>{{valor}}</label>
        </div>
        <div class="product-qtd">
          <div class="product-plus" @click="quantidade=(quantidade>=50?49:quantidade)+1"></div>
          <div>{{quantidade}}</div>
          <div class="product-minus" @click="quantidade=(quantidade>0?quantidade:1)-1"/></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Prato from '../../domain/Prato';
// import Pedido from '../../domain/Pedido';

export default {
  props: {
    prato: {
      type: Prato,
    },
  },
  data() {
    return {
      quantidade: 0,
      valor: 10,
    };
  },
};
</script>
<style>
  @import '../../assets/styles/shared/product.css';
</style>
