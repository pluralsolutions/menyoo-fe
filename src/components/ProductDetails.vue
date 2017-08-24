<template>
  <div class="product-detail-container">
    <NavigationBar type="product-desc"/>
    <div class="product-galery" />  <!-- Should be a Galery Component-->
    <div class="product-info">
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
      <div class="custom-ingredients">
        <span class="title">Personalize seus ingredientes</span>
        <ul class="ingredients-list">
          <li>
            <span class="ingredientes-section">Padrões deste prato</span>
            <ul>
              <li>Padrão 1</li>
              <li>Padrão 2</li>
              <li>Padrão 3</li>
            </ul>
          </li>
          <li>
            <span class="ingredientes-section">Queijos</span>
            <ul>
              <li>
                <span class="checkbox checked" />
                <span class="ingredient-name">Queijo Gouda</span>
                <span class="additional-cost">+R$ 1,40</span>
              </li>
              <li>
                <span class="checkbox" />
                <span class="ingredient-name">Queijo Gorgonzola</span>
                <span class="additional-cost">+R$ 1,40</span>
              </li>
              <li>
                <span class="checkbox checked" />
                <span class="ingredient-name">Queijo Emental</span>
                <span class="additional-cost">+R$ 1,40</span>
              </li>
            </ul>
          </li>
        </ul>
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
  data() {
    return {
      score: 20,
    };
  },
};
</script>

<style>
  @import '../assets/styles/product-detail.css'
</style>
