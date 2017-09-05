// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueResource from 'vue-resource';
import VeeValidate from 'vee-validate';
import VueCookie from 'vue-cookie';
import validadeEn from 'vee-validate/dist/locale/en';
import validadePtBR from 'vee-validate/dist/locale/pt_BR';
import store from './store';
import router from './router';

import App from './App';

VeeValidate.Validator.addLocale(validadePtBR);
VeeValidate.Validator.addLocale(validadeEn);

Vue.use(VueResource);
Vue.use(VueCookie);
Vue.http.options.root = process.env.API_URL ? process.env.API_URL : 'http://localhost:3000';

// Vue.filter('currency', (value) => {
//   const val = (value / 1).toFixed(2).replace('.', ',');
//   return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
// });

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

router.beforeEach((to, from, next) => {
  const requireAuth = !to.matched.some(record => record.meta.noAuth);
  let redirectTo = { };

  const haveIACookie = Vue.cookie.get('token');
  if (requireAuth && haveIACookie && !store.getters.isLoggedUser) {
    store.dispatch('fetchUser').then(() => { },
    // on error
    () => router.push('/entrar'));
  }

  if (requireAuth && !haveIACookie) {
    redirectTo = { path: '/entrar', query: { redirect: to.fullPath } };
  } else if (haveIACookie && to.path === '/entrar') {
    redirectTo = { path: to.query.redirect || '/restaurantes/bar-do-ze' };
  }
  console.log(`redirectTo: ${redirectTo.path} or to: ${to.path}`);

  return next(redirectTo);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
});
