<template>
  <div :class="$style['product-evaluation-container']">
    <span :class="$style['count']" v-if="evaluation.evaluationCount && counter">{{evaluation.evaluationCount}} avaliações</span>
    <div :class="$style.stars">
      <span :class="$style['star-neutral']"></span>
      <span :class="$style['star-active']" :style="{width: evaluation.score + '%'}" />
    </div>
  </div>
</template>

<script>
import Evaluation from '@/domain/Evaluation';

export default {
  props: {
    evaluation: {
      type: Evaluation,
      required: true,
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
