<template>
  <header v-show="showHeader()" class="header-container">
    <div class="header-fixed">
      <ProfileHeader></ProfileHeader>
      <MenuDraw></MenuDraw>
    </div>
  </header>
</template>

<script>
  import ProfileHeader from '@/components/shared/ProfileHeader';
  import MenuDraw from '@/components/shared/MenuDraw';

  export default {
    name: 'HeaderApp',
    components: {
      ProfileHeader,
      MenuDraw,
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
