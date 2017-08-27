<template>
  <div class="product-detail-container">
    <NavigationBar>Descrição do Produto</NavigationBar>
    <img :src="product.image" class="product-galery" />  <!-- Should be a Galery Component-->
    <div class="product-info">
      <ProductInfo :product="product"/>
      <div class="custom-ingredients">
        <span class="title">Personalize seus ingredientes</span>
        <ul class="ingredients-list">
          <li>
            <span @click="toogleOptions" class="ingredientes-section active">Padrões deste prato</span>
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
            <span @click="toogleOptions" class="ingredientes-section">Queijos</span>
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
    <div @click="addOrder" class="add-order">Adicionar ao pedido</div>
  </div>
</template>

<script>
import NavigationBar from '@/components/shared/NavigationBar';
import ProductInfo from '@/components/shared/ProductInfo';
import Product from '@/domain/Product';

export default {
  components: {
    NavigationBar,
    ProductInfo,
  },
  data() {
    return {
      product: null,
    };
  },
  methods: {
    toogleIt: function toogleIt(event) {
      event.target.classList.toggle('checked');
    },
    toogleOptions: function toogleOptions(event) {
      event.target.classList.toggle('active');
    },
    addOrder: function addOrder() {
      this.$router.push('/restaurantes/bar-do-ze');
    },
  },
  created() {
    this.product = Product.sample()[0];
  },
};
</script>

<style>
  @import '../assets/styles/product-detail.css'
</style>
