import { cartActions } from "../actions";

const INITIAL_STATE = [];

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActions.setCart:
      return action.payload;

    default:
      return state;
  }
};

export default cartReducer;
