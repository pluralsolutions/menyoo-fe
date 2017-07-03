<template>
  <div id="app">
    <header>
      <user-header style="height:50px;"></user-header>
      <RestauranteHeader v-if="showRestaurante" style="padding-top:50px;"></RestauranteHeader>
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

img, div, input["type!=text"], h1{
  -webkit-user-select: none; /* Chrome, Opera, Safari */
  -moz-user-select: none; /* Firefox 2+ */
  -ms-user-select: none; /* IE 10+ */
  user-select: none; /* Standard syntax */
}

.main-enter-active, .main-leave-active {
  transition: opacity .3s
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
  background-color: #BE1622;
  color: #ffffff;
}

</style>
