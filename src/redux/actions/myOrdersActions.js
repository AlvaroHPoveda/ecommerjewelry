import axios from "axios";
import { getConfig } from "../../utils";
import { setIsLoading, handleError  } from ".";
import { getcartThunk } from "../actions";

export const myOrdersActions = {
  setmyOrders: "SET_MYORDERS",
};

export const setmyOrders = (myOrders) => ({
  type: myOrdersActions.setmyOrders,
  payload: myOrders,
});

export const getmyOrdersThunk = () => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    axios
      .get(
        "https://ecommerce-exercise-backend.herokuapp.com/orders/",
        getConfig()
      )
      .then((res) => dispatch(setmyOrders(res.data)))
      .catch((error) => handleError(error))
      .finally(() => dispatch(setIsLoading(false)));
  };
};

export const setmyOrdersThunk = () => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    axios
      .post(
        "https://ecommerce-exercise-backend.herokuapp.com/cart/buy/",
        {},
        getConfig()
      )
      .then(() => {
        dispatch(getmyOrdersThunk());
        dispatch(getcartThunk());
      })
      .catch((error) => handleError(error))
      .finally(() => dispatch(setIsLoading(false)));
  };
};
