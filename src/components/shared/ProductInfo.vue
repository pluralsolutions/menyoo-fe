<template>
  <div>
    <div class="product-header">
      <span class="product-price-unit">Preço unitário</span>
      <span class="product-price">R$ {{ this.product.unitPrice | currency }}</span>
      <div class="product-evaluations" v-if="product.score >= 20 ">
        <span class="star-neutral"></span>
        <span class="star-active" v-bind:style="{width: product.score + '%'}"></span>
      </div>
      </div>
      <div class="product-content">
        <div class="product-title">{{product.title}}</div>
        <div class="product-desc">{{product.description}}</div>
      </div>
      <div class="summary-items">
        <Counter :plusCallback="addProduct" :minusCallback="removeProduct" v-model:value="count"/>
        <div class="current-price">
          R$ {{ itemsPrice | currency }}
        </div>
      </div>
  </div>
</template>

<script>
import Product from '@/domain/Product';
import Counter from '@/components/shared/Counter';

export default {
  data() {
    return {
      count: 1,
      itemsPrice: this.product.unitPrice,
    };
  },
  components: {
    Counter,
  },
  props: {
    product: {
      type: Product,
      required: true,
    },
  },
  methods: {
    addProduct: function addProduct() {
      this.itemsPrice = this.product.unitPrice * this.count;
    },
    removeProduct: function removeProduct() {
      if (this.count > 1) {
        this.count -= 1;
        this.itemsPrice = this.product.unitPrice * this.count;
      }
    },
  },
};
</script>

<style>
  @import '../../assets/styles/shared/product-info.css';
</style>
