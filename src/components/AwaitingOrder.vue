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
  data() {
    return {
      // step: 1,
    };
  },
  methods: {
    mais() {
      console.log(this.$store);
      this.$store.state.awaitingorder.step = 2;
    },
    menos() {
      console.log(this.$store);
      this.$store.state.awaitingorder.step = 3;
    },
    refresh() {
      // TODO: buscar atualização
    },
  },
  computed: {
    step() {
      return this.$store.state.awaitingorder.step;
    },
  },
};
</script>

<style>
  @import '../assets/styles/awaitingorder.css';
</style>
