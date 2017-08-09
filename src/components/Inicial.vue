<template>
  <div class="inicial">
    <div class="bg_inicial">
      <div class="img"></div>
    </div>
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
    created() {
      // fazer checagem se o usuario já está logado
    },
  };
</script>

<style>
  .inicial {
    width: 100%;
    height: 100%;
  }
  .bg_inicial {
    background-image: url('../assets/inicial.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100%;
    width: 100%;
    height: 100%;
    top: 0px;
    position: fixed;
    text-align: center;
  }
  .img {
    background-image: url('../assets/logo.png');
    background-position: 50% center;
    background-repeat: no-repeat;
    background-size: 100%;
    width: 100%;
    height: 100%;
    top: 0px;
    position: fixed;
  }
  header{
    display: none;
  }
</style>
