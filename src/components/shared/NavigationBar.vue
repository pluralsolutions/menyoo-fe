<template>
  <div :class="$style['navigation-bar-content']">
     <div :class="$style['navigation-fixed']">
       <div @click="back" :class="$style.back">Voltar</div>
       <div :class="$style.type_icon"><slot/></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['type'],
  methods: {
    back: function back() {
      this.$router.back();
    },
  },
};
</script>

<style module>
  .navigation-bar-content {
    height: 60px;
  }

  .navigation-fixed {
    font-size: 14px;
    text-transform: uppercase;
    color: #fff;
    flex-direction: row;
    display: flex;
    align-items: center;
    background-color: #be1622;
    height: 60px;
  }

  .back, .page-title {
    position: relative;
  }

  .back{
    width: 60%;
    text-align: left;
    padding-left: 40px;
    cursor: pointer;
  }

  .back:before{
    content: '';
    width: 22px;
    height: 100%;
    background: url('../../assets/images/back_icon.svg') no-repeat center center;
    position: absolute;
    left: 10px;
  }

  .page-title{
    width: 40%;
  }

  .page-title:before{
    content: '';
    width: 22px;
    height: 30px;
    position: absolute;
    left: 0;
  }
</style>
