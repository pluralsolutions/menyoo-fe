<template>
  <div>
    <NavigationBar>Review</NavigationBar>
    <div :class="$style['product-list']">
      <ProductCard :review="true" :product="product" v-for="product in productsLoaded" :key="product.id" />
    </div>
  </div>
</template>

<script>
import NavigationBar from '@/components/shared/NavigationBar';
import ProductCard from '@/components/shared/ProductCard';
// import Product from '@/domain/Product';
import Service from '@/service/product_service';

export default {
  components: {
    NavigationBar,
    ProductCard,
  },
  data() {
    return {
      query: '',
      products: [],
    };
  },
  computed: {
    productsLoaded() {
      const orders = this.$store.getters.allEvaluationOrders;
      // const orderList = [];
      // debugger;
      // if (orders && orders.length) {
      //   orders.forEach((product) => {
      //     orderList.push(
      //       new Product(product),
      //     );
      //   });
      // }
      return orders;
    },
  },
  created() {
    Service.allProductsOrderByRestaurant(this.$store.dispatch,
      { restaurantID: 1, userID: this.$store.getters.user.uid });
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
