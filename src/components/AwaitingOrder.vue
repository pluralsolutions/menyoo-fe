<template>
  <div>
    <div><div @click="mais()">++++</div><div @click="menos()">----</div>{{step}}</div>
    <div :class="{awaitorder:1, step1:1, active: step>=1}"></div>
    <div :class="{awaitorder:1, step2:1, active: step>=2}"></div>
    <div :class="{awaitorder:1, step3:1, active: step>=3}"></div>
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
