<template>
  <div>
    <Burger @toogle="toogleMenu"></Burger>
    <MenuNav @toogle="toogleMenu" v-model="menuIsOpen"></MenuNav>
  </div>
</template>
<script>

import Burger from '@/components/shared/Burger';
import MenuNav from '@/components/shared/MenuNav';

export default {
  components: {
    Burger,
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
