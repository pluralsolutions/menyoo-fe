<template>
  <div class="navigation-bar-content">
    <div class="navigation-fixed">
      <div @click="back" class="back">Voltar</div>
      <div class="page-title" v-if="title">{{title}}</div>
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
