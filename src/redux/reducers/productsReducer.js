import { productsActions } from "../actions";

const INITIAL_STATE = {
  products: [],
  product: {},
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case productsActions.setProducts:
      return {
        ...state,
        products: action.payload,
      };
    case productsActions.setProduct:
      return {
        ...state,
        product: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
