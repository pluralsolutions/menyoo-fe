<template>
  <div v-if="order">
    <modal :show="showModal">
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
    <div>
      <PreviewSelectedProducts />
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
import PreviewSelectedProducts from '@/components/shared/PreviewSelectedProducts';
import ButtonComponent from '@/components/shared/Button';

import { mapGetters } from 'vuex';

export default {
  components: {
    NavigationBar,
    PreviewSelectedProducts,
    ButtonComponent,
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
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
    height: 200px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 10px 10px;
    background: url('../assets/images/logo.svg');
    border-bottom: solid #be1622 2px;
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

  .order-total {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
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
