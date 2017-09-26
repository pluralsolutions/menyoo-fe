import request from '../lib/request';

const allProductsByRestaurant = (dispatch, { restaurantID }) => {
  request.get(`restaurants/${restaurantID}/products`)
    .then((products) => {
      dispatch('allProducts', products);
    });
};

const productByRestaurant = (dispatch, { restaurantID, productID }) => {
  request.get(`restaurants/${restaurantID}/products/${productID}`)
  .then((product) => {
    dispatch('currentProduct', product);
  });
};

const allEvaluationProductsByRestaurant = (dispatch, { restaurantID, userID }) => {
  request.get(`/users/me/restaurants/${restaurantID}/products`, { uid: userID })
  .then((product) => {
    dispatch('allEvaluationProducts', product);
  });
};

export default {
  allProductsByRestaurant,
  allEvaluationProductsByRestaurant,
  productByRestaurant,
};
