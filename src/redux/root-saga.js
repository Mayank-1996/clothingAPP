import { all, call } from "redux-saga/effects";

import { shopSagas } from "./shopdata/shop.sagas";
import { userSagas } from "./user/user.sagas";
import { cartSagas } from "./cart/cart.sagas";

export default function* rootSaga() {
  yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}
