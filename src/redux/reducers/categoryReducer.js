import { categoryActions } from "../actions";

const INITIAL_STATE = [];

const categoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case categoryActions.setCategory:
      return action.payload;

    default:
      return state;
  }
};

export default categoryReducer;
