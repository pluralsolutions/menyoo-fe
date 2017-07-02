<template>
    <div class="user-head">
      <router-link :to="{name: 'usuario'}" class="nolink">
        <div class="photo-circle">
          <img :src="user.urlPhoto" :alt="'User photo '+user.name">
        </div>
        <span class="user">{{user.name}}</span>
      </router-link>
    </div>
</template>

<script>
import User from '../../domain/User';

export default {
  name: 'UserHeader',
  data() {
    return {
      user: new User('Gabriel Toledo',
        'http://tudosobrecachorros.com.br/wp-content/uploads/cachorro-independente.jpg'),
    };
  },
};
</script>
<style>
.user-head a {
  text-decoration: none;
}
.user-head {
  display: block;
  width: 100%;
  position: fixed;
  z-index: 9999;
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

.photo-circle {
  display: inline-flex;
  box-sizing: content-box;
  background-clip: content-box;
  border-radius: 50%;
  box-shadow: inset 1px 5px 3px 0px rgba(0,0,0,.15), 0px 3px 5px 3px rgba(0,0,0,.15);
  margin: 4px;
}

.photo-circle img {
  border: 1px solid #eee;
  height: 32px;
  width: 32px;
  border-radius: 50%;  
}

</style>
