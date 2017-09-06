import {
  ORDER_STEP_CHANGE,
  ADD_ITEM_TO_ORDER,
  DUPLICATE_ITEM_ON_ORDER,
  REMOVE_ITEM_FROM_ORDER,
} from '../mutation-types';

const getters = {
  orderStep: state => (state.orderStep),
  orders: state => (state.orders),
};

const actions = {
  updateStep(commit, { step }) {
    let newstep = commit.getters.orderStep || 0;
    newstep += step || 1;
    commit.commit(ORDER_STEP_CHANGE, { newstep });
  },
  addItemToOrder(state, order) {
    state.commit(ADD_ITEM_TO_ORDER, order);
  },
  duplicateItemOnOrder(state, orderIndex) {
    state.commit(DUPLICATE_ITEM_ON_ORDER, orderIndex);
  },
  remoteItemFromOrder(state, orderIndex) {
    state.commit(REMOVE_ITEM_FROM_ORDER, orderIndex);
  },
};

const mutations = {
  [ORDER_STEP_CHANGE](state, { newstep }) {
    state.orderStep = newstep;
  },
  [ADD_ITEM_TO_ORDER](state, order) {
    state.orders.push(order);
  },
  [DUPLICATE_ITEM_ON_ORDER](state, orderIndex) {
    const order = state.orders[orderIndex];
    order.productQuantity += 1;
    order.totalValue = order.unitPrice * order.productQuantity;

    state.orders[orderIndex] = order;
  },
  [REMOVE_ITEM_FROM_ORDER](state, orderIndex) {
    const order = state.orders[orderIndex];
    order.productQuantity -= 1;
    order.totalValue = order.unitPrice * order.productQuantity;

    state.orders[orderIndex] = order;
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
