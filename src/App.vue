<template>
  <div id="app">
    <HeaderApp></HeaderApp>
    <main>
      <transition name="main">
        <router-view></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
import HeaderApp from '@/components/shared/HeaderApp';

export default {
  name: 'app',
  components: {
    HeaderApp,
  },
};
</script>

<style>
  @import 'assets/styles/app.css'
</style>
