<template>
  <div :class="$style['product-evaluation-container']" v-if="evaluation">
    <div :class="$style.stars">
      <span :class="$style['star-neutral']"></span>
      <span :class="$style['star-active']" :style="{width: evaluation.score * 18 + 'px'}" />
    </div>
    <div>
      <span :class="$style['count']" v-if="evaluation.evaluationCount && counter">{{evaluation.evaluationCountSimplified()}} avaliações</span>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    evaluation: {
      type: Object,
      required: false,
    },
    counter: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style module>
  .product-evaluation-container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .count {
    font-size: 11px;
    font-weight: 600;
    color: #236b0d;
    text-transform: uppercase;
  }
  .stars {
    position: relative;
    width: calc(18px * 5);
    height: 18px;
  }
  .star-neutral,
  .star-active {
    position: absolute;
    left: 0;
    top: 0;
    height: 16px;
    background: url('@/assets/images/product-detail/star-active.svg');
    background-size: 18px;
  }

  .star-neutral {
    opacity: 0.3;
    width: 100%;
  }
  .star-active{
    opacity: 1;
  }
</style>
