<template>
  <div class="checkout-container">
    <NavigationBar>Checkout</NavigationBar>
    <div class="products">
      <ul class="order-items">
        <li v-for="order in orders">
          <span class="product-quantity">
            {{order.productQuantity}} unid
          </span>
          <div>
            <ProductInfo :product="order.product" :noSummary="true" :noRating="true" />
            <span class="ingredient-item" v-for="ingredient in order.ingredients"> +{{ingredient.name}}</span>
            <Counter :plusCallback="addProductIntoOrder.bind(null, order.product)" 
                     :minusCallback="removeProductIntoOrder.bind(null, order.product)" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import NavigationBar from '@/components/shared/NavigationBar';
import ProductInfo from '@/components/shared/ProductInfo';
import Counter from '@/components/shared/Counter';

import { mapGetters } from 'vuex';

export default {
  components: {
    NavigationBar,
    ProductInfo,
    Counter,
  },
  methods: {
    addProductIntoOrder(product) {
      console.log(product);
    },
    removeProductIntoOrder(product) {
      console.log(product);
    },
  },
  computed: {
    ...mapGetters([
      'orders',
    ]),
  },
};
</script>
