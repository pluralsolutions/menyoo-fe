import {
  ALL_PRODUCTS,
  CURRENT_PRODUCT,
} from '../mutation-types';

const getters = {
  allProducts: state => (state.allProducts),
  currentProduct: state => (state.currentProduct),
};

const actions = {
  allProducts(commit, products) {
    commit.commit(ALL_PRODUCTS, products);
  },
  currentProduct(commit, product) {
    commit.commit(CURRENT_PRODUCT, product);
  },
};

const mutations = {
  [ALL_PRODUCTS](state, products) {
    state.allProducts = products;
  },
  [CURRENT_PRODUCT](state, product) {
    state.currentProduct = product;
  },
};

const state = {
  allProducts: [],
  currentProduct: null,
};

export default {
  state,
  getters,
  actions,
  mutations,
};
