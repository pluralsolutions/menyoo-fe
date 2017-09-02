<template>
  <div>
    <div @click="show = !show" class="burger-container">
      <div class="bar-item" />
      <div class="bar-item" />
      <div class="bar-item" />
    </div>

    <transition name="fade">
      <nav v-if="show" @click="show = !show" class="menu-container">
        <div class="menu">
          <div class="profile">
            <div class="user-img">
              <PhotoCircle :src="user.urlPhoto" :alt="`${user.name}`" size="69"></PhotoCircle>
            </div>
            <div class="user-name">
              {{ user.name }}
            </div>
          </div>

          <ul class="menu-nav">
            <li class="menu-item home">
              <router-link to="/restaurantes/bar-do-ze">Ver cardápio</router-link>
            </li>
            <li class="menu-item edit-profile">
              <router-link to="/perfil">Editar perfil</router-link>
            </li>
            <li class="menu-item tracking-orders">
              <router-link :to="{name: 'awaiting-order'}">Acompanhar pedido</router-link>
            </li>
          </ul>

          <ul class="menu-secondary">
            <li class="menu-item logout">
              <a @click="signOut">Sair</a>
            </li>
          </ul>
        </div>
      </nav>
    </transition>
  </div>
</template>
<script>

import PhotoCircle from '@/components/shared/PhotoCircle';

export default {
  components: {
    PhotoCircle,
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    signOut() {
      this.$store.dispatch('signOut').then(
        () => setTimeout(() => this.$router.push('/')));
    },
  },
  computed: {
    user: function u() {
      return this.$store.getters.loggedUser;
    },
  },
};
</script>
<style>
  @import '../../assets/styles/shared/menu-sidebar.css';
</style>
