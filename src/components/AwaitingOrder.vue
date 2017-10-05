<template>
  <div class="awaitorder-container">
    <NavigationBar>
      <div class="awaitorder-select" v-if="orders.length>0">
        <select name="order" v-model="orderIdSelected" @change="trocaURL">
          <option value="0"> - Selecione uma ordem - </option>
          <option :selected="orderIdSelected===ord.id" v-for="ord in orders" :key="ord.id" :value="ord.id">{{ord.id}} - {{ord.orderDate}} - R$ {{ord.totalValue|currency}}</option>
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
        <ButtonComponent :onClick="pagar" size="large" v-if="step>=3">pagar</ButtonComponent>
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
    };
  },
  props: ['orderId'],
  methods: {
    mais(a) {
      if (a === this.orderIdSelected) this.$store.dispatch('updateStep', { step: 1 });
    },
    menos() {
      this.$store.dispatch('updateStep', { step: -1 });
    },
    pagar() {
      this.$router.push(`/pedidos/${this.orderIdSelected}/pagar`);
    },
    perform() {
      console.log('performing');
      this.$store.dispatch('resetAwaiting').then(() => {
        setTimeout(this.mais.bind(this, this.orderIdSelected), 2000);
        setTimeout(this.mais.bind(this, this.orderIdSelected), 3000);
        setTimeout(this.mais.bind(this, this.orderIdSelected), 4000);
        setTimeout(this.mais.bind(this, this.orderIdSelected), 5000);
        setTimeout(this.mais.bind(this, this.orderIdSelected), 6000);
      });
    },
    trocaURL() {
      this.$router.replace(`/pedidos/${this.orderIdSelected}/acompanhar`);
      this.perform();
    },
  },
  computed: {
    ...mapGetters({
      step: 'orderStep',
      order: 'order',
    }),
    orders() {
      // TODO get OPEN/NOT-DELIVERED orders from current user
      return [this.order];
    },
  },
  mounted() {
    this.perform();
  },
};
</script>

<style>
  @import '../assets/styles/awaitingorder.css';
</style>
