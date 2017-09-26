import request from '../lib/request';

const updateEvaluationByRestaurantProduct = (dispatch,
  { userID, restaurantID, productID, score }) => (
  request.post(
    `users/me/restaurants/${restaurantID}/products/${productID}/evaluations`,
    { score },
    { uid: userID },
  ).then(
    (evaluation) => {
      dispatch('updateScoreProductOrderEvalution', { evaluation });
    },
    (err) => {
      if (err.status === 400) {
        // log msg de erro
        console.error(err.body.error);
      }
      console.log(err);
    })
);

export default {
  updateEvaluationByRestaurantProduct,
};
