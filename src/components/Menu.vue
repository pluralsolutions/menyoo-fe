<template>
  <div>
    <RestaurantHero></RestaurantHero>
    <div :class="$style.search">
      <input v-model="query" name="filtro" :class="$style.search_field" type="text" autofocus="true"
        autocomplete="true" placeholder="Busque seu prato preferido pelo nome ou descrição" />
    </div>
    <div :class="$style['product-list']">
      <ProductCard :product="product" v-for="product in productsLoaded" :key="product.id" v-if="product.unitPrice > 0" />
    </div>
  </div>
</template>

<script>
import RestaurantHero from '@/components/shared/RestaurantHero';
import ProductCard from '@/components/shared/ProductCard';
import Product from '../domain/Product';

export default {
  components: {
    RestaurantHero,
    ProductCard,
  },
  data() {
    return {
      query: '',
      products: [],
    };
  },
  computed: {
    loggedUser() {
      return this.$store.getters.getLoggedUser;
    },
    productsLoaded() {
      if (this.query === '') return this.products;

      const exp = new RegExp(this.query.trim(), 'i');
      const res = this.products.filter(p => (exp.test(p.title)));
      res.push(this.products.filter(p => (exp.test(p.description))));
      return res;
    },
  },
  created() {
    this.products = Product.sample(15);
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

  .product-list{
    width: 100%;
  }

</style>
