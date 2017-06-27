<template>
    <div id="authuser">
      <img v-bind:src="user.url" :alt="'Photo of the user '+user.name">
      <span>{{user.name}}</span>
    </div>
</template>

<<script>
function getUser() {
  return {
    name: 'Gabriel Toledo',
    url: ('../assets/user.jpg'),
  };
}
export default {
  name: 'UserHeader',
  data() {
    return {
      user: getUser(),
    };
  },
};
</script>
<style>
span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}

#authuser{
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 8px;
  padding-left: 8px;
  background-color: #dcdcdc;
}

#authuser img{
  border-radius: 50%;
  height: 2.2em;
  width: 2.2em;
  border: 0px;
}

</style>
