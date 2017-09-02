import Vue from 'vue';

import {
  LOGGED_USER_LOADED,
  LOGGED_USER_UNLOADED,
} from '../mutation-types';

import User from '../../domain/User';

export const COOKIE_TOKEN_NAME = 'token';

const getters = {
  isLoggedUser: state => !!state.loggedUser,
  loggedUser: state => state.loggedUser,
};

const actions = {
  signInFacebook(commit) {
    const user = User.sample('f');
    commit.commit(LOGGED_USER_LOADED, user);
  },
  signInGoogle(commit) {
    const user = User.sample('g');
    commit.commit(LOGGED_USER_LOADED, user);
  },
  signInEmail(commit) {
    const user = User.sample('f');
    commit.commit(LOGGED_USER_LOADED, user);
  },
  fetchUser({ commit }) {
    const token = Vue.cookie.get(COOKIE_TOKEN_NAME);
    // TODO: get User from API using cookie
    const user = User.sample('fetched');
    user.token = token;
    commit(LOGGED_USER_LOADED, user);
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
