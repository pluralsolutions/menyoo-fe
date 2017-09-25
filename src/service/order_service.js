import request from '../lib/request';

const addProductToOrder = (dispatch, payload) => {
  request.post('orders', payload)
    .then((response) => {
      dispatch('addProductToOrder', response.products);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default {
  addProductToOrder,
};
