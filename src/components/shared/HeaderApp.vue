<template>
  <header v-if="isLoggedUser" class="header-container">
    <div class="header-fixed">
      <MenuSidebar />
      <CheckoutPreview />
    </div>
  </header>
</template>

<script>
  import { mapGetters } from 'vuex';

  import MenuSidebar from '@/components/shared/MenuSidebar';
  import CheckoutPreview from '@/components/shared/CheckoutPreview';

  export default {
    components: {
      MenuSidebar,
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
