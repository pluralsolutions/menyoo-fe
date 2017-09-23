<template lang="html">
  <div>
    <div>auth: <div v-if="auth"> autenticado</div><div v-if="!auth"> sem auth</div></div>
    <!-- <div>currentUser:{{auth.currentUser}}</div> -->
    <div id="firebaseui-auth-container"></div>
  </div>
</template>
<script>
import firebase from 'firebase';
import firebaseui from 'firebaseui';
import { config } from '../auth/firebaseConfig';

export default {
  name: 'auth',
  computed: {
    currentUser() {
      const auth = firebase.auth();
      return auth;
    },
  },
  mounted() {
    const uiConfig = {
      signInSuccessUrl: config.successUrl,
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
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
