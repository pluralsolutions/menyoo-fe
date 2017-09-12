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
          :max="30"
          height="2"
          tooltip="hover" :speed="0.2"
          :slider-style="{'background-color': '#3366cc', 'box-shadow': '-0.1px 2px 5px 1px rgba(0, 0, 0, 0.2'}"
          formatter="{value} %"
          ref="slider" v-model="tip" />
        <currency color="green" :value="(total*tip/100)"/>
      </div>
    </div>
    <div class="payment-carousel">
      <div class="label">Cartões Cadastrados</div>
      <carousel-3d 
        :controls-visible="true" 
        :width="290/1.5"
        :height="170/1.5"
        display="5"
        @after-slide-change="afterchange">
        <slide
          :class="['payment-card', `card-${card.cardFlag}`]"
          v-for="(card, k, i) in cards" :key="card.id" :index="k">
          <span class="name">{{card.name}}</span>
          <span class="number">{{card.number}}</span>
        </slide>
      </carousel-3d>
    </div>
    <div class="payment-card-selected-detail">
      <div class="label">Detalhes do cartão</div>
      <div class="paycard">
        <div class="name">{{selectedCard.name}}</div>
        <div class="number">{{selectedCard.number}}</div>
        <span class="row">
          <div class="expireat">{{fmt.date(selectedCard.expireAt)}}</div>
          <div class="cvv">{{selectedCard.cvv}}</div>
        </span>
      </div>
    </div>
    <div class="paybutton">
      <ButtonComponent type="secondary" @onClick="payBill">PAGAR</ButtonComponent>
    </div>
  </div>
</template>

<script>
import currency from '@/components/shared/Currency';
import ButtonComponent from '@/components/shared/Button';
import PaymentCard from '@/domain/PaymentCard';
import { Carousel3d, Slide } from 'vue-carousel-3d';
import vueSlider from 'vue-slider-component';

const fmt = {};

fmt.date = function date(data) {
  const d = data.toLocaleString('pt-BR').split(' ')[0].split('/');
  return `${d[1]}-${d[2]}`;
};

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
      fmt,
      tip: 10,
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
      this.selectedIndex = idx;
    },
    payBill() {
      // eslint-disable-next-line
      alert('Pago!');
    },
  },
};
</script>

<style scoped src="@/assets/styles/payment.css">
</style>
