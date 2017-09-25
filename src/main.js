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
  created() {
    const vm = this;
    router.beforeEach((to, from, next) => {
      const requireAuth = !to.matched.some(record => record.meta.noAuth);
      if (requireAuth && !vm.user) {
        return next({ path: '/auth', query: { redirect: to.fullPath } });
      } else if (vm.user && (to.path === '/auth' || to.path === '/index.html' || to.path === '/')) {
        return next({ path: to.query.redirect || '/restaurantes/bar-do-ze' });
      }
      return next();
    });
    // install the state observer on firebase auth()
    firebase.auth().onAuthStateChanged((user) => {
      vm.updateUser(user || false).then(() => {
        if (user && this.$route.path === '/auth') {
          this.$router.push({ path: this.$route.query.redirect || '/restaurantes/bar-do-ze' });
        } else if (!user && this.$route.path !== '/auth') {
          this.$router.replace({ path: '/auth', query: { redirect: this.$route.fullPath } });
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
