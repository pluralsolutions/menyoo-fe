import Vue from 'vue';

import {
  UPDATE_CURRENT_USER,
} from '../mutation-types';

import User from '../../domain/User';

export const COOKIE_TOKEN_NAME = 'token';

const getters = {
  isLoggedUser: state => !!state.loggedUser,
  loggedUser: state => state.loggedUser,
};

const setUserCookie = function f(token) { Vue.cookie.set(COOKIE_TOKEN_NAME, token); };
const clearUserCookie = function f() { Vue.cookie.delete(COOKIE_TOKEN_NAME); };

const actions = {
  signInFacebook(commit) {
    const user = User.sample('f');
    setUserCookie(user.token);
    commit.commit(UPDATE_CURRENT_USER, user);
  },
  signInGoogle(commit) {
    const user = User.sample('g');
    setUserCookie(user.token);
    commit.commit(UPDATE_CURRENT_USER, user);
  },
  signInEmail(commit) {
    const user = User.sample('f');
    setUserCookie(user.token);
    commit.commit(UPDATE_CURRENT_USER, user);
  },
  fetchUser({ commit }) {
    const token = Vue.cookie.get(COOKIE_TOKEN_NAME);
    // TODO: get User from API using cookie
    const user = User.sample('fetched');
    user.token = token;
    commit(UPDATE_CURRENT_USER, user);
  },
  updateUser({ commit }, { user }) {
    setUserCookie(user.token);
    commit(UPDATE_CURRENT_USER, user);
  },
  signOut(commit) {
    clearUserCookie();
    commit.commit(UPDATE_CURRENT_USER, null);
  },
};

// mutations
const mutations = {
  [UPDATE_CURRENT_USER](state, user) {
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
