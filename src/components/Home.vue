<template>
  <div>
      <!--<form @submit.prevent="filtrar()">-->
        <img src="../assets/lupa.svg" id="filtro_ico"></img>
        <input v-model="filtro" name="filtro" id="filtro" type="text" autofocus="true"
          autocomplete="true" placeholder="Busque seu prato preferido"></input>
          <br>
          <div style="border:1px solid black;display:inline-block">{{filtro}}</div>
      <!--</form>-->
      <div class="lista">
        <ul class="lista-pratos">
          <li class="lista-pratos-item" v-for="prato in pratosComFiltro" v-bind:key="prato">
            <PainelPrato :titulo="prato.titulo">
              {{prato}}
            <img width="99%" :src="prato.urlPhoto" :alt="prato.titulo">
            </PainelPrato>
          </li>
        </ul>
      </div> 
  </div>
</template>

<script>
import PainelPrato from '@/components/shared/PainelPrato';
import Prato from '../domain/Prato';

export default {
  name: 'home',
  components: {
    PainelPrato,
  },
  data() {
    return {
      filtro: '',
      pratos: [],
    };
  },
  methods: {
    filtrar() {
      this.filtro = this.filtro.trim();
    },
  },
  computed: {
    pratosComFiltro() {
      if (this.filtro) {
        // expr regular case insensitivo
        const exp = new RegExp(this.filtro.trim(), 'i');
        // testa o array e retorna
        return this.pratos.filter(p => exp.test(p.titulo));
      }
      return this.pratos;
    },
  },
  created() {
    // this.$http.get('http://localhost:3000/v1/fotos')
      // .then(res => res.json())
      // .then(fotos => this.fotos = fotos, err => console.log(err));

    this.pratos = [
      new Prato('Mussarela', 'Queijo mussarela e massa média caseira', 'http://www.pizzasdonatello.com.br/imagens/slides/7867e857eef46fd12dfbd2105dc4e3e6.jpg', 4),
      new Prato('Manjericão', 'Queijo mussarela e tomates frescos e massa média caseira', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUhAGJJABIFdWDSc4ysVMwaIbeXja7Dz_3XuVLWKnY6BfsJfHMWA', 5),
    ];
  },
};
</script>
<style>
#filtro{
  padding-left: 32px;
  height: 32px;
}
#filtro_ico{
  width: 16px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  left: 30px;
  top: 4px;
  opacity: 0.5;
  /*z-index:2;*/
}

.lista{
  width: 100%;
  /*height: 160px;*/
  /*overflow: scroll;  */
}

.lista-pratos {
  list-style: none;
}

.lista-pratos .lista-pratos-item {
  display: inline-block;
}


</style>
