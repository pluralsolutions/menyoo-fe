<template>
  <div :style="`width: ${width}px`" :class="$style.currency">{{ symbol }}
    <span :class="$style[color]">
      {{ value | currency }}
    </span>
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
  font-size: 15.5px;  
  font-weight: 400;
  padding: 5px 0;
}
.black{
  color: #000;  
}
.green{
  color: #029016;  
}
</style>
