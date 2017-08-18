<template>
  <div class="photo-circle">
    <img :src="src" :alt="alt" :style="`height: ${size}px; width: ${size}px;`">
  </div>
</template>

<script>
export default {
  props: {
    src: { },
    alt: {
      default: '',
    },
    size: {
      default: 32,
    },
  },
};
</script>

<style>

.photo-circle {
  display: inline-flex;
  box-sizing: content-box;
  background-clip: content-box;
  border-radius: 50%;
  margin: 4px;
}

.photo-circle img {
  border: 1px solid #eee;
  height: 32px;
  width: 32px;
  border-radius: 50%;
}

</style>
