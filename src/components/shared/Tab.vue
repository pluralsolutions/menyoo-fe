<template>
  <div v-show="active"><slot></slot></div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      active: false,
    };
  },
  created() {
    this.$dispatch('tab-created', this.title);
  },
};
</script>
