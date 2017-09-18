<template>
  <div>
    <div :class="$style.currency">{{ symbol }}
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
    symbol: { default: 'R$' },
  },
};
</script>

<style module>
.currency{
  font-size: 14px;  
  font-weight: 500;
  padding: 6px 6px 16px 0px;
}

.currency span{
  font-size: 19px;
  font-weight: bold;
}

.black{
  color: #000;  
}
.green{
  color: #029016;  
}
.red{
  color: #be1622;
}
</style>
