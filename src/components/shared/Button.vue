<template>
  <button :class="btnClass" @click="onClick" ><slot></slot></button>
</template>
<script>
export default {
  props: {
    type: { type: String, default: 'primary' },
    size: { type: String, default: 'medium' },
    additionalClass: { type: String, default: '' },
    onClick: { type: Function, default: () => null },
  },
  computed: {
    btnClass: function btnClass() {
      return `button ${this.type} ${this.size} ${this.additionalClass}`;
    },
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped>
.button {
  background-color: #4a79d1;
  padding: 14px;
  font-size: 16px;
  margin-top: 20px;
  border: none;
  color: #fff;
  text-transform: uppercase;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.38), inset 0 0 6.8px 3.2px rgba(0, 0, 0, 0.06);
}
.button.primary{
  background-color: #4a79d1;
}
.button.secondary{
  background-color: #743;
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
