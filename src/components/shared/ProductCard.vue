<template>
  <div class="product-card">
    <!-- review -->
    <div class="image" v-if="review">
      <img :src="product.image" :alt="product.title">
    </div>
    <div class="detail" v-if="review">
      <div class="title">
        <h2>{{product.title}}</h2>
      </div>
      <div class="description">
        <p>{{product.description}}</p>
      </div>
      <div class="row-star">
        <div :class="['star', {'star-active': score>=i}]" v-for="i in 5" :key="i" :value="i" @click="sendReview(i)" />
      </div>
    </div>
    <!-- fim review -->
    <div class="image" v-if="!review">
      <img :src="product.image" :alt="product.title">
    </div>
    <router-link v-if="!review" class="detail" tag="div"
        :to="{ name: 'produtos', params: { id: product.id }, meta: { p: product }}">
      <div><ProductEvaluation :evaluation="product.evaluation" v-if="product.evaluation" /></div>
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
  data() {
    return {
      score: 0,
    };
  },
  components: {
    ProductEvaluation,
    Currency,
  },
  methods: {
    sendReview(index) {
      this.score = (this.score === index) ? 0 : index;
      // TODO make request to API to update
      // “/users/me/restaurants/{restaurant_id}/products/{product_id}/evaluations”
    },
  },
  props: {
    review: {
      type: Boolean,
      default: false,
    },
    product: {
      type: Product,
    },
  },
};

</script>
<style scoped src="@/assets/styles/shared/product.css">
</style>
