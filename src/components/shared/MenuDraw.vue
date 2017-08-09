<template>
  <div>
    <Burger ref="burg" v-model="aberto"></Burger>
    <nav @click="hide" :class="{'hide': !aberto}">
      <ul>
        <router-link v-for="item in routes" :key="item" :to="item.path">
            <li>{{item.titulo}}</li>
        </router-link>
      </ul>
    </nav>
  </div>
</template>
<script>
// import rotas from '@/router/routes';
import Burger from '@/components/shared/Burger';

export default {
  name: 'menudraw',
  components: {
    Burger,
  },
  data() {
    return {
      routes: this.$router.options.routes.filter(r => r.exibir || (typeof r.exibir === 'undefined')),
      aberto: false,
    };
  },
  methods: {
    hide: function hide() {
      this.aberto = false;
      // this.$refs.burg.close();
    },
  },
};
</script>
<style scoped>
ul{
  list-style: none;
}
ul li{
  display: inline-block;
  width: 70%;
  border: 1px solid #eee;
  box-shadow: 5px 5px 5px;
  padding: 5px 5px 5px 15px;
  margin: 5px;
  background-color: #fff;
}
.hide{
    display: none;
}
nav {
    transition-duration: 0.3s;
    display: block;
    height: 100%;
    width: 180px;
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    background-color: rgba(0,0,0,0.5);
    overflow-x: hidden;
    transition: 0.9s;
    padding-top: 60px;
}

@media screen and (max-height: 450px) {
  nav {padding-top: 20px;}
  nav li {font-size-adjust: 2pt;}
}
</style>
