<template>
  <div>
    <RestaurantHero></RestaurantHero>
    <div class="search">
      <input v-model="filtro" name="filtro" class="search_field" type="text" autofocus="true"
        autocomplete="true" placeholder="Busque seu prato preferido" />
    </div>
    <div class="lista">
      <Product :prato="prato" v-for="prato in pratosComFiltro" v-bind:key="prato._id">></Product>
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
        return this.pratos.filter(p => exp.test(p.titulo));
      }
      return this.pratos;
    },
  },
  created() {
    // this.$http.get('http://localhost:3000/v1/fotos')
      // .then(res => res.json())
      // .then(fotos => this.fotos = fotos, err => console.log(err));

    this.pratos = [
      new Prato('Pizza de Mussarela', 'Queijo mussarela e massa média caseira', 'http://www.pizzasdonatello.com.br/imagens/slides/7867e857eef46fd12dfbd2105dc4e3e6.jpg', 4),
      new Prato('Pizza de Manjericão', 'Queijo mussarela e tomates frescos e massa média caseira', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUhAGJJABIFdWDSc4ysVMwaIbeXja7Dz_3XuVLWKnY6BfsJfHMWA', 5),
      new Prato('Pizza de Mussarela', 'Queijo mussarela e massa média caseira', 'http://www.pizzasdonatello.com.br/imagens/slides/7867e857eef46fd12dfbd2105dc4e3e6.jpg', 4),
      new Prato('Pizza de Manjericão', 'Queijo mussarela e tomates frescos e massa média caseira', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUhAGJJABIFdWDSc4ysVMwaIbeXja7Dz_3XuVLWKnY6BfsJfHMWA', 5),
      new Prato('Pizza de Mussarela', 'Queijo mussarela e massa média caseira', 'http://www.pizzasdonatello.com.br/imagens/slides/7867e857eef46fd12dfbd2105dc4e3e6.jpg', 4),
      new Prato('Pizza de Manjericão', 'Queijo mussarela e tomates frescos e massa média caseira', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUhAGJJABIFdWDSc4ysVMwaIbeXja7Dz_3XuVLWKnY6BfsJfHMWA', 5),
    ];
  },
};
</script>

<style scoped>
  @import '../assets/styles/home.css';
</style>
