<template>
  <div class="profile-header-container">
    <router-link :to="{name: 'usuario'}">
      <PhotoCircle :src="user.urlPhoto" :alt="`${user.name}`" size="32"></PhotoCircle>
      <span class="user">{{user.name}}</span>
    </router-link>
  </div>
</template>

<script>
import User from '@/domain/User';
import PhotoCircle from '@/components/shared/PhotoCircle';

export default {
  name: 'UserHeader',
  components: {
    PhotoCircle,
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
<style>
  @import '../../assets/styles/shared/profile-header.css'
</style>
