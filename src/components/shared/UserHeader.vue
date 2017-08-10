<template>
    <div class="user-head">
      <menu-draw></menu-draw>
      <router-link :to="{name: 'usuario'}" class="nolink">
        <photo-circle :src="user.urlPhoto" :alt="'User photo '+user.name" size="32"></photo-circle>
        <span class="user">{{user.name}}</span>
      </router-link>
    </div>
</template>

<script>
import User from '@/domain/User';
import MenuDraw from '@/components/shared/MenuDraw';
import PhotoCircle from '@/components/shared/PhotoCircle';

export default {
  name: 'UserHeader',
  components: {
    'menu-draw': MenuDraw,
    'photo-circle': PhotoCircle,
  },
  data() {
    return {
      menuopen: false,
      user: new User('Gabriel Toledo',
        'static/img/usuario.svg'),
    };
  },
  methods: {
  },
};
</script>
<style scoped>
  @import '../../assets/styles/shared/user-header.css'
</style>
