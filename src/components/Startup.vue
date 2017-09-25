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
    mounted() {
      setTimeout(() => {
        if (this.$root.user) {
          this.$router.push('/restaurantes/bar-do-ze');
        } else {
          this.$router.push('/auth');
        }
      }, 1600);
    },
  };
</script>

<style>
  @import '../assets/styles/startup.css';
</style>
