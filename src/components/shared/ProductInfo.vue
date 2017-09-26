<template>
  <div class="product-info-container">
    <div class="product-header">
      <span class="product-price-unit">Preço unitário</span>
      <span class="product-price">R$ {{ this.product.unitPrice | currency }}</span>
      <ProductEvaluation v-if="rating" :evaluation="product.evaluation" :counter="false"/>
    </div>
    <div class="product-content">
      <div class="product-title">{{product.title}}</div>
      <div class="product-desc" v-if="description">{{product.description}}</div>
    </div>
    <div v-if="summary" class="summary-items">
      <Counter :plusCallback="updatePrice" :minusCallback="updatePrice" v-model:value="productQuantity"/>
      <div class="current-price">
        R$ {{ itemsPrice | currency }}
      </div>
    </div>
  </div>
</template>

<script>
import ProductEvaluation from '@/components/shared/ProductEvaluation';
import Counter from '@/components/shared/Counter';
import serviceOrder from '@/service/order_service';

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
      type: Object,
      required: true,
    },
    productOrderID: {
      type: Number,
    },
    orderID: {
      type: Number,
    },
    additionalPrice: {
      type: Number,
      default: 0,
    },
    summary: {
      type: Boolean,
      default: true,
    },
    rating: {
      type: Boolean,
      default: true,
    },
    description: {
      type: Boolean,
      default: true,
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
      if (this.orderID && this.productOrderID) {
        serviceOrder.updateProductOrderQuantity(
          this.$store.dispatch,
          { restaurantID: 1, orderID: this.orderID, productID: this.productOrderID },
        );
      }
      this.itemsPrice = this.productQuantity * (this.product.unitPrice + this.additionalPrice);
    },
  },
  created() {
    this.updatePrice();
  },
};
</script>

<style src='../../assets/styles/shared/product-info.css'>
</style>
