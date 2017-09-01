import Vue from 'vue';

import {
  LOGGED_USER_LOADED,
  LOGGED_USER_UNLOADED,
} from '../mutation-types';

const COOKIE_TOKEN_NAME = 'token';

const getters = {
  isLoggedUser: state => (!!state.loggedUser),
  loggedUser: state => state.loggedUser,
};

const actions = {
  signInFacebook(commit, { user }) {
    // const user = { user: 1 };
    commit.commit(LOGGED_USER_LOADED, user);
  },
  signInGoogle(commit, { user }) {
    // const user = { user: 2 };
    commit.commit(LOGGED_USER_LOADED, user);
  },
  signInEmail(commit, { user }) {
    // const user = { user: 3 };
    commit.commit(LOGGED_USER_LOADED, user);
  },
  updateUser(commit, { user }) {
    // const user = { user: 3 };
    commit.commit(LOGGED_USER_LOADED, user);
  },
  signOut(commit) {
    commit.commit(LOGGED_USER_UNLOADED);
    Vue.cookie.delete(COOKIE_TOKEN_NAME);
  },
};

// mutations
const mutations = {
  [LOGGED_USER_LOADED](state, user) {
    state.loggedUser = user;
    Vue.cookie.set(COOKIE_TOKEN_NAME, user.token);
  },
  [LOGGED_USER_UNLOADED](state) {
    state.loggedUser = null;
    Vue.cookie.delete(COOKIE_TOKEN_NAME);
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
