<template>
  <div class="checkout-container">
    <NavigationBar type="checkout">Checkout</NavigationBar>
    <div class="order-items">
      <ul>
        <li v-for="(order, index) in orders">
          <span class="product-quantity">
            {{order.productQuantity}} unid
          </span>
          <div>
            <ProductInfo :product="order.product" :noSummary="true" :noRating="true" />
            <span class="ingredient-item" v-for="ingredient in order.ingredients"> +{{ingredient.name}}</span>
            <Counter :plusCallback="addProductIntoOrder.bind(null, index)"
                     :minusCallback="removeProductIntoOrder.bind(null, index)" />
          </div>
        </li>
      </ul>
      <div class="order-total">
        <span class="desc">Total pedido</span>
        <span class="price">R$ 56,90</span>
      </div>

      <ButtonComponent size="large">Enviar pedido para o chef</ButtonComponent>
    </div>
  </div>
</template>

<script>
import NavigationBar from '@/components/shared/NavigationBar';
import ProductInfo from '@/components/shared/ProductInfo';
import Counter from '@/components/shared/Counter';
import ButtonComponent from '@/components/shared/Button';

import { mapGetters } from 'vuex';

export default {
  components: {
    NavigationBar,
    ProductInfo,
    Counter,
    ButtonComponent,
  },
  methods: {
    addProductIntoOrder(orderIndex) {
      this.$store.dispatch('duplicateItemOnOrder', orderIndex);
    },
    removeProductIntoOrder(orderIndex) {
      this.$store.dispatch('remoteItemFromOrder', orderIndex);
    },
  },
  computed: {
    ...mapGetters([
      'orders',
    ]),
  },
};
</script>

<style>
  .order-items {
    margin-top: 30px;
    padding: 0 20px;
  }
  .order-items li {
    padding: 0;
  }
  .order-total {
    display: flex;
    justify-content: space-between;
  }

  .order-total .desc{
    text-transform: uppercase;
    font-weight: bold;
  }
  .order-total .price {
    font-size: 16px;
    font-weight: bold;
    color: #33cc66;
  }
</style>
