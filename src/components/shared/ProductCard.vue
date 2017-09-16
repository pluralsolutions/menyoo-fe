<template>
  <div class="product-card">
    <div class="image">
      <img :src="product.image" :alt="product.title">
    </div>
    <router-link class="detail" tag="div"
        :to="{ name: 'produtos', params: { id: product.id }, meta: { p: product }}">
      <div><ProductEvaluation :evaluation="product.evaluation" /></div>
      <div class="title">
        <h2>{{product.title}}</h2>
      </div>
      <div class="description">
        <p>{{product.description}}</p>
      </div>
      <Currency :value="product.unitPrice"></Currency> 
    </router-link>
  </div>
</template>

<script>
import Product from '@/domain/Product';
import ProductEvaluation from '@/components/shared/ProductEvaluation';
import Currency from '@/components/shared/Currency';

export default {
  components: {
    ProductEvaluation,
    Currency,
  },
  props: {
    product: {
      type: Product,
    },
  },
};

</script>
<style scoped src="@/assets/styles/shared/product.css">
</style>
