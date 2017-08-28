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
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  components: {
    ButtonComponent: () => import('@/components/shared/Button'),
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
  computed: mapGetters([
    'orders',
  ]),
};
</script>

<style>
  @import '../../assets/styles/shared/checkout-preview-content.css';
</style>
