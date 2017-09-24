// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueResource from 'vue-resource';
import VeeValidate from 'vee-validate';
import VueCookie from 'vue-cookie';
// import validadeEn from 'vee-validate/dist/locale/en';
import validadePtBR from 'vee-validate/dist/locale/pt_BR';
import VueAnalytics from 'vue-analytics';
import { mapGetters, mapActions } from 'vuex';
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

firebase.initializeApp(config);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data() {
    return {
      auth: { init: false },
    };
  },
  created() {
    // install the state observer on firebase auth()
    firebase.auth().onAuthStateChanged((user) => {
      const vm = this;
      console.log('onAuthStateChanged', user);
      vm.updateUser(user).then(() => {
        if (user) {
          vm.$router.push('/restaurantes/bar-do-ze');
        } else {
          vm.$router.push('/auth');
        }
      });
    });
  },
  computed: {
    ...mapGetters({
      user: 'user',
    }),
  },
  methods: {
    ...mapActions({
      updateUser: 'a_updateUser',
    }),
  },
  store,
  router,
  template: '<App/>',
  components: { App },
});
