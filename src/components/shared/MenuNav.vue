<template>
  <div>
    <Burger ref="burg" v-model="isOpen"></Burger>
    <nav @click="hide" :class="{'slide-in': !isOpen, 'slide-out': isOpen}" class="menu-container" id="menu-content">
      <div class="menu">
        <div class="profile">
          <div class="user-img">
            <img />
          </div>
          <div class="user-name">
            Gabriel Lucas
          </div>
        </div>
        <ul class="menu-nav">
          <li class="menu-item edit-profile">
            <router-link to="/perfil">Editar perfil</router-link>
          </li>
          <li class="menu-item tracking-orders">
            <router-link to="/pedidos/acompanhar">Acompanhar pedido</router-link>
          </li>
          <li class="menu-item orders-opens">
            <router-link to="/">Pedido em aberto</router-link>
            Débito atual
            R$ 38,00
          </li>
        </ul>

        <ul class="menu-secondary">
          <li class="menu-item logout">
            <router-link to="/logout">Sair</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>

import Burger from '@/components/shared/Burger';

export default {
  components: {
    Burger,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    hide: function hide() {
      this.isOpen = false;
    },
  },
};
</script>
<style>
  @import '../../assets/styles/shared/menu-nav.css';
</style>
