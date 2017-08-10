<template>
  <div class="painel">
    <h2 class="painel-titulo" @dblclick="visivel = !visivel">{{prato.titulo}}</h2>
    <div class="painel-conteudo" v-show="visivel">
      <div style="display: inline-block;border-color:aqua">
        <img class="painel-foto" :src="prato.urlPhoto" :alt="prato.titulo">
      </div>
      <div style="display: inline-block;border-color:aqua;max-width: 50%;">
        <img class="estrelas" src="static\img\estrela.svg" v-for="num in prato.estrelas" v-bind:key="prato._id" />
        <div class="painel-descricao ">{{prato.descricao}}</div>
      </div>
      <br class="clearfix" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['prato'],
  data() {
    return {
      visivel: true,
      quantidade: 0,
    };
  },
};
</script>
<style scoped>
  @import '../../assets/styles/shared/product.css'
</style>
