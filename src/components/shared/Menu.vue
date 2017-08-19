<template>
  <div>
    <MenuNav @toogle="toogleMenu" v-model="menuIsOpen"></MenuNav>
  </div>
</template>
<script>

import MenuNav from '@/components/shared/MenuNav';

export default {
  components: {
    MenuNav,
  },
  data() {
    return {
      menuIsOpen: false,
    };
  },
  methods: {
    toogleMenu: function toogleMenu() {
      this.menuIsOpen = !this.menuIsOpen;
    },
  },
};
</script>
