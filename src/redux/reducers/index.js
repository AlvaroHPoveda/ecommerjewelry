import { combineReducers } from "redux";
import appReducer from "./appReducer";
import cartReducer from "./cartReducer";
import categoryReducer from "./categoryReducer";
import myOrdersReducer from "./myOrdersReducer";
import productsReducer from "./productsReducer";

const rootReducer = combineReducers({
  app: appReducer,
  cart: cartReducer,
  category: categoryReducer,
  myOrders: myOrdersReducer,
  products: productsReducer,
});

export default rootReducer;
