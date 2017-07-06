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
<style scoped>
.burger{
  position: fixed;
  right: 1em;
  height: 5px;     
  z-index: 2;
}
.container {
    display: inline-block;
    cursor: pointer;
}
.bar1, .bar2, .bar3 {
    width: 35px;
    height: 5px;
    background-color: #333;
    margin: 6px 0;
    transition: 0.4s;
}
.close {
  z-index: 999;
}
.close .bar1 {
    -webkit-transform: rotate(-45deg) translate(-8px, 8px) ;
    transform: rotate(-45deg) translate(-8px, 8px) ;
}
.close .bar2 {opacity: 0; width: 0px; margin-left: 18px; }
.close .bar3 {
    -webkit-transform: rotate(45deg) translate(-7px, -8px) ;
    transform: rotate(45deg) translate(-7px, -8px) ;
}

</style>
