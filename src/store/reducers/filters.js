import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  category: "",
  order: "",
  date: "",
  search: "",
};

const categoryFilter = (state, action) => {
  return updateObject(state, {
    category: action.filter,
    order: "",
    date: "",
    search: "",
  });
};

const orderFilter = (state, action) => {
  return updateObject(state, {
    category: "",
    order: action.filter,
    date: "",
    search: "",
  });
};

const dateFilter = (state, action) => {
  return updateObject(state, {
    category: "",
    order: "",
    date: action.filter,
    search: "",
  });
};

const searchFilter = (state, action) => {
  return updateObject(state, {
    category: "",
    order: "",
    date: "",
    search: action.filter,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CATEGORY_TYPE:
      return categoryFilter(state, action);
    case actionTypes.ORDER_TYPE:
      return orderFilter(state, action);
    case actionTypes.DATE_TYPE:
      return dateFilter(state, action);
    case actionTypes.SEARCH_ITEM:
      return searchFilter(state, action);
    default:
      return state;
  }
};

export default reducer;
