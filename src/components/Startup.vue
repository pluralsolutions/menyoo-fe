<template>
  <div class="inicial">
    <div class="inicial_bg">
      <div class="inicial_logo">aafsas<br>dgsdgs<br></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data() {
      return {
        redirected: false,
      };
    },
    mounted() {
      // fazer checagem se o usuario já está logado
      setTimeout(() => { this.$router.push('/Home'); }, 1500);
    },
    activated() {
      // fazer checagem se o usuario já está logado
      setTimeout(() => { this.$router.push('/Home'); }, 1500);
    },
    created() {
      // fazer checagem se o usuario já está logado
      setTimeout(() => { this.$router.push('/Home'); }, 1500);
    },
  };
</script>

<style>
  @import '../assets/styles/startup.css';
</style>
