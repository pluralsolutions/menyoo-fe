import Order from '@/domain/Order';

import {
  ADD_PRODUCT_TO_ORDER,
  REMOVE_ITEM_FROM_ORDER,
  UPDATE_ORDER,
  ALL_MY_PRODUCTS_RESTAURANT,
  ALL_ORDERS,
} from '../mutation-types';

const getters = {
  allorders: state => (state.allorders),
  order: state => (state.order),
  allMyProductsByRestaurant: state => (state.allMyProductsByRestaurant),
};

const actions = {
  addProductToOrder(state, productOrder) {
    state.commit(ADD_PRODUCT_TO_ORDER, productOrder);
  },
  removeProductFromOrder(state, { productOrder, quantity }) {
    state.commit(REMOVE_ITEM_FROM_ORDER, { productOrder, quantity });
  },
  clearProductOrder(state) {
    state.order = new Order({});
  },
  updateOrder(state, order) {
    const newOrder = order && order.products ? order : [];
    state.commit(UPDATE_ORDER, newOrder);
  },
  allMyProductsByRestaurant(commit, products) {
    commit.commit(ALL_MY_PRODUCTS_RESTAURANT, products);
  },
  setAllOrders(commit, allorders) {
    const orders = [];
    allorders.forEach(order => orders.push(new Order(order)));
    commit.commit(ALL_ORDERS, { allorders: orders });
  },
};

const mutations = {
  [ADD_PRODUCT_TO_ORDER](state, productOrder) {
    const order = state.order || new Order({});
    order.addProduct(productOrder);

    state.order = order;
  },
  [UPDATE_ORDER](state, order) {
    state.order = new Order(order);
  },
  [REMOVE_ITEM_FROM_ORDER](state, { productOrder, quantity }) {
    let order = state.order || new Order({});
    order.removeProduct(productOrder, quantity);
    if (order.products.length === 0) {
      order = null;
    }
    state.order = order;
  },
  [ALL_MY_PRODUCTS_RESTAURANT](state, orders) {
    state.allMyProductsByRestaurant = orders;
  },
  [ALL_ORDERS](state, { allorders }) {
    state.allorders = allorders;
  },
};

const state = {
  order: null,
  allorders: [],
  allMyProductsByRestaurant: [],
};

export default {
  state,
  getters,
  actions,
  mutations,
};
