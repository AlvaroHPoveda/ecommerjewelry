import axios from "axios";
import { handleError, setIsLoading } from ".";
import { getConfig } from "../../utils";

export const productsActions = {
  setProducts: "SET_PRODUCTS",
  setProduct: "SET_PRODUCT",
};

export const setProducts = (products) => ({
  type: productsActions.setProducts,
  payload: products,
});

export const setProduct = (product) => ({
  type: productsActions.setProduct,
  payload: product,
});

export const getProductsThunk = () => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    axios
      .get(
        "https://ecommerce-exercise-backend.herokuapp.com/products/",
        getConfig()
      )
      .then((res) => dispatch(setProducts(res.data)))
      .catch((error) => handleError(error))
      .finally(() => dispatch(setIsLoading(false)));
  };
};

export const getProductThunk = (id) => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    axios
      .get(
        `https://ecommerce-exercise-backend.herokuapp.com/products/${id}/`,
        getConfig()
      )
      .then((res) => dispatch(setProduct(res.data)))
      .catch((error) => handleError(error))
      .finally(() => dispatch(setIsLoading(false)));
  };
};

export const getCategoryThunk = (value) => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    axios
      .get(
        `https://ecommerce-exercise-backend.herokuapp.com/products/?category=${value}`,
        getConfig()
      )
      .then((res) => dispatch(setProducts(res.data)))
      .catch((error) => handleError(error))
      .finally(() => dispatch(setIsLoading(false)));
  };
};

export const filterHeadlineThunk = (search) => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    axios
      .get(
        `https://ecommerce-exercise-backend.herokuapp.com/products/?name__icontains=${search}`,
        getConfig()
      )
      .then((res) => dispatch(setProducts(res.data)))
      .catch((error) => handleError(error))
      .finally(() => dispatch(setIsLoading(false)));
  };
};
