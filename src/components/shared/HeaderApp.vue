<template>
  <header v-if="showHeader()" class="header-container">
    <div class="header-fixed">
      <MenuMain></MenuMain>
    </div>
  </header>
</template>

<script>
  import MenuMain from '@/components/shared/Menu';

  export default {
    name: 'HeaderApp',
    components: {
      MenuMain,
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
  @import '../../assets/styles/shared/header.css';
</style>
