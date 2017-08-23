<template>
  <div class="product-detail-container">
    <NavigationBar type="product-desc"/>
    <div class="product-galery" />  <!-- Should be a Galery Component-->
    <div class="product-info">
      <div class="product-header">
        <span class="product-price-unit">Preço unitário</span>
        <span class="product-price">R$ 43,00</span>
        <span class="product-evaluations"></span>
      </div>
      <div class="product-content">
        <div class="product-title">Pizza Muçarela grande</div>
        <div class="product-title">
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
  </div>
</template>

<script>
import NavigationBar from '@/components/shared/NavigationBar';

export default {
  components: {
    NavigationBar,
  },
};
</script>

<style>
  @import '../assets/styles/product-detail.css'
</style>
