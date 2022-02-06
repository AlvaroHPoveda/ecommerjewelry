import axios from "axios";
import { getConfig } from "../../utils";
import { setIsLoading, handleError  } from ".";

export const cartActions = {
  setCart: "SET_CART",
};

export const setCart = (cart) => ({
  type: cartActions.setCart,
  payload: cart,
});

export const getcartThunk = () => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    axios
      .get(
        `https://ecommerce-exercise-backend.herokuapp.com/cart/`,
        getConfig()
      )
      .then((res) => dispatch(setCart(res.data)))
      .catch((error) => handleError(error))
      .finally(() => dispatch(setIsLoading(false)));
  };
};

export const addProductCartThunk = (addproductCart) => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    axios
      .post(
        `https://ecommerce-exercise-backend.herokuapp.com/products/add_to_cart/`,
        addproductCart,
        getConfig()
      )
      .then(() => dispatch(getcartThunk()))
      .catch((error) => handleError(error))
      .finally(() => dispatch(setIsLoading(false)));
  };
};

export const deleteProductCartThunk = (id) => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    axios
      .delete(
        `https://ecommerce-exercise-backend.herokuapp.com/cart/${id}/remove_item/`,
        getConfig()
      )
      .then(() => dispatch(getcartThunk()))
      .catch((error) => handleError(error))
      .finally(() => dispatch(setIsLoading(false)));
  };
};

export const changeQuantityProductCartThunk = (quantity, id) => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    axios
      .put(
        `https://ecommerce-exercise-backend.herokuapp.com/cart/${id}/change_quantity/`,
        quantity,
        getConfig()
      )
      .then(() => dispatch(getcartThunk()))
      .catch((error) => handleError(error))
      .finally(() => dispatch(setIsLoading(false)));
  };
};
