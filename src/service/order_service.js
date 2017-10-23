import request from '../lib/request';

const addProductToOrder = (dispatch, payload) => (
  request.post('orders', payload)
    .then(response => (
      dispatch('updateOrder', response)
    ))
);

const currentOrder = (dispatch, { userID, restaurantID }) => (
  request.get(
    `users/me/restaurants/${restaurantID}/current_order`,
    { uid: userID },
  )
    .then(response => (
      dispatch('updateOrder', response)
    ))
);

const getAllOrders = (dispatch, { userID, restaurantID }) => (
  new Promise((res, reject) => {
    request.get(
      `users/me/restaurants/${restaurantID}/allorders`,
      { uid: userID },
    )
    .then(
      (response) => {
        dispatch('setAllOrders', response).then(() => res(response));
      },
      (err) => {
        if (reject) reject(err);
      },
    );
  })
);

const allProductsOrdersByRestaurant = (dispatch, { userID, restaurantID }) => {
  request.get(
    `users/me/restaurants/${restaurantID}/products`,
    { uid: userID })
  .then((products) => {
    dispatch('allMyProductsByRestaurant', products);
  }, () => {
    dispatch('allMyProductsByRestaurant', []);
  });
};

const updateProductOrderQuantity = (dispatch, { userID, restaurantID, item, quantity }) => (
  request.put(
    `restaurants/${restaurantID}/orders/${item.orderId}/products/${item.id}/quantity`,
    { quantity },
    { uid: userID },
  )
    .then(response => (
      dispatch('updateOrder', response)
    ))
);

const place = (dispatch, { restaurantId, orderId, userId }) => (
  request.post(
    `users/me/restaurants/${restaurantId}/orders/${orderId}/place`,
    {},
    { uid: userId },
  )
  .then(response => (
    dispatch('updateOrder', response)
  ))
);


export default {
  addProductToOrder,
  currentOrder,
  updateProductOrderQuantity,
  place,
  allProductsOrdersByRestaurant,
  getAllOrders,
};
