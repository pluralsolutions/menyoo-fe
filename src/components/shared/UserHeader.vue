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
        'http://tudosobrecachorros.com.br/wp-content/uploads/cachorro-independente.jpg'),
    };
  },
  methods: {
  },
};
</script>
<style scoped>
.user-head a {
  text-decoration: none;
}
.user-head {
  display: block;
  width: 100%;
  position: fixed;
  top: 0px;
  z-index: 9;
  font-size: 20px;
  line-height: 1;
  letter-spacing: 1.09em 2em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 2px;
  padding-left: 20px;
  background-color: #dcdcdc;
}

.user {
  position: relative;
  top: -13px;
  font-size: 12px;
  letter-spacing: .06em;
  font-weight: bolder;
  box-sizing: border-box;
  text-transform: uppercase;
  color: black;
}

</style>
