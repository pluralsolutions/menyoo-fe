<template>
    <div class="user-head">
      <burger class="burger" navid="mySidenav"></burger>
      <router-link :to="{name: 'usuario'}" class="nolink">
        <photo-circle :src="user.urlPhoto" :alt="'User photo '+user.name" size="32"></photo-circle>
        <span class="user">{{user.name}}</span>
      </router-link>
      <menu-draw class="menulateral" id="mySidenav"></menu-draw>
    </div>
</template>

<script>
import User from '@/domain/User';
import Burger from '@/components/shared/Burger';
import MenuDraw from '@/components/shared/MenuDraw';
import PhotoCircle from '@/components/shared/PhotoCircle';

export default {
  name: 'UserHeader',
  components: {
    burger: Burger,
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
<style>
.user-head .burger{
  position: fixed;
  right: 1em;
  height: 5px; 
}
.menulateral{
  
}
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
