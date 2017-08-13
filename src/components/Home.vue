<template>
  <div>
    <RestaurantHero></RestaurantHero>
    <div class="search">
      <input v-model="filtro" name="filtro" class="search_field" type="text" autofocus="true"
        autocomplete="true" placeholder="Busque seu prato preferido pelo nome ou descrição" />
    </div>
    <div class="lista">
      <Product :prato="prato" v-for="prato in pratosComFiltro" v-bind:key="prato.id" v-if="prato.valor>0"></Product>
    </div>
  </div>
</template>

<script>
import RestaurantHero from '@/components/shared/RestaurantHero';
import Product from '@/components/shared/Product';
import Prato from '../domain/Prato';

export default {
  name: 'home',
  components: {
    Product,
    RestaurantHero,
  },
  data() {
    return {
      filtro: '',
      pratos: [],
    };
  },
  methods: {
    filtrar() {
      this.filtro = this.filtro.trim();
    },
  },
  computed: {
    pratosComFiltro() {
      if (this.filtro) {
        // expr regular case insensitivo
        const exp = new RegExp(this.filtro.trim(), 'i');
        // testa o array e retorna
        const res = this.pratos.filter(p => (exp.test(p.titulo)));
        Array.prototype.push.apply(res, this.pratos.filter(p => (exp.test(p.descricao))));
        return res;
      }
      return this.pratos;
    },
  },
  created() {
    // this.$http.get('http://localhost:3000/v1/fotos')
      // .then(res => res.json())
      // .then(fotos => this.fotos = fotos, err => console.log(err));
    this.pratos = Prato.sample();
  },
};
</script>

<style>
  @import '../assets/styles/home.css';
</style>
