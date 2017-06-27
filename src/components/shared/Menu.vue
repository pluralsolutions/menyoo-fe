<template>
  <nav>
    <ul>
      <router-link v-for="item in rotasFiltro" :key="item" :to="item.path">
          <li @onclick="hideMenu">{{item.titulo}}</li>
      </router-link>
    </ul>
  </nav>
</template>
<<script>
export default {
  props: {
    rotas: {
      type: Array,
      required: true,
    },
  },
  computed: {
    rotasFiltro() {
      if (this.rotas) {
        return this.rotas.filter(r => (r.exibir) === true);
      }
      return [];
    },
  },
  methods: {
    hideMenu: function hideMenu() {
      document.getElementsByClassName('mdl-layout__drawer')[0].classList.remove('is-visible');
      document.getElementsByClassName('mdl-layout__obfuscator')[0].classList.remove('is-visible');
    },
  },
};
</script>
<<style scoped>
ul{
  list-style: none;
}
ul li{
  display: inline-block;
  width: 80px;
  border: 1px solid #eee;
  box-shadow: 5px 5px 5px;
  padding: 5px 15px;
  margin: 10px;
}
</style>
