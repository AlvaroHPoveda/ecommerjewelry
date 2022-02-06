import { myOrdersActions } from "../actions";

const INITIAL_STATE = [];

const myOrdersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case myOrdersActions.setmyOrders:
      return action.payload;

    default:
      return state;
  }
};

export default myOrdersReducer;
