<template>
  <div class="awaitorder-container">
    <NavigationBar>
      <div class="awaitorder-select" v-if="orders.length>0">
        <select name="order" v-model="orderIdSelected" @change="trocaURL">
          <option value="0"> - Selecione uma ordem - </option>
          <option :selected="orderIdSelected===ord.id" v-for="ord in orders" :key="ord.id" :value="ord.id">{{ord.selectName()}}</option>
        </select>
      </div>
    </NavigationBar>
    <div v-if="orderIdSelected>0">
      <div class="awaitorder">
        <div :class="{active: step>=1}"><img src="../assets/images/step1.svg"/><span>SEU PEDIDO JÁ FOI PARA O BALCÃO DO CHEFE</span></div>
        <div :class="{active: step>=2}"><img src="../assets/images/step2.svg"/><span>SEU PEDIDO ESTÁ SENDO PREPARADO</span></div>
        <div :class="{active: step>=3}"><img src="../assets/images/step3.svg"/><span>SEU PEDIDO ESTÁ A CAMINHO DA SUA MESA</span></div>
      </div>
      <div class="awaitorder-paybtn">
        <ButtonComponent :onClick="pagar" size="large" v-if="step>=3" :disabled="step==4">pagar</ButtonComponent>
      </div>
    </div>
    <div v-else>
      <div class="awaitorder-no-order">
        <div>
          Nenhum pedido está em andamento, ou não foi enviado para a cozinha.
        </div>
      </div>
    </div>
    <br/>
     <!-- <OrderEvaluationPush v-show="step>=5"/> -->
  </div>
</template>

<script>
import NavigationBar from '@/components/shared/NavigationBar';
import OrderEvaluationPush from '@/components/shared/OrderEvaluationPush';
import OrderService from '@/service/order_service';
import { mapGetters } from 'vuex';

export default {
  name: 'AwaitingOrder',
  components: {
    NavigationBar,
    OrderEvaluationPush,
  },
  data() {
    return {
      orderIdSelected: this.orderId || 0,
      timeoutAll: false,
    };
  },
  props: ['orderId'],
  methods: {
    pagar() {
      this.$router.push(`/pedidos/${this.orderIdSelected}/pagar`);
    },
    trocaURL() {
      this.$router.replace(`/pedidos/${this.orderIdSelected}/acompanhar`);
      this.getAllOrders();
    },
    getAllOrders() {
      if (this.timeoutAll) clearTimeout(this.timeoutAll);
      OrderService.getAllOrders(this.$store.dispatch, {
        userID: this.$store.getters.user.uid,
        restaurantID: 1,
      }).then(() => {
        // get all again in 20 seconds
        this.timeoutAll = setTimeout(this.getAllOrders, 10000);
      });
    },
  },
  computed: {
    ...mapGetters({
      orders: 'allorders',
    }),
    step() {
      if (this.orders) {
        const o = this.orders.find(
          ord => ord.id.toString() === this.orderIdSelected.toString(), this);
        return (o) ? o.step() : 0;
      }
      return 0;
    },
  },
  // watch: {
  //   orderIdSelected: {
  //     handler: () => {
  //       debugger;
  //       if (this.orders) {
  //         const o = this.orders.find(ord => ord.id === newv, this);
  //         this.step = o.step();
  //       }
  //       return newv;
  //     },
  //   },
  // },
  destroyed() {
    if (this.timeoutAll) clearTimeout(this.timeoutAll);
  },
  mounted() {
    this.getAllOrders();
  },
};
</script>

<style>
  @import '../assets/styles/awaitingorder.css';
</style>
