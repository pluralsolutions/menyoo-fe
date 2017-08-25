<template>
  <button :class="btnClass()" @click="click"><slot></slot></button>
</template>
<script>
export default {
  props: {
    type: { type: String, default: 'primary' },
    size: { type: String, default: 'medium' },
  },
  methods: {
    click: function click(e) {
      this.$emit('click', e);
    },
    btnClass: function btnClass() {
      return 'button '.concat(this.type).concat(' ').concat(this.size);
    },
  },
  data() {
    return {
    };
  },
};
</script>

<style>
.button {
  width: 80%;
  height: 44px;
  background-color: #3366cc;
  border: 0;
  color: #FFF;
  box-shadow: 0 0 8px 0.4px rgba(0, 0, 0, 0.46), inset 0 0 6.8px 3.2px rgba(0, 0, 0, 0.06);
}
.button.primary{
  background-color: #3366cc;
}
.button.secondary{
  background-color: #3366cc;
}
.button.large{
  width: 80%;  
}
.button.medium{
  width: 45%;  
}
.button.small{
  width: 24%;  
}
</style>
