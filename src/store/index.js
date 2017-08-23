import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/authentication';
import awaitingorder from './modules/awaitingorder';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';
export default new Vuex.Store({
  modules: {
    auth,
    awaitingorder,
  },
  strict: debug,
});
