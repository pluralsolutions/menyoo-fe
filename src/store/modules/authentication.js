import {
  LOGGED_USER_LOADED,
} from '../mutation-types';

// getters
const getters = {
  isLoggedUser: state => (!!state.loggedUser),
};

// actions
const actions = {
  logUserIn({ commit }, user) {
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
