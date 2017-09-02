<template>
  <div class="product-detail-container">
    <NavigationBar>Descrição do Produto</NavigationBar>
    <img :src="product.image" class="product-galery" />  <!-- Should be a Galery Component-->
    <div class="product-info">
      <ProductInfo :product="product" v-model:value="productQuantity" :additionalPrice="additionalPrice"/>
      <ProductIngredientList :product="product" v-model:value="additionalPrice" :onSubmit="addOrder" />
    </div>
  </div>
</template>

<script>
import NavigationBar from '@/components/shared/NavigationBar';
import ProductInfo from '@/components/shared/ProductInfo';
import ProductIngredientList from '@/components/shared/ProductIngredientList';

import Product from '@/domain/Product';
import Order from '@/domain/Order';

export default {
  components: {
    NavigationBar,
    ProductInfo,
    ProductIngredientList,
  },
  data() {
    return {
      productQuantity: 0,
      product: null,
      additionalPrice: 0,
    };
  },
  methods: {
    addOrder: function addOrder(event) {
      const checkboxs = event.target.querySelectorAll('input:checked');
      const selectedIngredients = [];
      for (let x = 0; x < checkboxs.length; x += 1) {
        const ingredientElement = checkboxs[x].parentElement.getElementsByClassName('ingredient-name')[0];
        selectedIngredients.push({ id: checkboxs[x].value, name: ingredientElement.innerText });
      }

      const order = new Order({
        product: this.product,
        ingredients: selectedIngredients,
        productQuantity: this.productQuantity,
      });

      this.$store.dispatch('addItemToOrder', order);
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
