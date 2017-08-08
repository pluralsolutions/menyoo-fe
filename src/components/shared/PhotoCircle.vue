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
  box-shadow: inset 1px 5px 3px 0px rgba(0,0,0,.15), 0px 3px 5px 3px rgba(0,0,0,.15);
  margin: 4px;
}

.photo-circle img {
  border: 1px solid #eee;
  height: 32px;
  width: 32px;
  border-radius: 50%;  
}

</style>
