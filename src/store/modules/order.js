import {
  ORDER_STEP_CHANGE,
  ADD_ORDER_ITEM,
} from '../mutation-types';


const getters = {
  orderStep: state => (state.orderStep),
  orders: state => (state.orders),
};

const actions = {
  updateStep(state, { step }) {
    let newstep = state.getters.orderStep || 0;
    newstep += step || 1;
    state.commit(ORDER_STEP_CHANGE, { newstep });
  },
  addOrderItem(state, order) {
    state.commit(ADD_ORDER_ITEM, order);
  },
};

const mutations = {
  [ORDER_STEP_CHANGE](state, { newstep }) {
    state.orderStep = newstep;
  },
  [ADD_ORDER_ITEM](state, order) {
    state.orders.push(order);
  },
};

const state = {
  orderStep: 0,
  orders: [],
};

export default {
  state,
  getters,
  actions,
  mutations,
};
