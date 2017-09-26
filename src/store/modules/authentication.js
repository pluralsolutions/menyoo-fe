import User from '@/domain/User';
import firebase from 'firebase';
import {
  UPDATE_CURRENT_USER,
} from '../mutation-types';

export const COOKIE_TOKEN_NAME = 'token';

const getters = {
  isLoggedUser: state => !!state.loggedUser,
  user: state => state.loggedUser,
};

const actions = {
  a_updateUser({ commit }, user) {
    commit(UPDATE_CURRENT_USER, user);
  },
  fetchUser({ dispatch }) {
    dispatch('a_updateUser', firebase.auth().currentUser);
  },
  /**
   * Signout the currently logged-in user
   */
  a_signOut() {
    // Signout the user using firebase
    firebase.auth().signOut()
      .then(() => {
        // eslint-disable-next-line
        console.log('User signed out Successfully');
      },
      (er) => {
        // eslint-disable-next-line
        console.log('Failed to signout user, try again later', er);
      });
  },
};

// mutations
const mutations = {
  [UPDATE_CURRENT_USER](state, user) {
    const usr = user ? new User(user) : null;
    state.loggedIn = !!usr;
    state.loggedUser = usr;
  },
};

const state = {
  loggedIn: false,
  loggedUser: null,
};

export default {
  state,
  getters,
  actions,
  mutations,
};
