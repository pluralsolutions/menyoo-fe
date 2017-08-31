<template>
  <div class="product-detail-container">
    <NavigationBar>Descrição do Produto</NavigationBar>
    <img :src="product.image" class="product-galery" />  <!-- Should be a Galery Component-->
    <div class="product-info">
      <ProductInfo :product="product"/>
      <div class="custom-ingredients">
        <span class="title">Personalize seus ingredientes</span>
        <ul class="ingredients-list">
          <form v-on:submit.prevent="addOrder">
            <li v-for="group in product.ingredients">
              <span @click="toogleOptions" :class="{'ingredientes-section': true, active: group.standard}"> {{group.title}}</span>
              <ul>
                <li v-for="item in group.items">
                  <input type="checkbox" name="ingredients" :value="item.id" :checked="item.checked">
                  <span class="ingredient-name">{{item.name}}</span>
                  <span class="additional-cost" v-if="item.addionalPrice">+R$ {{item.addionalPrice | currency}}</span>
                </li>
              </ul>
            </li>
            <ButtonComponent>Adicionr ao pedido</ButtonComponent>
          </form>
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
import ButtonComponent from '@/components/shared/Button';

export default {
  components: {
    NavigationBar,
    ProductInfo,
    ButtonComponent,
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
    addOrder: function addOrder(event) {
      const checkboxs = event.target.querySelectorAll('input:checked');
      const selectedIngredients = [];
      for (let x = 0; x < checkboxs.length; x += 1) {
        selectedIngredients.push(checkboxs[x].value);
      }

      // this.$store.dispatch('addOrderItem', this.product);
      // this.$router.push('/restaurantes/bar-do-ze');
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
