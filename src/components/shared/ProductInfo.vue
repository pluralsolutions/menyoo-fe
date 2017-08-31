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
  </div>
</template>

<script>
import Product from '@/domain/Product';
import ProductEvaluation from '@/components/shared/ProductEvaluation';

export default {
  components: {
    ProductEvaluation,
  },
  props: {
    product: {
      type: Product,
      required: true,
    },
  },
};
</script>

<style>
  @import '../../assets/styles/shared/product-info.css';
</style>
