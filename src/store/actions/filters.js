import * as actionTypes from "./actionTypes";

export const searchFilter = (search) => {
  return {
    type: actionTypes.SEARCH_ITEM,
    filter: search,
  };
};

export const categoryFilter = (category) => {
  return {
    type: actionTypes.CATEGORY_TYPE,
    filter: category,
  };
};

export const orderFilter = (order) => {
  return {
    type: actionTypes.ORDER_TYPE,
    filter: order,
  };
};

export const dateFilter = (date) => {
  return {
    type: actionTypes.DATE_TYPE,
    filter: date,
  };
};

export const fetchFilter = (name, type) => {
  return (dispatch) => {
    switch (name) {
      case "category":
        dispatch(categoryFilter(type));
        break;
      case "order":
        dispatch(orderFilter(type));
        break;
      case "date":
        dispatch(dateFilter(type));
        break;
      case "search":
        dispatch(searchFilter(type));
        break;
      default:
        return;
    }
  };
};
