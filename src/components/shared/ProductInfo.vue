<template>
  <div>
    <div class="product-header">
      <span class="product-price-unit">Preço unitário</span>
      <span class="product-price">R$ {{ this.product.unitPrice | currency }}</span>
      <ProductEvaluation :evaluation="product.evaluation" :counter="false"/>
    </div>
    <div class="product-content">
      <div class="product-title">{{product.title}}</div>
      <div class="product-desc">{{product.description}}</div>
    </div>
    <div class="summary-items">
      <Counter :plusCallback="updatePrice" :minusCallback="updatePrice" v-model:value="productQuantity"/>
      <div class="current-price">
        R$ {{ itemsPrice | currency }}
      </div>
    </div>
  </div>
</template>

<script>
import Product from '@/domain/Product';
import ProductEvaluation from '@/components/shared/ProductEvaluation';
import Counter from '@/components/shared/Counter';

export default {
  components: {
    ProductEvaluation,
    Counter,
  },
  props: {
    value: {
      type: Number,
      default: 0,
    },
    product: {
      type: Product,
      required: true,
    },
    additionalPrice: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      productQuantity: 1,
      itemsPrice: 0,
    };
  },
  watch: {
    additionalPrice: function additionalPrice() {
      this.updatePrice();
    },
  },
  methods: {
    updatePrice: function updatePrice() {
      this.$emit('input', this.productQuantity);
      this.itemsPrice = (this.product.unitPrice * this.productQuantity) + this.additionalPrice;
    },
  },
  created() {
    this.updatePrice();
  },
};
</script>

<style>
  @import '../../assets/styles/shared/product-info.css';
</style>
