import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/authentication';
import order from './modules/order';
import product from './modules/product';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    auth,
    order,
    product,
  },
  strict: debug,
});
