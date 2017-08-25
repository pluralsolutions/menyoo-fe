<template>
  <div class="counter-container">
    <div class="plus" @click="plus"></div>
    <div class="val">{{nValue}}</div>
    <div class="minus" @click="minus"/></div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0,
    },
    min: {
      type: Number,
      default: 1,
    },
    max: {
      type: Number,
      default: 999,
    },
    plusCallback: {
      type: Function,
    },
    minusCallback: {
      type: Function,
    },
  },
  data() {
    return {
      nValue: this.value,
    };
  },
  methods: {
    plus: function a() {
      const newvalue = (this.nValue >= this.max ? this.max - 1 : this.nValue) + 1;
      this.$emit('input', newvalue);
      this.nValue = newvalue;
      if (typeof this.minusCallback !== 'undefined') this.plusCallback();
    },
    minus: function a() {
      const newvalue = (this.nValue <= this.min ? this.min + 1 : this.nValue) - 1;
      this.$emit('input', newvalue);
      this.nValue = newvalue;
      if (typeof this.minusCallback !== 'undefined') this.minusCallback();
    },
  },
};
</script>

<style>
  @import '../../assets/styles/shared/counter.css';
</style>
