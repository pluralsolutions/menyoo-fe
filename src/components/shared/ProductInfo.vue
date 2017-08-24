<template>
  <div>
    <div class="product-header">
      <span class="product-price-unit">Preço unitário</span>
      <span class="product-price">R$ 43,00</span>
      <div class="product-evaluations" v-if="score >= 20 ">
        <span class="star-neutral"></span>
        <span class="star-active" v-bind:style="{width: score + '%'}"></span>
      </div>
      </div>
      <div class="product-content">
        <div class="product-title">Pizza Muçarela grande</div>
        <div class="product-desc">
          PIZZA COM MASSA TRANDICIONAL, RECHEIO DE MOLHO DE
          TOMATE FRESCO, CEBOLA DOURADA E MUSSARELA SADIA.
        </div>
      </div>

      <div class="product-add-remove">
        <div class="add" />
        <div class="current-quantity">01</div>
        <div class="remove" />
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      score: 20,
    };
  },
};
</script>

<style>
  @import '../../assets/styles/shared/product-info.css';
</style>
