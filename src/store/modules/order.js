import {
  ORDER_STEP_CHANGE,
  ADD_ITEM_TO_ORDER,
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
  addItemToOrder(state, order) {
    state.commit(ADD_ITEM_TO_ORDER, order);
  },
};

const mutations = {
  [ORDER_STEP_CHANGE](state, { newstep }) {
    state.orderStep = newstep;
  },
  [ADD_ITEM_TO_ORDER](state, order) {
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
