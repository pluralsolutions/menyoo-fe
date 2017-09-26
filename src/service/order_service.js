import request from '../lib/request';

const addProductToOrder = (dispatch, payload) => (
  request.post('orders', payload)
    .then(response => (
      dispatch('updateOrder', response)
    ))
);

const currentOrder = (dispatch, { userID, restaurantID }) => (
  request.get(
    `users/me/restaurants/${restaurantID}/products`,
    { uid: userID },
  )
    .then(response => (
      dispatch('updateOrder', response)
    ))
);

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


export default {
  addProductToOrder,
  currentOrder,
  updateProductOrderQuantity,
};
