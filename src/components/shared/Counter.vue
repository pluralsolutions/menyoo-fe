<template>
  <div class="counter">
    <div class="plus" @click="plus"></div>
    <div class="val">{{value}}</div>
    <div class="minus" @click="minus"/></div>
  </div>
</template>

<script>
export default {
  name: 'counter',
  props: {
    value: {
      type: Number,
      default: 0,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 999,
    },
  },
  data() {
    return {
    };
  },
  methods: {
    plus: function a() {
      const newvalue = (this.value >= this.max ? this.max - 1 : this.value) + 1;
      this.$emit('input', newvalue);
    },
    minus: function a() {
      const newvalue = (this.value <= this.min ? this.min + 1 : this.value) - 1;
      this.$emit('input', newvalue);
    },
  },
};
</script>

<style>
  @import '../../assets/styles/shared/counter.css';
</style>
