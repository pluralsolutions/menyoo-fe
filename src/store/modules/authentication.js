import {
  LOGGED_USER_LOADED,
} from '../mutation-types';

// getters
const getters = {
  isLoggedUser: state => (!!state.loggedUser),
};

// actions
const actions = {
  signInFacebook({ commit }) {
    const user = { user: 1 };
    commit(LOGGED_USER_LOADED, user);
  },
  signInGoogle({ commit }) {
    const user = { user: 2 };
    commit(LOGGED_USER_LOADED, user);
  },
  signInEmail({ commit }) {
    const user = { user: 3 };
    commit(LOGGED_USER_LOADED, user);
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
