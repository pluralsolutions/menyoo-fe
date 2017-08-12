<template>
  <div id="app">
    <header v-show="showHeader()">
      <UserHeader></UserHeader>
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

export default {
  name: 'app',
  components: {
    UserHeader,
  },
  methods: {
    showHeader: function showHeader() {
      const rt = this.$router.options.routes.filter(r => r.path === this.$route.path);
      if (rt && rt.length > 0) {
        return !rt[0].disableHeader;
      }
      return true;
    },
  },
};
</script>

<style>
  @import 'assets/styles/app.css'
</style>
