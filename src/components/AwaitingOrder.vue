<template>
  <div>
    <NavigationBar/>
    <div class="awaitorder">
      <div :class="{active: step>=1}"><img src="../assets/images/step1.svg"/><span>SEU PEDIDO JÁ FOI PARA O BALCÃO DO CHEFE</span></div>
      <div :class="{active: step>=2}"><img src="../assets/images/step2.svg"/><span>SEU PEDIDO ESTÁ SENDO PREPARADO</span></div>
      <div :class="{active: step>=3}"><img src="../assets/images/step3.svg"/><span>SEU PEDIDO ESTÁ A CAMINHO DA SUA MESA</span></div>
    </div>
    <ButtonComponent :onClick="pagar()" size="large" v-if="step>=3">pagar</ButtonComponent>
    <br/>
    <div><button @click="mais()">+++</button> {{ step }} <button @click="menos()">----</button> </div>
     <OrderEvaluationPush v-show="step>=5"/> 
  </div>
</template>

<script>
import NavigationBar from '@/components/shared/NavigationBar';
import ButtonComponent from '@/components/shared/Button';
import OrderEvaluationPush from '@/components/shared/OrderEvaluationPush';

export default {
  name: 'AwaitingOrder',
  components: {
    NavigationBar,
    ButtonComponent,
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
      this.$router.push({ name: 'pay-order' });
    },
  },
  computed: {
    step() {
      return this.$store.getters.orderStep;
    },
  },
  created() {
    setTimeout(this.mais, 3000);
    setTimeout(this.mais, 6000);
    setTimeout(this.mais, 8000);
    setTimeout(this.mais, 10000);
    setTimeout(this.mais, 12000);
  },
};
</script>

<style>
  @import '../assets/styles/awaitingorder.css';
</style>
