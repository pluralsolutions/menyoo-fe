import {
  ALL_PRODUCTS,
} from '../mutation-types';

const getters = {
  allProducts: state => (state.allProducts),
};

const actions = {
  allProducts(commit, products) {
    commit.commit(ALL_PRODUCTS, products);
  },
};

const mutations = {
  [ALL_PRODUCTS](state, products) {
    state.allProducts = products;
  },
};

const state = {
  allProducts: [],
};

export default {
  state,
  getters,
  actions,
  mutations,
};
