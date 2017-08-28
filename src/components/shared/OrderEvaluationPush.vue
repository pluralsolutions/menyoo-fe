<template>
  <div class="order-evaluation-push">
    <div class="x">X</div>
    <div class="row">
      <div class="label">Terminou de comer?<br>Avalie seu prato</div>
    </div>
      <ProductEvaluation style="text-align:center" :score="10"></ProductEvaluation>
    <div class="row">      
      <ButtonComponent size="large">Avalie</ButtonComponent>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    ButtonComponent: () => import('@/components/shared/Button'),
    ProductEvaluation: () => import('@/components/shared/ProductEvaluation'),
  },
  methods: {
  },
};
</script>
<style>
.order-evaluation-push {
  position: fixed;
  width: 100%;
  /* 25% of visual height */
  height: 25vh; 
  bottom: 0px;
  background-color: #be1622;
  color: #fff;
  display: flex;
  flex-direction: column;
}

.order-evaluation-push .x {
  position: absolute;
  right: 0px;
  padding: 10px;
}

.order-evaluation-push .row {
}

.order-evaluation-push .label {
  padding: 20px 35px;
}
</style>
