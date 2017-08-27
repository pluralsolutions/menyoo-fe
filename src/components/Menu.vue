<template>
  <div>
    <RestaurantHero></RestaurantHero>
    <div :class="$style.search">
      <input v-model="filtro" name="filtro" :class="$style.search_field" type="text" autofocus="true"
        autocomplete="true" placeholder="Busque seu prato preferido pelo nome ou descrição" />
    </div>
    <div :class="$style.lista">
      <ProductCard :product="prato" v-for="prato in pratosComFiltro" :key="prato.id" v-if="prato.unitPrice > 0" />
    </div>
  </div>
</template>

<script>
import RestaurantHero from '@/components/shared/RestaurantHero';
import ProductCard from '@/components/shared/ProductCard';
import Prato from '../domain/Product';

export default {
  components: {
    RestaurantHero,
    ProductCard,
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
        const res = this.pratos.filter(p => (exp.test(p.title)));
        Array.prototype.push.apply(res, this.pratos.filter(p => (exp.test(p.description))));
        return res;
      }
      return this.pratos;
    },
  },
  created() {
    // this.$http.get('http://localhost:3000/v1/fotos')
      // .then(res => res.json())
      // .then(fotos => this.fotos = fotos, err => console.log(err));
    this.pratos = Prato.sample(15);
  },
};
</script>

<style module>
  .search{
    margin: 10px auto;
    width: 80%;
    height: 32px;
    position: relative;
  }
  .search_field:hover,
  .search_field:focus,
  .search_field:active{
    border: solid 1.5px #BE1622;
  }
  .search_field {
    padding: 7px 32px;
    width: 80%;
    border: solid 1px #bebebe;
    background-image: url('../assets/images/search_icon.svg');
    background-size: 16px 16px;
    background-position: 6px;
    background-repeat: no-repeat;
  }
  .lista{
    width: 100%;
  }

</style>
