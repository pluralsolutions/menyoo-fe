import request from '../lib/request';

const addProductToOrder = (dispatch, payload) => (
  request.post('orders', payload)
    .then(response => (
      dispatch('updateOrder', response)
    ))
    .catch((err) => {
      console.log(err);
    })
);

export default {
  addProductToOrder,
};
