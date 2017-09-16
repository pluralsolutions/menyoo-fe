<template>
  <div class="product-card">
    <div class="image">
      <img :src="product.image" :alt="product.title">
    </div>
    <router-link tag="div" class="detail" :to="{ name: 'produtos', params: { id: product.id }}">
      <ProductEvaluation :evaluation="product.evaluation" />
      <div class="title">
        <h2>{{product.title}}</h2>
      </div>
      <div class="description">
        <p>{{product.description}}</p>
      </div>
      <div class="unitPrice">
        R$ <span>{{ product.unitPrice | currency }}</span>
      </div>
    </router-link>
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

<style src="@/assets/styles/shared/product.css">
</style>
