<template>
  <div class="inicial">
    <div class="inicial_bg">
      <div class="inicial_logo">
        Menyoo - Sua melhor experiencia gastronomica
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data() {
      return {
      };
    },
    mounted() {
      // fazer checagem se o usuario já está logado
      setTimeout(() => { this.$router.push('/Home'); }, 1500);
    },
    activated() {
      // fazer checagem se o usuario já está logado
      setTimeout(() => { this.$router.push('/Home'); }, 1550);
    },
    created() {
      // fazer checagem se o usuario já está logado
      setTimeout(() => { this.$router.push('/Home'); }, 1600);
    },
  };
</script>

<style>
  @import '../assets/styles/startup.css';
</style>
