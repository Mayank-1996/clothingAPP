import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";

import UserReducer from "./user/user.reducer";

import storage from "redux-persist/lib/storage";

import CartReducer from "./cart/cart.reducer";
import { DirectoryReducer } from "./directory/directory.reducer";
import CollectionReducer from "./shopdata/shopdata.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

export default persistReducer(
  persistConfig,
  combineReducers({
    user: UserReducer,
    cart: CartReducer,
    directory: DirectoryReducer,
    collections: CollectionReducer,
  })
);
