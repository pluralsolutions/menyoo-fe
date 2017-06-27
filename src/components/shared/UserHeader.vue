<template>
    <div class="user">
      <div class="photo-circle">
        <img :src="img" :alt="'User photo '+name">
      </div>
      <span class="user-head">{{name}}</span>
    </div>
</template>

<<script>

export default {
  name: 'UserHeader',
  data() {
    return {
      name: 'Gabriel Toledo',
      img: 'http://tudosobrecachorros.com.br/wp-content/uploads/cachorro-independente.jpg',
    };
  },
};
</script>
<style>
.user {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: 1.09em 2em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 1px;
  padding-left: 6px;
  background-color: #dcdcdc;
}

.user-head {
  position: relative;
  top: -10px;
  font-size: 13px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  /*height: 100%;*/
  text-transform: uppercase;
}

.photo-circle {
  display: inline-flex;
  box-sizing: content-box;
  background-clip: content-box;
  border-radius: 50%;
  box-shadow: inset 1px 5px 3px 0px rgba(0,0,0,.15), 0px 3px 5px 3px rgba(0,0,0,.15);
  margin: 4px;
}

.photo-circle img {
  border: 1px solid #eee;
  height: 32px;
  width: 32px;
  border-radius: 50%;  
}

</style>
