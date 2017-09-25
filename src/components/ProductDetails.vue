<template>
  <div class="product-detail-container" v-if="product">
    <NavigationBar>Descrição do Produto</NavigationBar>
    <img :src="product.image" class="product-galery" />  <!-- Should be a Galery Component-->
    <div class="product-info">
      <ProductInfo :product="product" v-model="productQuantity" :additionalPrice="additionalPrice"/>
      <ProductIngredientList :product="product" v-model="additionalPrice" :onSubmit="addOrder" />
      <modal ref="modal">
        <div slot="body">
          {{ msgModal }}<br><br><br>
          <p v-if="order!=null" style="font-size: 14px">
           Total de itens no carrinho: <strong>{{ order.quantity() }}</strong>.
          </p>
        </div>
        <p slot="footer">
          <ButtonComponent @click.native="$refs.modal.hideModal" size="medium" type="secondary">Ok</ButtonComponent>
          <ButtonComponent @click.native="$refs.modal.hideModal" routerLinkTo="/checkout" size="medium" type="danger">Finalizar pedido</ButtonComponent>
        </p>
      </modal>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import NavigationBar from '@/components/shared/NavigationBar';
import ProductInfo from '@/components/shared/ProductInfo';
import ProductIngredientList from '@/components/shared/ProductIngredientList';
import productService from '@/service/product_service';
import orderService from '@/service/order_service';

import Product from '@/domain/Product';

export default {
  components: {
    NavigationBar,
    ProductInfo,
    ProductIngredientList,
  },
  data() {
    return {
      productQuantity: 0,
      additionalPrice: 0,
      msgModal: '',
    };
  },
  computed: {
    ...mapGetters([
      'order',
    ]),
    product() {
      const product = this.$store.getters.currentProduct;
      if (product === null) return null;
      return new Product(product);
    },
  },
  methods: {
    addOrder: function addOrder(event) {
      const checkboxs = event.target.querySelectorAll('input:checked');
      const productIngredients = [];
      for (let x = 0; x < checkboxs.length; x += 1) {
        productIngredients.push(
          { id: parseInt(checkboxs[x].value, 10) },
        );
      }

      const payload = {
        user_id: 'lucasgomide',
        restaurant_id: 1,
        products: [{
          product_id: this.product.id,
          quantity: this.productQuantity,
          ingredients: productIngredients,
        }],
      };

      orderService.addProductToOrder(
        this.$store.dispatch, payload,
      ).then(() => {
        // eslint-disable-next-line
        this.msgModal = 'Item adicionado ao carrinho!';
        this.$refs.modal.showModal({ onClose: () => this.$router.back() });
      });
    },
  },
  created() {
    productService.productByRestaurant(
      this.$store.dispatch, {
        restaurantID: 1,
        productID: this.$route.params.id,
      },
    );
  },
};
</script>

<style src="@/assets/styles/product-detail.css">
</style>
