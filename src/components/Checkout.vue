<template>
  <div v-if="order">
    <modal ref="modal">
      <p class="logo-modal" slot="header"></p>
      <p class="body-modal" slot="body">
        <strong>Confirmar</strong> o <strong>envio <br>
        do pedido</strong>para o chefe?
      </p>
      <p slot="footer">
        <ButtonComponent :onClick="confirmed" size="medium" type="secondary">Sim</ButtonComponent>
        <ButtonComponent @click.native="$refs.modal.hideModal" size="medium" type="danger">Não</ButtonComponent>
      </p>
    </modal>
    <NavigationBar type="checkout">Checkout</NavigationBar>
    <div>
      <PreviewSelectedProducts />
      <div class="order-total">
        <span class="desc">Total pedido</span>
        <span class="price">R$ {{order.totalValue | currency}}</span>
      </div>
      <ButtonComponent @click.native="$refs.modal.showModal({})" size="full" type="secondary">Enviar pedido para o chef</ButtonComponent>
    </div>
  </div>
</template>

<script>
import NavigationBar from '@/components/shared/NavigationBar';
import PreviewSelectedProducts from '@/components/shared/PreviewSelectedProducts';

import { mapGetters } from 'vuex';

export default {
  components: {
    NavigationBar,
    PreviewSelectedProducts,
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
    background: url('../assets/images/logo.svg');
    background-repeat: no-repeat;
    background-position: center;
    /* background-size: 10px 10px; */
    border-bottom: solid #be1622 2px;
  }
  .body-modal {
    margin: 20px;
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
