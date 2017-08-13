<template>
  <div>
    <Burger ref="burg" v-model="aberto"></Burger>
    <nav @click="hide" :class="{'hide': !aberto}">
      <ul>
        <router-link v-for="item in routes" :key="item" :to="item.path">
            <li>{{item.titulo}}</li>
        </router-link>
      </ul>
    </nav>
  </div>
</template>
<script>
// import rotas from '@/router/routes';
import Burger from '@/components/shared/Burger';

export default {
  name: 'menudraw',
  components: {
    Burger,
  },
  data() {
    return {
      routes: this.$router.options.routes.filter(r => r.exibir),
      aberto: false,
    };
  },
  methods: {
    hide: function hide() {
      this.aberto = false;
      // this.$refs.burg.close();
    },
  },
};
</script>
<style>
  @import '../../assets/styles/shared/menu-draw.css';
</style>
