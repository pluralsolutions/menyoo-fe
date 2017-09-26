import request from '../lib/request';

const updateEvaluationByRestaurantProduct = ({ userID, restaurantID, productID, score }) => (
  request.post(
    `users/me/restaurants/${restaurantID}/products/${productID}/evaluations`,
    { score },
    { uid: userID },
  )
);

export default {
  updateEvaluationByRestaurantProduct,
};
