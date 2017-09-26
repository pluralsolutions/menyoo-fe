<template>
  <div class="awaitorder-container">
    <NavigationBar/>
    <div class="awaitorder">
      <div :class="{active: step>=1}"><img src="../assets/images/step1.svg"/><span>SEU PEDIDO JÁ FOI PARA O BALCÃO DO CHEFE</span></div>
      <div :class="{active: step>=2}"><img src="../assets/images/step2.svg"/><span>SEU PEDIDO ESTÁ SENDO PREPARADO</span></div>
      <div :class="{active: step>=3}"><img src="../assets/images/step3.svg"/><span>SEU PEDIDO ESTÁ A CAMINHO DA SUA MESA</span></div>
    </div>
    <div  class="awaitorder-paybtn">
      <ButtonComponent :onClick="pagar" size="large" v-if="step>=3">pagar</ButtonComponent>
    </div>
    <br/>
     <OrderEvaluationPush v-show="step>=5"/>
  </div>
</template>

<script>
import NavigationBar from '@/components/shared/NavigationBar';
import OrderEvaluationPush from '@/components/shared/OrderEvaluationPush';

export default {
  name: 'AwaitingOrder',
  components: {
    NavigationBar,
    OrderEvaluationPush,
  },
  methods: {
    mais() {
      this.$store.dispatch('updateStep', { step: 1 });
    },
    menos() {
      this.$store.dispatch('updateStep', { step: -1 });
    },
    pagar() {
      this.$router.push(`/pedidos/${this.order.id}/pagar`);
    },
  },
  computed: {
    step() {
      return this.$store.getters.orderStep;
    },
    order() {
      return this.$store.getters.order;
    },
  },
  created() {
    setTimeout(this.mais, 2000);
    setTimeout(this.mais, 3000);
    setTimeout(this.mais, 4000);
    setTimeout(this.mais, 5000);
    setTimeout(this.mais, 6000);
  },
  mounted() {
    this.$store.dispatch('resetAwaiting');
  },
};
</script>

<style>
  @import '../assets/styles/awaitingorder.css';
</style>
