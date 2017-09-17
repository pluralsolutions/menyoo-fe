<template>
  <div>
    <div @click="toogle" :class="{'checkout-preview-content-container': true, 'hide': !previewIsOpen}" />

    <div :class="{ 'nav-preview': true, 'hide': !previewIsOpen }">
      <div v-if="order === null" class="no-order">
        <div class="negative-box">
          Você ainda <strong>não possui</strong> itens no seu carrinho
        </div>
        <ButtonComponent routerLinkTo="/restaurantes/bar-do-ze" size="large" class="start-order" @click.native="toogle">Iniciar pedido</ButtonComponent>
      </div>
      <div v-else class="has-orders">
        <span class="title-items">Você tem <strong>{{order.products.length}} itens</strong> no carrinho</span>
        <PreviewSelectedProducts />
        <div class="total-value">
          <p>Total do pedido</p>
          <Currency color="red" :value="order.totalValue"/>
          <router-link to="/checkout">
            <span @click="toogle">Finalizar pedido</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PreviewSelectedProducts from '@/components/shared/PreviewSelectedProducts';
import ProductInfo from '@/components/shared/ProductInfo';
import Currency from '@/components/shared/Currency';

import { mapGetters } from 'vuex';

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
  computed: {
    ...mapGetters([
      'order',
    ]),
  },
};
</script>

<style src="@/assets/styles/shared/checkout-preview-content.css">
</style>
