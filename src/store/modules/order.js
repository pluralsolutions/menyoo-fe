import {
  ORDER_STEP_CHANGE,
} from '../mutation-types';


const getters = {
  orderStep: state => (state.orderStep),
};

const actions = {
  updateStep(state, { step }) {
    let newstep = state.getters.orderStep || 0;
    newstep += step || 1;
    state.commit(ORDER_STEP_CHANGE, { newstep });
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
