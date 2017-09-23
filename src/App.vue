<template>
  <div id="app">
    <HeaderApp></HeaderApp>
    <div>MAIN: isAuthenticated: {{$root.isAuthenticated}}, auth:{{$root.auth}}.</div>
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

<style src='@/assets/styles/app.css'>
</style>
