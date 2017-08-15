<template>
  <router-link to="/checkout" v-if="numitem>0">
    <div class="fabCart" draggable="true" :id="id">
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
    id: {
      type: String,
      default: 'dragme',
    },
    numitem: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
    };
  },
  methods: {
  },
  mounted() {
    const drop = function d(event) {
      const offset = event.dataTransfer.getData('fab').split(',');
      const dm = document.getElementById(offset[2]);
      if (dm && dm.style) {
        dm.style.left = ''.concat(event.clientX + parseInt(offset[0], 10)).concat('px');
        dm.style.top = ''.concat(event.clientY + parseInt(offset[1], 10)).concat('px');
      }
      event.preventDefault();
      return false;
    };
    const dragover = function o(e) {
      e.preventDefault();
    };
    const dragstart = function s(event) {
      const style = window.getComputedStyle(event.target, null);
      const str = ''.concat(parseInt(style.getPropertyValue('left') || '0', 10) - event.clientX
        , ',', (parseInt(style.getPropertyValue('top') || '0', 10) - event.clientY)
        , ',', (event.target.id));
      event.dataTransfer.setData('fab', str);
    };
    const dm = this.$el || document.getElementById(this.id);
    dm.addEventListener('dragstart', dragstart, false);
    document.body.addEventListener('dragover', dragover, false);
    document.body.addEventListener('drop', drop, false);
  },
};
</script>

<style>
.fabCart1{
  margin-top: 8px;
  font-size: 16pt;
}
.fabCart{
  z-index: 99;
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
