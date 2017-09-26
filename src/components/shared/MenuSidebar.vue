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
          <div class="menu-profile">
            <div class="user-img">
              <PhotoCircle :src="loggedUser.photoURL" :alt="`${loggedUser.displayName}`" size="69"></PhotoCircle>
            </div>
            <div class="user-name">
              {{ loggedUser.name }}
            </div>
          </div>
          <div class="menu-scroll">
            <ul class="menu-nav">
              <li class="menu-item home">
                <router-link to="/restaurantes/bar-do-ze">Ver cardápio</router-link>
              </li>
              <li class="menu-item edit-profile">
                <router-link to="/perfil">Editar perfil</router-link>
              </li>

              <li class="menu-item tracking-orders" v-if="order">
                <router-link :to="{name: 'awaiting-order'}">Acompanhar pedido</router-link>
              </li>
              <li class="menu-item pay-order" v-if="order">
                <router-link :to="{path: `/pedidos/${order.id}/pagar`}">Pagar pedido</router-link>
              </li>
              <li class="menu-item signout" @click="signOut">
                <a>Sair</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </transition>
  </div>
</template>
<script>
import PhotoCircle from '@/components/shared/PhotoCircle';
import { mapActions, mapGetters } from 'vuex';

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
    ...mapActions({
      signOut: 'a_signOut',
    }),
  },
  computed: {
    ...mapGetters({
      loggedUser: 'user',
      order: 'order',
    }),
  },
};
</script>
<style src="@/assets/styles/shared/menu-sidebar.css"/>
