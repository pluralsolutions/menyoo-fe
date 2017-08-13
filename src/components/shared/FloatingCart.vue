<template>
  <router-link to="/checkout" v-if="numitem>0">
    <div class="fabCart">
      <div class="fabCart1">
        <img src="../../assets/images/carrinho.svg" width="19"> {{numitem}}
      </div>
      <div>
        ITENS NO<br>PEDIDO
      </div>
    </div>
  </router-link>  
</template>

<script>
export default {
  props: {
    numitem: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
    };
  },
};
</script>

<style>
.fabCart1{
  margin-top: 8px;
  font-size: 16pt;
}
.fabCart{
  position: fixed;
  bottom: 40px;
  right: 20px;
  height: 64px;
  width: 64px;
  border-radius: 50%; 
  box-shadow: 0px 0px 6px 4px rgba(0,0,0,.15);
  background-color: #4A79D1; 
  font-size: 9pt;
  color: white;
  vertical-align: middle;
  text-align: center;
}  
</style>
