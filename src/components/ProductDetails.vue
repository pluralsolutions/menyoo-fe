<template>
  <div class="product-detail-container">
    <NavigationBar type="product-desc"/>
    <div class="product-galery" />  <!-- Should be a Galery Component-->
    <div class="product-info">
      <ProductInfo />
      <div class="custom-ingredients">
        <span class="title">Personalize seus ingredientes</span>
        <ul class="ingredients-list">
          <li>
            <span class="ingredientes-section">Padrões deste prato</span>
            <ul>
              <li>
                <span @click="toogleIt" class="checkbox checked" />
                <span class="ingredient-name">Tomate</span>
              </li>
              <li>
                <span @click="toogleIt" class="checkbox checked" />
                <span class="ingredient-name">Azeite</span>
              </li>
            </ul>
          </li>
          <li>
            <span class="ingredientes-section">Queijos</span>
            <ul>
              <li>
                <span @click="toogleIt" class="checkbox checked" />
                <span class="ingredient-name">Queijo Gouda</span>
                <span class="additional-cost">+R$ 1,40</span>
              </li>
              <li>
                <span @click="toogleIt" class="checkbox" />
                <span class="ingredient-name">Queijo Gorgonzola</span>
                <span class="additional-cost">+R$ 1,40</span>
              </li>
              <li>
                <span @click="toogleIt" class="checkbox checked" />
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
import ProductInfo from '@/components/shared/ProductInfo';

export default {
  components: {
    NavigationBar,
    ProductInfo,
  },
  methods: {
    toogleIt: function toogleIt(event) {
      event.target.classList.toggle('checked');
    },
  },
};
</script>

<style>
  @import '../assets/styles/product-detail.css'
</style>
