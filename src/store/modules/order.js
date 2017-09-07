import Order from '@/domain/Order';

import {
  ORDER_STEP_CHANGE,
  ADD_PRODUCT_TO_ORDER,
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
  addProductToOrder(state, productOrder) {
    state.commit(ADD_PRODUCT_TO_ORDER, productOrder);
  },
  removeProductFromOrder(state, { productOrder, quantity }) {
    state.commit(REMOVE_ITEM_FROM_ORDER, { productOrder, quantity });
  },
};

const mutations = {
  [ORDER_STEP_CHANGE](state, { newstep }) {
    state.orderStep = newstep;
  },
  [ADD_PRODUCT_TO_ORDER](state, productOrder) {
    const order = state.order || new Order({});
    order.addProduct(productOrder);

    state.order = order;
  },
  [REMOVE_ITEM_FROM_ORDER](state, { productOrder, quantity }) {
    let order = state.order || new Order({});
    order.removeProduct(productOrder, quantity);
    if (order.products.length === 0) {
      order = null;
    }
    state.order = order;
  },
};

const state = {
  orderStep: 0,
  order: null,
};

export default {
  state,
  getters,
  actions,
  mutations,
};
