<template>
  <header v-if="showHeader()" class="header-container">
    <div class="header-fixed">
      <ProfileHeader></ProfileHeader>
      <MenuNav></MenuNav>
    </div>
  </header>
</template>

<script>
  import ProfileHeader from '@/components/shared/ProfileHeader';
  import MenuNav from '@/components/shared/MenuNav';

  export default {
    name: 'HeaderApp',
    components: {
      ProfileHeader,
      MenuNav,
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
