import request from '../lib/request';

const allProductsByRestaurant = (dispatch, { restaurantID }) => new Promise((resolve) => {
  request.get(`restaurants/${restaurantID}/products`)
    .then((products) => {
      dispatch('allProducts', products).then(() => resolve(products));
    });
});

const productByRestaurant = (dispatch, { restaurantID, productID }) => new Promise((resolve) => {
  request.get(`restaurants/${restaurantID}/products/${productID}`)
    .then((product) => {
      dispatch('currentProduct', product).then(() => resolve(product));
    });
});

export default {
  allProductsByRestaurant,
  productByRestaurant,
};
