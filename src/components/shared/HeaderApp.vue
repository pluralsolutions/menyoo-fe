<template>
  <header v-if="showHeader()" class="header-container">
    <div class="header-fixed">
      <MenuMain />
      <CheckoutPreview />
    </div>
  </header>
</template>

<script>
  import MenuMain from '@/components/shared/Menu';
  import CheckoutPreview from '@/components/shared/CheckoutPreview';

  export default {
    name: 'HeaderApp',
    components: {
      MenuMain,
      CheckoutPreview,
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
