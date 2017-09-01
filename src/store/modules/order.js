import {
  ORDER_STEP_CHANGE,
} from '../mutation-types';

const getters = {
  orderStep: commit => (commit.orderStep),
};

const actions = {
  updateStep(commit, { step }) {
    let newstep = commit.getters.orderStep || 0;
    newstep += step || 1;
    commit.commit(ORDER_STEP_CHANGE, { newstep });
  },
};

const mutations = {
  [ORDER_STEP_CHANGE](state, { newstep }) {
    state.orderStep = newstep;
  },
};

const state = {
  orderStep: 0,
};

export default {
  state,
  getters,
  actions,
  mutations,
};
