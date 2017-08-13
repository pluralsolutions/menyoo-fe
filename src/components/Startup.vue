<template>
  <div class="inicial">
    <div class="bg_inicial">
      <div class="img"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data() {
      return {
        msg: 'Hello!',
      };
    },
    created() {
      // fazer checagem se o usuario já está logado
      setTimeout(() => { this.$router.push('/Home'); }, 1500);
    },
  };
</script>

<style scoped>
  @import '../assets/styles/startup.css';
</style>
