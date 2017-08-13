<template>
  <div>
    <div class="product">
      <div class="product-photo">
        <img class="product-foto" :src="prato.urlPhoto" :alt="prato.titulo">
      </div>
      <div class="product-detail">
        <div class="">
          <img :class="{'product-estrelas':true, 'product-estrelas-opaco':num>prato.estrelas}" src="../../assets/images/estrela.svg" v-for="num in 6" v-bind:key="num" />
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
        <Counter v-model="quantidade"></Counter>
      </div>
    </div>
  </div>
</template>

<script>
import Counter from '@/components/shared/Counter';
import Prato from '@/domain/Prato';
// import Pedido from '../../domain/Pedido';

export default {
  components: {
    Counter,
  },
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
