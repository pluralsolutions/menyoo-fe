<template>
  <div class="product-card">
    <div class="image">
      <img :src="product.image" :alt="product.title">
    </div>
    <div class="detail">
      <ProductEvaluation :score="product.score" :evaluationCount="product.evaluationCount" />
      <div class="title">
        <router-link tag="h2" :to="{ name: 'produtos', params: { id: product.id }}">
          <a>{{product.title}}</a>
        </router-link>
      </div>
      <div class="description">
        <p>{{product.description}}</p>
      </div>
      <div class="unitPrice">
        R$ <span>{{ product.unitPrice | currency }}</span>
      </div>
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
    },
  },
};
</script>

<style>
  @import '../../assets/styles/shared/product.css';
</style>
