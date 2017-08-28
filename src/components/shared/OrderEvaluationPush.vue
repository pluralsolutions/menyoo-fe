<template>
  <transition name="fade">
    <div class="order-evaluation-push" v-show="isshowing" @click.prevent="isshowing=true">
      <div class="x" @click="close">x</div>
      <div class="row-label">
        <div class="label">Terminou de comer?<br>Avalie seu prato...</div>
      </div>
      <div class="row-star">
        <div :class="['star', {'star-active': score>=i}]" v-for="i in 5" :key="i" :value="i" @click="score=(score==i)?0:i" />
      </div>
      <div class="row-btn">
        <ButtonComponent size="large" :disabled="score == 0" :onClick="close">Avalie</ButtonComponent>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  components: {
    ButtonComponent: () => import('@/components/shared/Button'),
  },
  data() {
    return {
      isshowing: true,
      score: 0,
    };
  },
  methods: {
    close: function c() {
      this.isshowing = false;
    },
  },
};
</script>
<style>
.order-evaluation-push {
  position: fixed;
  width: 100%;
  height: 210px;
  bottom: 0px;
  background-color: #be1622;
  color: #fff;
  display: relative;
  flex-direction: column;
  font-size: 25.6px;
  font-weight: 300;
}

.order-evaluation-push .x {
  float: right;
  height: 20px;
  width: 20px;
}

.order-evaluation-push .row-label,
.order-evaluation-push .row-star {
  padding: 10px 35px;
}
.order-evaluation-push .row-star,
.order-evaluation-push .row-btn {
  text-align: center;
}

.order-evaluation-push .row-btn {
  /* text-align: center; */
  width: 80%;
  flex-direction: column;
  margin: auto auto;
}

.order-evaluation-push .star {
  background: url('../../assets/images/product-detail/star-active.svg');
  background-size: 27px;
  width: 27px;
  height: 27px;
  margin: 0px 5px;
  border: 1px solid green;
  opacity: 0.3;
  display: inline-flex;
}

.order-evaluation-push .star-active {
  opacity: 1;
}

@media (min-width: 600px) {
}
</style>
