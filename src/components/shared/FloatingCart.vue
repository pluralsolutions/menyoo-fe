<template>
  <router-link to="/checkout" v-if="numitem>0">
    <div class="fabCart" draggable="true">
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
  methods: {
  },
  mounted() {
    const dm = this.$el.firstChild;
    if (dm != null) {
      window.addEventListener('load', () => {
        const drop = function move(event) {
          let clientX = 0;
          let clientY = 0;
          if (event.touches && event.touches.length === 1) {
            clientX = event.touches[0].clientX;
            clientY = event.touches[0].clientY;
          } else {
            clientX = event.clientX;
            clientY = event.clientY;
          }
          if (dm && dm.style) {
            dm.style.left = ''.concat(clientX - 40).concat('px');
            dm.style.top = ''.concat(clientY - 40).concat('px');
          }
          event.preventDefault();
          return false;
        };
        const dragover = (event) => {
          event.preventDefault();
        };
        document.body.addEventListener('dragover', dragover, false);
        document.body.addEventListener('drop', drop, false);
        document.body.addEventListener('touchmove', drop, true);
        document.body.addEventListener('touchend', drop, true);
      }, false);
    }
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
  height: 64px;
  width: 64px;
  border-radius: 50%; 
  box-shadow: 0px 0px 6px 4px rgba(0,0,0,.15);
  background-color: #4A79D1; 
  font-size: 9pt;
  color: white;
  vertical-align: middle;
  text-align: center;
  bottom: 40px;
  right: 20px;
}  
</style>
