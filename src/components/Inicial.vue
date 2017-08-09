<template>
  <div >
    <label>Exemplo {{ msg }}</label>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data() {
      return {
        msg: 'Hello!',
      };
    },
  };
</script>

<style>
div {
  background-image: url('../assets/inicial.png');
  background-position: center;
  background-size: 100%;
  width: 100%;
  height: 100%;
}
</style>
