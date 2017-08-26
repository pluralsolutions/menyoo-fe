<template>
  <div>
    <div class="product">
      <div class="product-photo">
        <img class="product-foto" :src="prato.image" :alt="prato.title">
      </div>
      <div class="product-detail">
        <div>
          <img :class="{'product-estrelas':true, 'product-estrelas-opaco':num>prato.rate}" src="../../assets/images/estrela.svg" v-for="num in 5" v-bind:key="num" />
        </div>
        <div class="product-title">
          <h2>{{prato.title}}</h2>
        </div>
        <div class="product-desc">
          <h3>{{prato.description}}</h3>
        </div>
        <div class="product-value">
          R$ <label>{{ prato.unitPrice | currency }}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Prato from '@/domain/Product';

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
