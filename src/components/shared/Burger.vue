<template>
  <div @click="burgerclick">
    <div :class="{'container': true, 'close': open}">
      <div class="bar1"></div><div class="bar2"></div><div class="bar3"></div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'burger',
  props: {
    navid: {
      type: String,
      required: true,
      default: 'nav',
    },
  },
  data() {
    return {
      burger: false,
      open: false,
    };
  },
  methods: {
    burgerclick: function bc() {
      this.open = !this.open;
      if (this.navid) {
        const nav = document.getElementById(this.navid);
        if (nav) {
          let disp = 'none';
          nav.$elBurger = this;
          if (this.open) {
            disp = 'block';
          }
          nav.style.display = disp;
        }
      }
      this.$emit('clicked', this.open);
    },
  },
};
</script>
<style scoped>
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
.close .bar1 {
    -webkit-transform: rotate(-45deg) translate(-8px, 8px) ;
    transform: rotate(-45deg) translate(-8px, 8px) ;
}
.close .bar2 {opacity: 0;}
.close .bar3 {
    -webkit-transform: rotate(45deg) translate(-7px, -8px) ;
    transform: rotate(45deg) translate(-7px, -8px) ;
}

</style>
