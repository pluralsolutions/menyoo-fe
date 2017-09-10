<template>
  <div @click="toogle" :class="{'checkout-preview-content-container': true, 'hide': !previewIsOpen}">
    <div v-if="order === null" class="no-order">
      <div class="negative-box">
        Você ainda <strong>não possui</strong> itens no seu carrinho
      </div>
      <router-link to="/restaurantes/bar-do-ze">
        <ButtonComponent size="large" class="start-order" @click="toogle">Iniciar pedido</ButtonComponent>
      </router-link>
    </div>
    <div v-else class="has-orders">
      <span class="title-items">Você tem <strong>{{order.products.length}} itens</strong> no carrinho</span>
      <ul class="order-items">
        <li v-for="productOrder in order.products">
          <span class="product-quantity">
            {{productOrder.productQuantity}} unid
          </span>
          <div>
            <ProductInfo :product="productOrder.product" :summary="false" :rating="false" />
            <span
                  class="ingredient-item"
                  v-for="ingredient in productOrder.ingredients">
                  +{{ingredient.name}}
            </span>
          </div>
        </li>
      </ul>
      <div class="total-value">
        <p>Total do pedido</p>
        <p>R$ <span class="price">{{order.totalValue | currency}}</span></p>
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
    ...mapGetters([
      'order',
    ]),
  },
};
</script>

<style>
  @import '../../assets/styles/shared/checkout-preview-content.css';
</style>
