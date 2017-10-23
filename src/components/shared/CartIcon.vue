<template>
  <div @click="toogle" class="cart-icon-container">
    <!-- <div class="cart-icon-text" v-if="text() > 2">{{text()}}</div> -->
    <div class="cart-icon-circle" v-if="text() > 0"></div>
  </div>
</template>

<script>

export default {
  methods: {
    toogle: function toogle() {
      this.$emit('toogle');
    },
    text() {
      return this.$store.getters.order.quantity();
    },
  },
};
</script>

<style>
  @import '../../assets/styles/shared/cart-icon.css';
</style>
