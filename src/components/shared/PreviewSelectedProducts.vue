<template>
  <ul class="order-items">
    <li v-for="orderProduct in order.products" :key="orderProduct.product.id">
      <span class="product-quantity">
        {{orderProduct.quantity}}<br/>unid
      </span>
      <div>
        <ProductInfo :orderID="orderProduct.orderId" :productOrderID="orderProduct.Id" :product="orderProduct.product" :summary="false" :description="false" :rating="false" />
        <div class="ingredients-item">
          <span v-for="ingredient in orderProduct.ingredients" :key="ingredient.name"> +{{ingredient.name}}</span>
        </div>
        <Counter :plusCallback="addProductToOrder.bind(null, orderProduct)"
                    :minusCallback="removeProductIntoOrder.bind(null, orderProduct)"
                    :showCounter="false"
                    justifyContent="flex-start"
        />
      </div>
    </li>
  </ul>
</template>

<script>
import ProductInfo from '@/components/shared/ProductInfo';
import Counter from '@/components/shared/Counter';

import { mapGetters } from 'vuex';

import serviceOrder from '@/service/order_service';

export default {
  components: {
    ProductInfo,
    Counter,
  },
  methods: {
    addProductToOrder(item) {
      serviceOrder.updateProductOrderQuantity(
        this.$store.dispatch,
        { userID: this.user.uid, restaurantID: 1, item, quantity: item.quantity + 1 },
      );
    },
    removeProductIntoOrder(item) {
      serviceOrder.updateProductOrderQuantity(
        this.$store.dispatch,
        { userID: this.user.uid, restaurantID: 1, item, quantity: item.quantity - 1 },
      );
    },
  },
  computed: {
    ...mapGetters([
      'order',
      'user',
    ]),
  },
};
</script>

<style scoped>
  .ingredients-item {
    margin-bottom: 10px;
  }

  .ingredients-item span {
    font-size: 13px;
    color: #606060;
    font-weight: bold;
  }

  .order-items {
    margin-top: 30px;
    padding: 0 20px;
  }

  .order-items li{
    display: flex;
    margin-bottom: 40px;
    padding: 0;
    width: 100%;
  }
  .product-quantity{
    width: 35px;
  }
</style>
