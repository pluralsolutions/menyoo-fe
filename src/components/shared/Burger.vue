<template>
  <div @click="toogle" class="burger-container">
    <div class="bar-item" />
    <div class="bar-item" />
    <div class="bar-item" />
  </div>
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
  @import '../../assets/styles/shared/burger.css';
</style>
