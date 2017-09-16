<template>
  <div>
    <div :style="`width: ${width}px`" :class="$style.currency">{{ symbol }}
      <span :class="$style[color]">
        {{ value | currency }}
      </span>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    value: { default: 0 },
    color: { default: 'black' },
    width: { default: '80' },
    symbol: { default: 'R$' },
  },
};
</script>

<style module>
.currency{
  font-size: 13px;  
  font-weight: 500;
  padding: 6px 6px 16px 0px;
}

.currency span{
  font-size: 18px;
  font-weight: bold;
}

.black{
  color: #000;  
}
.green{
  color: #029016;  
}
</style>
