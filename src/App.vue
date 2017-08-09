<template>
  <div id="app">
    <header>
      <div>
        <UserHeader style="height: 50px"></UserHeader>
        <RestauranteHeader v-show="showRestaurante" style="padding-top: 50px"></RestauranteHeader>
      </div>
    </header>
    <main>
      <transition name="main">
      <router-view></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
import UserHeader from '@/components/shared/UserHeader';
import RestauranteHeader from '@/components/shared/RestauranteHeader';

export default {
  name: 'app',
  components: {
    UserHeader,
    RestauranteHeader,
  },
  data() {
    return {
      showRestaurante: true,
    };
  },
  methods: {
    mostraHeader: function a() {
      const rt = this.$router.options.routes.filter(r => r.name === this.$route.name);
      console.log(rt);
      if (rt && rt.length > 0) {
        return rt[0].exibirHeader || (typeof rt[0].exibirHeader === 'undefined');
      }
      return false;
    },
  },
};
</script>

<style> 

body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  margin: auto;
}

img, div, h1, h2, h3, h4, h5, h6, span, label{
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.main-enter-active, .main-leave-active {
  transition: opacity .3s;
}

.main-enter, .main-leave-active {
  opacity: 0;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  background-color: #BE1622;
  color: #ffffff;
}

.clearfix{
  clear: both;
}
</style>
