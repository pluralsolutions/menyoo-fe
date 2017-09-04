<template>
  <div class="checkout-container">
    <NavigationBar>Checkout</NavigationBar>
    <div class="products">
      <ul>
        <li v-for="order in orders">
          <ProductInfo :product="order.product" :noSummary="true" :noRating="true" />
          <span class="ingredient-item" v-for="ingredient in order.ingredients"> +{{ingredient.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import NavigationBar from '@/components/shared/NavigationBar';
import ProductInfo from '@/components/shared/ProductInfo';

import { mapGetters } from 'vuex';

export default {
  components: {
    NavigationBar,
    ProductInfo,
  },
  computed: {
    ...mapGetters([
      'orders',
    ]),
  },
};
</script>
