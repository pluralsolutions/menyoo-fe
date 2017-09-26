<template>
  <div>
    <RestaurantHero></RestaurantHero>
    <div :class="$style.search">
      
    </div>
    <div :class="$style['product-list']">
      <ProductCard :review="true" :product="product" v-for="product in productsLoaded" :key="product.id" />
    </div>
  </div>
</template>

<script>
import RestaurantHero from '@/components/shared/RestaurantHero';
import ProductCard from '@/components/shared/ProductCard';
import Product from '@/domain/Product';
import Service from '@/service/product_service';

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
      const products = this.$store.getters.allProducts;
      const productList = [];
      products.forEach((product) => {
        productList.push(
          new Product(product),
        );
      });

      return productList;
    },
  },
  created() {
    Service.allProductsByRestaurant(this.$store.dispatch, { restaurantID: 1 });
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
