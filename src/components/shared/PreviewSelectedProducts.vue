<template>
  <ul class="order-items">
    <li v-for="orderProduct in order.products" :key="orderProduct.product.id">
      <span class="product-quantity">
        {{orderProduct.productQuantity}} unid
        </span>
        <div>
          <ProductInfo :product="orderProduct.product" :summary="false" :rating="false" />
          <div class="ingredients-item">
            <span v-for="ingredient in orderProduct.ingredients" :key="ingredient.name"> +{{ingredient.name}}</span>
          </div>
          <Counter :plusCallback="addProductToOrder.bind(null, orderProduct)"
                      :minusCallback="removeProductIntoOrder.bind(null, orderProduct)"
                      :showCounter="false"
                      justifyContent="flex-end"
          />
        </div>
    </li>
  </ul>
</template>

<script>
import ProductInfo from '@/components/shared/ProductInfo';
import Counter from '@/components/shared/Counter';

import ProductOrder from '@/domain/ProductOrder';
import Product from '@/domain/Product';

import { mapGetters } from 'vuex';

export default {
  components: {
    ProductInfo,
    Counter,
  },
  methods: {
    addProductToOrder(item) {
      const productOrder = new ProductOrder({
        product: item.product,
        productOrderIngredients: item.ingredients,
        productQuantity: 1,
      });

      this.$store.dispatch('addProductToOrder', productOrder);
    },
    removeProductIntoOrder(item) {
      const productOrder = new ProductOrder({
        product: new Product(item.product),
        productOrderIngredients: item.ingredients,
      });

      this.$store.dispatch('removeProductFromOrder', { productOrder, quantity: 1 });
    },
  },
  computed: {
    ...mapGetters([
      'order',
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

  .order-items li {
    padding: 0;
  }
</style>
