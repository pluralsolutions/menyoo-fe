<template>
  <div class="authentication-container">
    <div class="elements">
      <div class="plate"></div>
      <div class="authenticators">
        <div @click="signInFacebook" class="authenticator-item facebook">Entre com Facebook</div>
        <div @click="signInGoogle" class="authenticator-item google">Entre com Google</div>
        <div @click="signInEmail" class="authenticator-item menyoo-account" to="/home">Entre com Email</div>
      </div>
      <div class="menyoo-slogan"></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    signInFacebook: function signInFacebook() {
      this.$store.dispatch('signInFacebook');
      this.$router.push('home');
    },
    signInGoogle: function signInGoogle() {
      this.$store.dispatch('signInGoogle');
      this.$router.push('home');
    },
    signInEmail: function signInEmail() {
      this.$store.dispatch('signInEmail');
      this.$router.push('home');
    },
  },
};
</script>

<style>
  @import '../assets/styles/authentication.css'
</style>
