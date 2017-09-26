import {
  ALL_PRODUCTS,
  ALL_EVALUATION_PRODUCTS,
  CURRENT_PRODUCT,
} from '../mutation-types';

const getters = {
  allProducts: state => (state.allProducts),
  allEvaluationProducts: state => (state.allEvaluationProducts),
  currentProduct: state => (state.currentProduct),
};

const actions = {
  allProducts(commit, products) {
    commit.commit(ALL_PRODUCTS, products);
  },
  allEvaluationProducts(commit, products) {
    commit.commit(ALL_EVALUATION_PRODUCTS, products);
  },
  currentProduct(commit, product) {
    commit.commit(CURRENT_PRODUCT, product);
  },
};

const mutations = {
  [ALL_PRODUCTS](state, products) {
    state.allProducts = products;
  },
  [ALL_EVALUATION_PRODUCTS](state, products) {
    state.allEvaluationProducts = products;
  },
  [CURRENT_PRODUCT](state, product) {
    state.currentProduct = product;
  },
};

const state = {
  allProducts: [],
  allEvaluationProducts: [],
  currentProduct: null,
};

export default {
  state,
  getters,
  actions,
  mutations,
};
