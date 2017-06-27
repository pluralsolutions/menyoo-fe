<template>
  <div id="app">
    <user-header></user-header>
    <header>
      <span class="titulo">Menyoo!</span>
    </header>
    <menudrawer :rotas="routes"></menudrawer>
    <main>
      <transition name="main">
      <router-view></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
import UserHeader from '@/components/shared/UserHeader';
import Menudrawer from '@/components/shared/Menu';
import routes from '@/router/routes';

export default {
  name: 'app',
  components: {
    UserHeader,
    Menudrawer,
  },
  data() {
    return {
      userPhoto: './static/img/user.jpg',
      routes,
    };
  },
  methods: {
    hideMenu: function hideMenu() {
      // document.getElementsByClassName('mdl-layout__drawer')[0].classList.remove('is-visible');
      // document.getElementsByClassName('mdl-layout__obfuscator')[0]
      // .classList.remove('is-visible');
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
}

.main-enter-active, .main-leave-active {
  transition: opacity .1s
}

.main-enter, .main-leave-active {
  opacity: 0
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #BE1622;
  color: #ffffff;
}

.titulo {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}

</style>
