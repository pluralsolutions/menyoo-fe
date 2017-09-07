<template>
  <div class="payment">
    <div class="payment-head">
      <div>
        <div>TOTAL DA COMPRA</div>
        <div class="currency">R$ {{total | currency}}</div>
        <div><a href=#>Detalhes</a></div>
      </div>
      <div>
        <div>Adicionar serviço</div>
        <vue-slider 
          :dot-size="14"
          :max="100"
          height="2"
          tooltip="hover" :speed="0.2"
          :slider-style="{'background-color': '#3366cc', 'box-shadow': '-0.1px 2px 5px 1px rgba(0, 0, 0, 0.2'}"
          formatter="{value} %"
          ref="slider" v-model="gorjeta"></vue-slider>
        <div class="currency">R$ {{(150*gorjeta/100)|currency}}</div>        
      </div>
    </div>
    <div class="payment-slider">
      <h2>Cartões Cadastrados</h2>
    <carousel-3d :controls-visible="true" :display="3" @after-slide-change="afterchange">
      <slide :style="{'background-color': '#6666FF'}" class="payment-card" v-for="(card, k, i) in cards" :key="card.id" :index="k">
        Slide {{k}}-{{i}} Content {{card}}
      </slide>
    </carousel-3d>
    </div>
  </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
import vueSlider from 'vue-slider-component';
import PaymentCard from '@/domain/PaymentCard';

export default {
  components: {
    Carousel3d,
    Slide,
    vueSlider,
  },
  data() {
    return {
      gorjeta: 10,
      total: 132.26,
      cards: PaymentCard.sample(5),
    };
  },
  methods: {
    afterchange(a) {
      console.log(a);
    },
  },
};
</script>

<style>
.payment-card{
  background-color: #055885;
}
</style>
