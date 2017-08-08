<template>
  <div>
    <div :class="{'restaurante-head':1, 'sticky': sticky}" :style="'background-image: url('+resto.urlHeader+')'">
      <div class="center restaurante-bg">
        <div class="restaurante-container">
          <h1 class="restaurante-name">{{resto.nome}}</h1>
          <img :class="{'imglogo':1, 'sticky': sticky}" :src="resto.urlLogo">
        </div>
      </div>
    </div>
    <div style="height:140px;"></div>
  </div>
</template>

<script>
import Restaurante from '../../domain/Restaurante';

export default {
  name: 'RestauranteHeader',
  data() {
    return {
      sticky: false,
      resto: new Restaurante('Restaurante',
        'data:image/png;base64,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',
        'https://img.pystatic.com/chains/br/dominos-pizza-v2.jpg'),
    };
  },
  created() {
    window.addEventListener('scroll', () => {
      this.sticky = (window && window.document && window.document.body) &&
        (window.document.body.scrollTop || 0) > 100;
    });
  },
};
</script>
<style>
  .center{
    text-align: center;
  }
  .restaurante-head {
    overflow: hidden;
    position: fixed;
    width: 100%;
    height: 146px;
    padding: 0px;
    z-index: 9;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    vertical-align: text-bottom;
    transition: 1s;
    -moz-transition: 1s;
    -o-transition: 1s;
    -ms-transition: 1s;
    -webkit-transition: 1s;
  }
  .restaurante-bg {
    background: rgba(192, 16, 36, 0.4);
    height: 100%;
    width: 100%;
    min-height: 160px;
    position: relative;
    text-align: bottom;
    vertical-align: text-bottom;
  }
  .restaurante-container {
    display: inline-block;
    margin: auto auto;
  }
  .restaurante-name {
    color: #ffffff;
    display: block;
    font-size: 22px;
    line-height: 1;
    letter-spacing: .02em;
    font-weight: bolder;
    box-sizing: border-box;
  }

  .imglogo {
    position: relative;
    height: 80px;
    top: 5px;
    transition: .2s;
    -moz-transition: .2s;
    -o-transition: .2s;
    -ms-transition: .2s;
    -webkit-transition: .2s;
  }

  .imglogo.sticky {
    position: absolute;
    height: 30px;
    top: 10px;
    left: 10px;
  }

  .restaurante-head.sticky {
    top: 50px;
    height: 50px;
  }
</style>
