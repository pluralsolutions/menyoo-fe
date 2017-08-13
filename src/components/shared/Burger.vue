<template>
  <div @click="open" class="burger">
    <div :class="{'container': true, 'close': isOpen}">
      <div class="bar1"></div><div class="bar2"></div><div class="bar3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'burger',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  watch: {
    value: function val() {
      this.isOpen = this.value;
    },
  },
  methods: {
    open: function bc() {
      this.isOpen = !this.isOpen;
      this.$emit('input', this.isOpen);
    },
    close: function close() {
      this.isOpen = false;
      this.$emit('input', this.isOpen);
    },
  },
};
</script>

<style>
  @import '../../assets/styles/shared/burger.css';
</style>
