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
  .painel-conteudo {
    text-align: left;
    position: relative;
    
  }
  .painel {
    display: inline-block;
    margin: 6px;
    box-shadow: 5px 5px 10px grey;
    width: 95%;
    vertical-align: top;
    text-align: center;
    background-color: rgb(249, 242, 242);
  }

  .painel-titulo {
    text-align: center;
    margin: 0 0 5px 0;
    padding: 8px;
    text-transform: uppercase;
    background-color: rgb(226, 222, 222);
  }

  .painel-foto {
    width: 120px;
    height: 120px;
    margin: 0 10px 0 0;
  }

  .painel-descricao {
    
  }

  .painel {
    box-shadow: 5px 5px 5px;
  }

  .estrelas {
    width: 28px;
  }
</style>
