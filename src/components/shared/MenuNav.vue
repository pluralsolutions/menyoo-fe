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
          </ul>

          <ul class="menu-secondary">
            <li class="menu-item logout">
              <router-link to="/logout">Sair</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </transition>
  </div>
</template>
<script>

import PhotoCircle from '@/components/shared/PhotoCircle';
import User from '@/domain/User';

export default {
  components: {
    PhotoCircle,
    User,
  },
  data() {
    return {
      show: false,
      user: new User('Gabriel Toledo', '/static/img/user.jpg'),
    };
  },
};
</script>
<style>
  @import '../../assets/styles/shared/menu-nav.css';
</style>
