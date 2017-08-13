<template>
  <div class="authentication-container">
    <div class="authenticators">
      <router-link class="authenticator-item facebook" to="/home">Entre com Facebook</router-link>
      <router-link class="authenticator-item google" to="/home">Entre com Google</router-link>
      <router-link class="authenticator-item menyoo-account" to="/home">Entre com Email</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'authentication',
  data() {
    return {
    };
  },
};
</script>

<style>
  @import '../assets/styles/authentication.css'
</style>
