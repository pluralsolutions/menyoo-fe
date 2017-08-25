<template>
  <div>
    <NavigationBar/>
    <div class="awaitorder">
      <div :class="{active: step>=1}"><img src="../assets/images/step1.svg"/><span>SEU PEDIDO JÁ FOI PARA O BALCÃO DO CHEFE</span></div>
      <div :class="{active: step>=2}"><img src="../assets/images/step2.svg"/><span>SEU PEDIDO ESTÁ SENDO PREPARADO</span></div>
      <div :class="{active: step>=3}"><img src="../assets/images/step3.svg"/><span>SEU PEDIDO ESTÁ A CAMINHO DA SUA MESA</span></div>
    </div>
    <button class="button" v-if="step>=3">PAGAR</button>
    <br/>
    <div><button @click="mais()">+++</button> {{ step }} <button @click="menos()">----</button> </div>
  </div>
</template>

<script>
import NavigationBar from '@/components/shared/NavigationBar';

export default {
  name: 'AwaitingOrder',
  components: {
    NavigationBar,
  },
  methods: {
    mais() {
      this.$store.dispatch('updateStep', { kind: '+' });
    },
    menos() {
      this.$store.dispatch('updateStep', { kind: '-' });
    },
  },
  computed: {
    step() {
      return this.$store.getters.orderStep;
    },
  },
};
</script>

<style>
  @import '../assets/styles/awaitingorder.css';
</style>
