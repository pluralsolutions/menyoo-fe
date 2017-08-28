<template>
  <div :class="$style['product-evaluation-container']">
    <span :class="$style['count']" v-if="evaluationCount">{{evaluationCount}} avaliações</span>
    <div :class="$style.stars">
      <span :class="$style['star-neutral']"></span>
      <span :class="$style['star-active']" :style="{width: score + '%'}" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    score: {
      type: Number,
      required: true,
    },
    evaluationCount: {
      type: Number,
    },
  },
};
</script>

<style module>
  .product-evaluation-container {
    display: flex;
    flex-direction: column;
  }
  .count {
    font-size: 11px;
    font-weight: 600;
    color: #236b0d;
    text-transform: uppercase;
  }
  .stars {
    position: relative;
    width: calc(15px * 5);
    height: 15px;
  }
  .star-neutral,
  .star-active {
    position: absolute;
    left: 0;
    top: 0;
    height: 15px;
    background: url('@/assets/images/product-detail/star-active.svg');
    background-size: 15px;
  }

  .star-neutral {
    opacity: 0.3;
    width: 100%;
  }
  .star-active{
    opacity: 1;
  }
</style>
