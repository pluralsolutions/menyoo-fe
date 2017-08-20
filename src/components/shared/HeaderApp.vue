<template>
  <header v-if="isLoggedUser" class="header-container">
    <div class="header-fixed">
      <MenuMain />
      <CheckoutPreview />
    </div>
  </header>
</template>

<script>
  import { mapGetters } from 'vuex';

  import MenuMain from '@/components/shared/Menu';
  import CheckoutPreview from '@/components/shared/CheckoutPreview';

  export default {
    components: {
      MenuMain,
      CheckoutPreview,
    },
    computed: mapGetters([
      'isLoggedUser',
    ]),
  };
</script>

<style>
  @import '../../assets/styles/shared/header.css';
</style>
