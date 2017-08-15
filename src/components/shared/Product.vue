<template>
  <div>
    <div class="product">
      <div class="product-photo">
        <img class="product-foto" :src="prato.urlPhoto" :alt="prato.titulo">
      </div>
      <div class="product-detail">
        <div v-if="false">
          <img :class="{'product-estrelas':true, 'product-estrelas-opaco':num>prato.estrelas}" src="../../assets/images/estrela.svg" v-for="num in 5" v-bind:key="num" />
        </div>
        <div class="product-title">
          <h2>{{prato.titulo}}</h2>
        </div>
        <div class="product-desc">
          <h3>{{prato.descricao}}</h3>
        </div>
        <div class="product-value">
          R$ <label>{{ prato.valor | currency }}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Prato from '@/domain/Prato';
// import Pedido from '../../domain/Pedido';

export default {
  components: {
  },
  props: {
    prato: {
      type: Prato,
    },
  },
  data() {
    return {
      quantidade: 0,
    };
  },
};
</script>
<style>
  @import '../../assets/styles/shared/product.css';
</style>
