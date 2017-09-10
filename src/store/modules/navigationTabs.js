import {
  SELECT_NAVIGATION_TAB,
} from '../mutation-types';

const getters = {
  selectedTab: state => (state.selectedTab),
};

const actions = {
  selectTab(commit, tab) {
    commit.commit(SELECT_NAVIGATION_TAB, tab);
  },
};

const mutations = {
  [SELECT_NAVIGATION_TAB](state, tab) {
    state.selectedTab = tab;
  },
};

const state = {
  selectedTab: '',
};

export default {
  state,
  getters,
  actions,
  mutations,
};
