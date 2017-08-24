<template>
  <div>
    <div class="awaitorder">
      <div :class="{active: step>=1}"><img src="../assets/images/step1.svg"/><span>Seu pedido já foi para o balcão do chefe</span></div>
      <div :class="{active: step>=2}"><img src="../assets/images/step2.svg"/><span>Seu pedido está sendo preparado</span></div>
      <div :class="{active: step>=3}"><img src="../assets/images/step3.svg"/><span>Seu pedido está a caminho da sua mesa</span></div>
    </div>
	<button>PAGAR</button>
    <div><button @click="mais()">+++</button> {{ step }} <button @click="menos()">----</button> </div>
  </div>
</template>

<script>
import RestaurantHero from '@/components/shared/RestaurantHero';

export default {
  name: 'AwaitingOrder',
  components: {
    RestaurantHero,
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
