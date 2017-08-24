<template>
  <div>
    <div class="product-header">
      <span class="product-price-unit">Preço unitário</span>
      <span class="product-price">R$ {{ product.price | currency }}</span>
      <div class="product-evaluations" v-if="product.score >= 20 ">
        <span class="star-neutral"></span>
        <span class="star-active" v-bind:style="{width: product.score + '%'}"></span>
      </div>
      </div>
      <div class="product-content">
        <div class="product-title">{{product.title}}</div>
        <div class="product-desc">{{product.description}}</div>
      </div>

      <div class="product-add-remove">
        <div @click="addProduct" class="add" />
        <div class="current-quantity">{{ count }}</div>
        <div @click="removeProduct" class="remove" />
      </div>
  </div>
</template>

<script>
import Product from '@/domain/Product';

export default {
  data() {
    return {
      count: 0,
    };
  },
  props: {
    product: {
      type: Product,
      required: true,
    },
  },
  methods: {
    addProduct: function addProduct() {
      this.count += 1;
    },
    removeProduct: function removeProduct() {
      if (this.count > 0) this.count -= 1;
    },
  },
};
</script>

<style>
  @import '../../assets/styles/shared/product-info.css';
</style>
