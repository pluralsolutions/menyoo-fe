<template>
  <div class="navigation-bar-content">
    <div class="navigation-fixed">
      <div @click="back" class="back">Voltar</div>
      <div v-bind:class="[{type_icon: true}, type]" v-if="type"><slot/></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['type'],
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
