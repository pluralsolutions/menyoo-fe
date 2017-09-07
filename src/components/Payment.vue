<template>
  <div class="payment">
    <div class="payment-head">
      <div>
        <label>TOTAL DA COMPRA</label>
        <div class="currency">R$ {{total | currency}}</div>
        <div><a href=#>Detalhes</a></div>
      </div>
      <div>
        <label>Adicionar serviço</label>
        <vue-slider 
          :dot-size="14"
          :max="100"
          height="2"
          tooltip="always" :speed="0.2"
          :slider-style="{'background-color': '#3366cc', 'box-shadow': '-0.1px 2px 5px 1px rgba(0, 0, 0, 0.2'}"
          formatter="{value} %"
          ref="slider" v-model="gorjeta"></vue-slider>
        <div class="currency">R$ {{(150*gorjeta/100)|currency}}</div>        
      </div>
    </div>
    <div class="payment-slider">
      <label>Cartões Cadastrados</label>
    <carousel-3d :controls-visible="true" :display="3" @after-slide-change="afterchange">
      <slide :style="{'background-color': '#6666FF'}" class="payment-card" v-for="(card, k, i) in cards" :key="card.id" :index="k">
        Slide {{k}}-{{i}} Content {{card}}
      </slide>
    </carousel-3d>
    </div>
    <div>
      <label>Detalhes do cartão</label>
      <div class="detailcard">
        <PaymentCardDetail :card="selectedCard" />
      </div>
    </div>
    <div>
      <ButtonComponent type="secondary" >PAGAR</ButtonComponent>
    </div>
  </div>
</template>

<script>
import ButtonComponent from '@/components/shared/Button';
import PaymentCard from '@/domain/PaymentCard';
import { Carousel3d, Slide } from 'vue-carousel-3d';
import vueSlider from 'vue-slider-component';

const PaymentCardDetail = {
  props: {
    card: { type: PaymentCard },
  },
  template: '<div class="paycard"><div class="name">{{card.name}}</div><div class="number">{{card.number}}</div><div class="expireat">{{card.expireAt}}</div><div class="cvv">{{card.cvv}}</div></div>',
};

export default {
  components: {
    Carousel3d,
    Slide,
    vueSlider,
    PaymentCardDetail,
    ButtonComponent,
  },
  data() {
    return {
      gorjeta: 10,
      total: 132.26,
      cards: PaymentCard.sample(5),
      selectedIndex: 0,
    };
  },
  computed: {
    selectedCard: function selectedCard() {
      return this.cards[this.selectedIndex];
    },
  },
  methods: {
    afterchange(idx) {
      console.log(idx);
      this.selectedIndex = idx;
    },
  },
};
</script>

<style>
.payment-card{
  background-color: #055885;
}
</style>
