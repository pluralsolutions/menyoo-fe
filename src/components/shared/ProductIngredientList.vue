<template>
  <div class="custom-ingredients">
    <span class="title">Personalize seus ingredientes</span>
    <ul class="ingredients-list">
      <form v-on:submit.prevent="onSubmit">
        <li v-for="group in product.ingredients" v-bind:key="group.name">
          <span @click="toogleOptions" class="ingredientes-section active"> {{group.title}}</span>
          <ul>
            <li v-for="item in group.items" v-bind:key="item.id"
                @click="toogleIt" :data-price="item.additionalPrice">
              <input
                  type="checkbox" name="ingredients"
                  :value="item.id" :checked="item.checked">
              <span class="ingredient-name">{{item.name}}</span>
              <span class="additional-cost" v-if="item.additionalPrice">+R$ {{item.additionalPrice | currency}}</span>
            </li>
          </ul>
        </li>
        <ButtonComponent additionalClass="add-order">Adicionar ao pedido</ButtonComponent>
      </form>
    </ul>
  </div>
</template>

<script>
import ButtonComponent from '@/components/shared/Button';

export default {
  components: {
    ButtonComponent,
  },
  props: {
    value: {
      type: Number,
      default: 0,
    },
    product: {
      default: null,
    },
    onSubmit: {
      type: Function,
    },
  },
  data() {
    return {
      additionalPrice: 0,
    };
  },
  methods: {
    toogleIt: function toogleIt(event) {
      const target = event.currentTarget;
      const additionalPrice = target.getAttribute('data-price');
      const cb = target.getElementsByTagName('input')[0];
      if (cb !== event.target) {
        cb.checked = !cb.checked;
      }

      if (additionalPrice) {
        if (cb.checked) {
          this.additionalPrice += parseFloat(additionalPrice);
        } else {
          this.additionalPrice -= parseFloat(additionalPrice);
        }
      }
      this.$emit('input', this.additionalPrice);
    },
    toogleOptions: function toogleOptions(event) {
      event.target.classList.toggle('active');
    },
  },
};
</script>

<style>
  @import '../../assets/styles/shared/product-ingredient-list.css';
</style>
