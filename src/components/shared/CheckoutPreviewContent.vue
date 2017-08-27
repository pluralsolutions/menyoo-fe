<template>
  <div @click="toogle" :class="{'checkout-preview-content-container': true, 'hide': !previewIsOpen}">
    <div v-if="selectedProducts.length === 0" class="no-order">
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
    selectedProducts: {
      type: Array,
      default: () => [],
    },
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
};
</script>

<style>
  @import '../../assets/styles/shared/checkout-preview-content.css';
</style>
