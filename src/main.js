// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueResource from 'vue-resource';
import VeeValidate from 'vee-validate';
import VueCookie from 'vue-cookie';
// import validadeEn from 'vee-validate/dist/locale/en';
import validadePtBR from 'vee-validate/dist/locale/pt_BR';
import VueAnalytics from 'vue-analytics';
import firebase from 'firebase';
import { config } from './auth/firebaseConfig';

import store from './store';
import router from './router';
import App from './App';
// components
import Modal from './components/shared/Modal';
import ButtonComponent from './components/shared/Button';

Vue.component('modal', Modal);
Vue.component('ButtonComponent', ButtonComponent);

firebase.initializeApp(config);

VeeValidate.Validator.addLocale(validadePtBR);
// VeeValidate.Validator.addLocale(validadeEn);

Vue.use(VueResource);
Vue.use(VueCookie);
Vue.http.options.root = process.env.API_URL ? process.env.API_URL : 'http://localhost:3000';

Vue.filter('currency', (value) => {
  const val = (value / 100).toFixed(2).replace('.', ',');
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
});

Vue.use(VeeValidate,
  {
    locale: 'pt_BR',
    classes: true,
  },
);

Vue.config.productionTip = false;

// Google analytics
// the plugin will automatically detect the current route name, path and location
//  just be sure to add the name property in your route object
Vue.use(VueAnalytics, {
  id: 'UA-106358510-1',
  router,
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data() {
    return {
      auth: {},
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      // eslint-disable-next-line
      console.log('created.onAuthStateChanged', user);
      this.auth.user = user;
      // console.log(configMenyoo);
      if (!user) {
        this.$router.push('/auth');
      // } else {
        // this.$router.push('/success');
      }
    });
  },
  computed: {
    /**
     * Determines if the user is authenticated
     *
     * @return boolean
     */
    isAuthenticated() {
      // This function changes the auth.user state when
      // the auth status of user changes.
      // firebase.auth().onAuthStateChanged((user) => {
      //   // eslint-disable-next-line
      //   console.log('computed.onAuthStateChanged', user);
      //   if (user) {
      //     this.auth.user = user;
      //   } else {
      //     this.auth.user = null;
      //   }
      // });
      console.log('computed.onAuthStateChanged return', this.auth);
      return (this.auth.user !== null);
    },
    currentUser() {
      return this.auth.user;
    },
  },
  methods: {
    /**
     * Signout the currently logged-in user
     */
    signOut() {
      // Signout the user using firebase
      firebase.auth().signOut()
        .then(() => {
          this.auth.user = firebase.auth().currentUser;
          this.auth.message = 'User signed out Successfully';
          // eslint-disable-next-line
          console.log(this.auth.message);
          this.$router.push('/');
        },
        (er) => {
          // eslint-disable-next-line
          console.log('Failed to signout user, try again later', er);
          this.$router.push('/');
        });
    },
  },
  store,
  router,
  template: '<App/>',
  components: { App },
});
