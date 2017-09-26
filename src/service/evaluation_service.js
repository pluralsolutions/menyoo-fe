import request from '../lib/request';
import orderService from './order_service';

const updateEvaluationByRestaurantProduct = (dispatch,
  { userID, restaurantID, productID, score }) => (
  request.post(
    `users/me/restaurants/${restaurantID}/products/${productID}/evaluations`,
    { score },
    { uid: userID },
  ).then(
    () => (
      orderService.allProductsOrdersByRestaurant(dispatch, { userID, restaurantID })
    ),
  )
);

export default {
  updateEvaluationByRestaurantProduct,
};
