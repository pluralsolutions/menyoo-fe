<template>
  <div v-if="order">
    <modal v-if="showModal" @close="showModal = false">
      <p class="logo-modal" slot="header"></p>
      <p class="body-modal" slot="body">
        <strong>Confirmar</strong> o <strong>envio do pedido</strong>
        para o chefe?
      </p>
      <p class="footer-modal" slot="footer">
        <ButtonComponent :onClick="confirmed" size="medium" type="secondary">Sim</ButtonComponent>
        <ButtonComponent @click.native="showModal = false" size="medium" type="danger">Não</ButtonComponent>
      </p>
    </modal>    
    <NavigationBar type="checkout">Checkout</NavigationBar>
    <div class="order-items">
      <ul>
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
      <div class="order-total">
        <span class="desc">Total pedido</span>
        <span class="price">R$ {{order.totalValue | currency}}</span>
      </div>
      <ButtonComponent @click.native="showModal = true" size="full" type="secondary">Enviar pedido para o chef</ButtonComponent>
    </div>
  </div>
</template>

<script>
import NavigationBar from '@/components/shared/NavigationBar';
import ProductInfo from '@/components/shared/ProductInfo';
import Counter from '@/components/shared/Counter';
import ButtonComponent from '@/components/shared/Button';

import ProductOrder from '@/domain/ProductOrder';
import Product from '@/domain/Product';

import { mapGetters } from 'vuex';

export default {
  components: {
    NavigationBar,
    ProductInfo,
    Counter,
    ButtonComponent,
  },
  data() {
    return {
      showModal: false,
    };
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
    redirectToRestaurant() {
      if (this.order === null) {
        this.$router.push('/restaurantes/bar-do-ze');
      }
    },
    confirmed() {
      this.$router.push('/pedidos/acompanhar');
    },
  },
  created() {
    this.redirectToRestaurant();
  },
  updated() {
    this.redirectToRestaurant();
  },
  computed: {
    ...mapGetters([
      'order',
    ]),
  },
};
</script>

<style scoped>
  .logo-modal {
    height: 208px;
    background: url('../assets/images/logo.svg');
    border-bottom: solid #f00 2px;
  }
  .ingredients-item {
    margin-bottom: 10px;
  }
  .body-modal {
    text-transform: uppercase;
    text-align: center;
    font-size: 22px;
    line-height: 1.4;
    width: 70%;
    margin: 0 auto;
  }

  .footer-modal {
    display: flex;
  }

  .order-items {
    margin-top: 30px;
    padding: 0 20px;
  }
  .order-items li {
    padding: 0;
  }
  .order-total {
    display: flex;
    justify-content: space-between;
  }

  .order-total .desc{
    text-transform: uppercase;
    font-weight: bold;
  }
  .order-total .price {
    font-size: 16px;
    font-weight: bold;
    color: #33cc66;
  }
</style>
