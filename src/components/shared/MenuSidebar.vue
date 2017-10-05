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
              <router-link tag="li" class="menu-item home" to="/restaurantes/bar-do-ze">Cardápio</router-link>              
              <router-link tag="li" class="menu-item review" to="/restaurantes/bar-do-ze/reviews">Minhas avaliações</router-link>
              <router-link tag="li" class="menu-item edit-profile" to="/perfil">Editar perfil</router-link>
              <router-link tag="li" class="menu-item tracking-orders" v-if="hasProductsIntoOrder()" :to="{name: 'awaiting-order'}">Acompanhar pedido</router-link>
              <router-link tag="li" class="menu-item pay-order" v-if="hasProductsIntoOrder()" :to="{path: `/pedidos/${order.id}/pagar`}">Pagar pedido</router-link>
              <li class="menu-item signout" @click="signOut">
                Sair
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
    hasProductsIntoOrder: function hasProductsIntoOrder() {
      return this.order && this.order.products && this.order.products.length > 0;
    },
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
