<template>
  <div class="payment">
    <div class="payment-head row">
      <div class="buy-price">
        <div class="label">TOTAL DA COMPRA</div>
        <currency color="green" :value="total"/>
        <div><a href=#>Detalhes</a></div>
      </div>
      <div class="add-services">
        <div class="label">Adicionar serviço</div>
        <vue-slider 
          :dot-size="14"
          height="2"
          tooltip="hover" :speed="0.2"
          :slider-style="{'background-color': '#3366cc', 'box-shadow': '-0.1px 2px 5px 1px rgba(0, 0, 0, 0.2'}"
          formatter="{value} %"
          ref="slider" v-model="gorjeta" />
        <currency color="green" :value="(total*gorjeta/100)"/>
      </div>
    </div>
    <div class="payment-slider">
      <div class="label">Cartões Cadastrados</div>
      <carousel-3d :controls-visible="true" :display="3" @after-slide-change="afterchange">
        <slide :style="{'background-color': '#6666FF'}" class="payment-card" v-for="(card, k, i) in cards" :key="card.id" :index="k">
          Slide {{k}}-{{i}} Content {{card}}
        </slide>
      </carousel-3d>
    </div>
    <div class="payment-card-selected-detail">
      <div class="label">Detalhes do cartão</div>
      <div class="paycard">
        <div class="name">{{selectedCard.name}}</div>
        <div class="number">{{selectedCard.number}}</div>
        <div class="expireat">{{selectedCard.expireAt}}</div>
      </div>
    </div>
    <div class="paybutton">
      <ButtonComponent type="secondary">PAGAR</ButtonComponent>
    </div>
  </div>
</template>

<script>
import currency from '@/components/shared/Currency';
import ButtonComponent from '@/components/shared/Button';
import PaymentCard from '@/domain/PaymentCard';
import { Carousel3d, Slide } from 'vue-carousel-3d';
import vueSlider from 'vue-slider-component';

export default {
  components: {
    Carousel3d,
    Slide,
    vueSlider,
    currency,
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

<style scoped src="@/assets/styles/payment.css">
</style>
