<template lang="html">
  <div>
    <div id="firebaseui-auth-container"></div>
  </div>
</template>
<script>
import firebase from 'firebase';
import firebaseui from 'firebaseui';

export default {
  name: 'auth',
  mounted() {
    const uiConfig = {
      signInSuccessUrl: '/success',
      signInOptions: [
        // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
      ],
    };
    const ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', uiConfig);
  },
};
</script>
<style src="@/../node_modules/firebaseui/dist/firebaseui.css">
</style>
