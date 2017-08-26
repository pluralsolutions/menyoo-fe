import {
  ORDER_STEP_CHANGE,
} from '../mutation-types';


const getters = {
  orderStep: state => (state.orderStep),
};

const actions = {
  updateStep(state, { step, kind }) {
    let newstep = step || state.getters.orderStep;
    if (kind === '+') newstep += 1;
    if (kind === '-') newstep -= 1;
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
