import Vue from 'vue';
import {
  LOGGED_USER_LOADED,
} from '../mutation-types';

const COOKIE_TOKEN_NAME = 'token';

const loggedSuccess = (commit, user) => {
  commit(LOGGED_USER_LOADED, user);
  Vue.cookie.set(COOKIE_TOKEN_NAME, '123124');
};

const getters = {
  isLoggedUser: state => (!!state.loggedUser),
};

const actions = {
  signInFacebook({ commit }) {
    const user = { user: 1 };
    loggedSuccess(commit, user);
  },
  signInGoogle({ commit }) {
    const user = { user: 2 };
    loggedSuccess(commit, user);
  },
  signInEmail({ commit }) {
    const user = { user: 3 };
    loggedSuccess(commit, user);
  },
  getLoggedUser(store) {
    if (Vue.cookie.get(COOKIE_TOKEN_NAME)) {
      const user = { user: 3 };
      store.commit(LOGGED_USER_LOADED, user);
    }
  },
};

// mutations
const mutations = {
  [LOGGED_USER_LOADED](state, user) {
    state.loggedUser = user;
  },
};

const state = {
  loggedUser: null,
};

export default {
  state,
  getters,
  actions,
  mutations,
};
