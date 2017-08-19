<template>
  <div @click="toogle" class="cart-icon-container" />
</template>

<script>
export default {
  methods: {
    toogle: function toogle() {
      this.$emit('toogle');
    },
  },
};
</script>

<style>
  @import '../../assets/styles/shared/cart-icon.css';
</style>
