<template>
  <router-link tag="button" v-if="routerLinkTo" :to="routerLinkTo" :class="btnClass" @click="onClick">
    <slot></slot>
  </router-link>
  <button v-else :class="btnClass" @click="onClick">
    <slot></slot>
  </button>
</template>
<script>
export default {
  props: {
    type: { type: String, default: 'primary' },
    size: { type: String, default: 'medium' },
    additionalClass: { type: String, default: '' },
    onClick: { type: Function, default: () => null },
    routerLinkTo: {},
  },
  computed: {
    btnClass: function btnClass() {
      return `${this.$style.button} ${this.$style[this.type]} ${this.$style[this.size]} ${this.additionalClass}`;
    },
  },
  data() {
    return {
    };
  },
};
</script>

<style module>
  .button[disabled] {
    -webkit-filter: grayscale(60%) brightness(70%);
    filter: grayscale(60%) brightness(70%);
  }
  .button {
    padding: 14px;
    font-size: 16px;
    margin: 20px auto;
    border: none;
    color: #fff;
    text-transform: uppercase;
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.38), inset 0 0 6.8px 3.2px rgba(0, 0, 0, 0.06);
  }
  .primary{
    background-color: #4a79d1;
  }
  .danger{
    background-color: #f00;
  }
  .secondary{
    background-color: #33cc66;
  }
  .large{
    width: 80%;
  }
  .full {
    width: 100%;
  }
  .medium{
    width: 45%;
  }
  .small{
    width: 24%;
  }
</style>
