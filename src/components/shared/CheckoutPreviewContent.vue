<template>
  <div @click="toogle" :class="{'checkout-preview-content-container': true, 'hide': !previewIsOpen}">
    <div v-if="orders.length === 0" class="no-order">
      <div class="negative-box">
        Você ainda <strong>não possui</strong> itens no seu carrinho
      </div>
      <router-link :to="{name: 'menu'}">
        <ButtonComponent size="large" class="start-order" @click="toogle">Iniciar pedido</ButtonComponent>
      </router-link>
    </div>
    <div v-else class="has-orders">
      <span class="title-items">Você tem <strong>{{orders.length}} itens</strong> no carrinho</span>
      <ul class="order-items">
        <li v-for="order in orders">
          <span class="product-quantity">
            {{order.productQuantity}} unid
          </span>
          <div>
            <ProductInfo :product="order.product" :noSummary="true" :noRating="true" />
            <span class="ingredient-item" v-for="ingredient in order.ingredients"> +{{ingredient.name}}</span>
          </div>
        </li>
      </ul>
      <div class="total-value">
        <p>Total do pedido</p>
        <p>R$ <span class="price">{{totalOrdersValue | currency}}</span></p>
        <router-link to="/checkout">Pagar</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  components: {
    ButtonComponent: () => import('@/components/shared/Button'),
    ProductInfo: () => import('@/components/shared/ProductInfo'),
  },
  data() {
    return {
      previewIsOpen: false,
    };
  },
  watch: {
    value: function val() {
      this.previewIsOpen = this.value;
    },
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toogle: function toogle() {
      this.$emit('input', this.previewIsOpen);
      this.$emit('toogle');
    },
  },
  computed: {
    totalOrdersValue: function totalOrdersValue() {
      let total = 0;
      for (let x = 0; x < this.orders.length; x += 1) {
        total += this.orders[x].totalValue;
      }

      return total;
    },
    ...mapGetters([
      'orders',
    ]),
  },
};
</script>

<style>
  @import '../../assets/styles/shared/checkout-preview-content.css';
</style>
