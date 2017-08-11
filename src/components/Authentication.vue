<template>
  <div class="authentication-container">
    <div class="authenticators">
      <div class="facebook">
        Entre com facebook
      </div>
      <div class="google">
        Entre com Google
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'authentication',
  data() {
    return {
      filtro: '',
      pratos: [],
    };
  },
};
</script>

<style scoped>
  @import '../assets/styles/authentication.css'
</style>
