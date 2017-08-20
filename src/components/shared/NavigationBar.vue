<template>
  <div class="navigation-bar-content">
    <div class="navigation-fixed">
      <span @click="back" class="back"></span>
      <div class="page-title">{{title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title'],
  methods: {
    back: function back() {
      this.$router.back();
    },
  },
};
</script>

<style>
  @import '../../assets/styles/shared/navigation-bar.css';
</style>
