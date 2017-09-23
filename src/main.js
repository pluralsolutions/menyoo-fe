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
// import firebaseui from 'firebaseui';
import { config, configMenyoo } from './auth/firebaseConfig';

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
  const val = (value / 1).toFixed(2).replace('.', ',');
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
});

Vue.use(VeeValidate,
  {
    locale: 'pt_BR',
    classes: true,
  },
);

Vue.http.interceptors.push((req, next) => {
  // é possível colocar informações no header antes do envio da requisição
  req.headers.set('Authorization', 'informação de segurança aqui');
  // eslint-disable-next-line
  console.log('Lidando com o request');
  next((res) => {
    // eslint-disable-next-line
    console.log('Lidando com a resposta', res);
    // é possível acessar os dados da reposta e realizar transformações antes
    // eslint-disable-next-line
    console.log(res.body);
  });
});

Vue.config.productionTip = false;

// router.beforeEach((to, from, next) => {
//   const requireAuth = !to.matched.some(record => record.meta.noAuth);
//   let redirectTo = { };
//   const haveIACookie = Vue.cookie.get('token');
//   if (requireAuth && haveIACookie && !store.getters.isLoggedUser) {
//     store.dispatch('fetchUser').then(() => { },
//     // on error
//     () => router.push('/entrar'));
//   }
//   if (requireAuth && !haveIACookie) {
//     redirectTo = { path: '/entrar', query: { redirect: to.fullPath } };
//   } else if (haveIACookie && (to.path === '/entrar' || to.path === '/index.html')) {
//     redirectTo = { path: to.query.redirect || '/restaurantes/bar-do-ze' };
//   }
//   // eslint-disable-next-line
//   console.log('to.fullPath', to.fullPath, to.path);
//   // eslint-disable-next-line
//   console.log('redirectTo', redirectTo);
//   return next(redirectTo);
// });


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
    // eslint-disable-next-line
    console.log('firebase init app');
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged((user) => {
      // eslint-disable-next-line
      console.log('created.onAuthStateChanged', user);
      if (user) {
        this.$router.push(configMenyoo.successUrl);
      } else {
        this.$router.push(configMenyoo.authUrl);
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
      firebase.auth().onAuthStateChanged((user) => {
        // eslint-disable-next-line
        console.log('computed.onAuthStateChanged', user);
        if (user) {
          this.auth.user = user;
        } else {
          this.auth.user = null;
        }
      });

      return (this.auth.user !== null);
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
