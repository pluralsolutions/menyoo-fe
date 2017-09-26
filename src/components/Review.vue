<template>
  <div>
    <NavigationBar>Review</NavigationBar><br>
    <div v-for="order in ordersLoaded" :key="order.id">
      <!-- <pre>-> {{order}}</pre> -->
      <div :class="$style['product-list']">
        <ProductCard :review="true" :order="order" :product="order.product" :evaluation="order.evaluation" />
      </div>
    </div>
  </div>
</template>

<script>
import NavigationBar from '@/components/shared/NavigationBar';
import ProductCard from '@/components/shared/ProductCard';
import OrderService from '@/service/order_service';
import ProductOrder from '@/domain/ProductOrder';

import { mapGetters } from 'vuex';

export default {
  components: {
    NavigationBar,
    ProductCard,
  },
  data() {
    return {
      // query: '',
    };
  },
  computed: {
    ordersLoaded() {
      const { products } = this.$store.getters.allMyProductsByRestaurant;
      const list = [];
      if (products && products.length) {
        products.forEach((product) => {
          list.push(
            new ProductOrder(product),
          );
        });
      }
      return list;
    },
    ...mapGetters([
      'user',
      'allMyProductsByRestaurant',
    ]),
  },
  created() {
    if (this.user) {
      OrderService.allProductsOrdersByRestaurant(this.$store.dispatch,
      { restaurantID: 1, userID: this.user.uid });
    }
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
