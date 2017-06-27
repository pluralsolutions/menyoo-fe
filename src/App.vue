<template>
  <div id="app">
    <user-header></user-header>
    <header>
      <span class="title">Menyoo!</span>
    </header>
    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title"><img src="./assets/logo-only.png" alt="Menyoo" height="48"></span>
      <nav class="mdl-navigation">
        <router-link class="mdl-navigation__link" to="/" @click.native="hideMenu">Home</router-link>
        <router-link class="mdl-navigation__link" to="/teste" @click.native="hideMenu">Go to Teste</router-link>
      </nav>
    </div>
    <main>
      <img src="./assets/logo.png" width="80%" alt="Menyoo">
        <router-view></router-view>
    </main>
  </div>
</template>

<script>
import UserHeader from '@/components/UserHeader';

export default {
  name: 'app',
  components: {
    UserHeader,
  },
  data() {
    return {
      userPhoto: './static/img/user.jpg',
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

header span {
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
