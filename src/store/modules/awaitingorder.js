import {
  AWAITINGORDER_STEP_CHANGE,
} from '../mutation-types';


const getters = {
  step: state => (state.step),
};

const actions = {
  setStep({ newstep }) {
    this.$state.awaitingorder.step = newstep;
  },
};

// mutations
const mutations = {
  [AWAITINGORDER_STEP_CHANGE](state, newstep) {
    state.step = newstep;
  },
};

const state = {
  step: 1,
};

export default {
  state,
  getters,
  actions,
  mutations,
};
