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

export default {
  allProductsByRestaurant,
  productByRestaurant,
};
