<template>
  <div class="product-detail-container">
    <NavigationBar>Descrição do Produto</NavigationBar>
    <img :src="product.image" class="product-galery" />  <!-- Should be a Galery Component-->
    <div class="product-info">
      <ProductInfo :product="product" v-model="productQuantity" :additionalPrice="additionalPrice"/>
      <ProductIngredientList :product="product" v-model="additionalPrice" :onSubmit="addOrder" />
    </div>
  </div>
</template>

<script>
import NavigationBar from '@/components/shared/NavigationBar';
import ProductInfo from '@/components/shared/ProductInfo';
import ProductIngredientList from '@/components/shared/ProductIngredientList';

import Product from '@/domain/Product';
import ProductOrder from '@/domain/ProductOrder';

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
      const productIngredients = [];
      let additionalPrice = 0;
      for (let x = 0; x < checkboxs.length; x += 1) {
        const ingredientElement = checkboxs[x].parentElement.getElementsByClassName('ingredient-name')[0];
        const price = checkboxs[x].getAttribute('data-price');
        if (price) additionalPrice = parseFloat(price);

        productIngredients.push(
          { id: checkboxs[x].value, name: ingredientElement.innerText, additionalPrice },
        );
      }

      const productOrder = new ProductOrder({
        product: this.product,
        productOrderIngredients: productIngredients,
        productQuantity: this.productQuantity,
      });

      this.$store.dispatch('addProductToOrder', productOrder);

      // eslint-disable-next-line
      alert('Item adicionado ao carrinho!');
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
