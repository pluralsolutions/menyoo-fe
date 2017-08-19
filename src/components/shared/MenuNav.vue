<template>
  <nav :class="{'slide-in': isOpen}" class="menu-container" id="menu-content">
    <div class="menu">
      <a @click="toogle" class="close">X</a>
      <div class="profile">
        <div class="user-img">
          <PhotoCircle :src="user.urlPhoto" :alt="`${user.name}`" size="69"></PhotoCircle>
        </div>
        <div class="user-name">
          Gabriel Lucas
        </div>
      </div>
      <ul class="menu-nav">
        <li class="menu-item edit-profile">
          <router-link v-on:click.native="toogle" to="/perfil">Editar perfil</router-link>
        </li>
        <li class="menu-item tracking-orders">
          <router-link v-on:click.native="toogle" to="/pedidos/acompanhar">Acompanhar pedido</router-link>
        </li>
      </ul>

      <ul class="menu-secondary">
        <li class="menu-item logout">
          <router-link to="/logout">Sair</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>

import PhotoCircle from '@/components/shared/PhotoCircle';
import User from '@/domain/User';

export default {
  components: {
    PhotoCircle,
    User,
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isOpen: false,
      user: new User('Gabriel Toledo', '/static/img/user.jpg'),
    };
  },
  watch: {
    value: function val() {
      this.isOpen = this.value;
    },
  },
  methods: {
    toogle() {
      this.$emit('input', this.isOpen);
      this.$emit('toogle');
    },
  },
};
</script>
<style>
  @import '../../assets/styles/shared/menu-nav.css';
</style>
