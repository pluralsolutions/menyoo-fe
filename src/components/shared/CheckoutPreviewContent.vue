<template>
  <div :class="{ 'hide': !previewIsOpen }" style="heigth:100%">
    <div @click="toogle" class="checkout-preview-content-container" />
    <div class="nav-preview">
      <div class="gradient-top"/>
      <div v-if="order && order.products && order.products.length > 0" class="has-orders" @click.native="toogle">
        <div class="title-items">Você tem <strong>{{order.products.length}} itens</strong> no carrinho</div>
        <div class="scrollable-items">
          <PreviewSelectedProducts />
        </div>
        <div class="total-value">
          <p>Total do pedido</p>
          <Currency color="red" :value="order.totalValue"/>
          <ButtonComponent @click.native="toogle" routerLinkTo="/checkout" size="full" type="secondary">Finalizar Pedido</ButtonComponent>
        </div>
      </div>
      <div v-else class="no-order" @click="toogle">
        <div class="negative-box">
          Você ainda <strong>não possui</strong> itens no seu carrinho
        </div>
        <ButtonComponent routerLinkTo="/restaurantes/bar-do-ze" size="large" class="start-order">Iniciar pedido</ButtonComponent>
      </div>
    </div>
  </div>
</template>

<script>
import PreviewSelectedProducts from '@/components/shared/PreviewSelectedProducts';
import ProductInfo from '@/components/shared/ProductInfo';
import Currency from '@/components/shared/Currency';

import { mapGetters } from 'vuex';

import serviceOrder from '@/service/order_service';

export default {
  components: {
    ProductInfo,
    PreviewSelectedProducts,
    Currency,
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
  created() {
    if (this.user) {
      serviceOrder.currentOrder(
        this.$store.dispatch, {
          restaurantID: 1,
          userID: this.user.uid,
        },
      );
    }
  },
  computed: {
    ...mapGetters([
      'order',
      'user',
    ]),
  },
};
</script>

<style src="@/assets/styles/shared/checkout-preview-content.css">
</style>
