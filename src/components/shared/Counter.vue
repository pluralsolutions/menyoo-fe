<template>
  <div :class="[this.$style.counterContainer, this.$style[this.justifyContent]]">
    <div :class="this.$style.plus" @click="plus"></div>
    <div v-if="showCounter">{{nValue}}</div>
    <div :class="this.$style.minus" @click="minus"/></div>
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
    showCounter: {
      type: Boolean,
      default: true,
    },
    justifyContent: {
      type: String,
      default: '',
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

<style module>
  .counter-container {
    display: flex;
  }

  .flex-end {
   justify-content: flex-end; 
  }

  .plus,
  .minus {
    width: 22px;
    height: 22px;
    background-repeat: no-repeat;
    cursor: pointer;
  }

  .plus {
    background: url('@/assets/images/counter/plus.svg');
    margin-right: 10px;
  }

  .minus {
    background: url('@/assets/images/counter/minus.svg');
    margin-left: 10px;
  }
</style>
