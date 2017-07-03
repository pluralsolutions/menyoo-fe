// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueResource from 'vue-resource';
import VeeValidate from 'vee-validate';
import en from 'vee-validate/dist/locale/en';
import ptBR from 'vee-validate/dist/locale/pt_BR';
import App from './App';
import router from './router';

VeeValidate.Validator.addLocale(ptBR);
VeeValidate.Validator.addLocale(en);

Vue.use(VueResource);
Vue.http.options.root = process.env.API_URL ? process.env.API_URL : 'http://localhost:3000';

Vue.use(VeeValidate,
  {
    locale: 'pt_BR',
    enableAutoClasses: true,
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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
