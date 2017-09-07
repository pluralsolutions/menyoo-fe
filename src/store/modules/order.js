import Order from '@/domain/Order';

import {
  ORDER_STEP_CHANGE,
  ADD_PRODUCT_TO_ORDER,
  DUPLICATE_ITEM_ON_ORDER,
  REMOVE_ITEM_FROM_ORDER,
} from '../mutation-types';

const getters = {
  orderStep: state => (state.orderStep),
  orders: state => (state.orders),
  order: state => (state.order),
};

const actions = {
  updateStep(commit, { step }) {
    let newstep = commit.getters.orderStep || 0;
    newstep += step || 1;
    commit.commit(ORDER_STEP_CHANGE, { newstep });
  },
  addProductToOrder(state, orderProduct) {
    state.commit(ADD_PRODUCT_TO_ORDER, orderProduct);
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
  [ADD_PRODUCT_TO_ORDER](state, orderProduct) {
    const order = state.order || new Order({});
    order.addProduct(orderProduct);

    state.order = order;
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
  order: null,
  orders: [],
};

export default {
  state,
  getters,
  actions,
  mutations,
};
