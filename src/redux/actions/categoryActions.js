export const categoryActions = {
  setCategory: "SET_CATEGORY",
};

export const setCategory = (category) => ({
  type: categoryActions.setCategory,
  payload: category,
});
