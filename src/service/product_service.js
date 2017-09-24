import request from '../lib/request';
import Product from '../domain/Product';

const allProductsByRestaurant = (dispatch, { restaurantID }) => {
  request.get(`restaurants/${restaurantID}/products`)
    .then((products) => {
      const productList = [];
      products.forEach((product) => {
        productList.push(
          new Product(product),
        );
      });
      dispatch('allProducts', productList);
    });
};

export default {
  allProductsByRestaurant,
};
