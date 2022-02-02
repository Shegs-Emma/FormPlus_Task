import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  totalPages: 0,
};

const totalNoPages = (state, action) => {
  return updateObject(state, {
    totalPages: action.pages,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.NEW_TOTAL_PAGES:
      return totalNoPages(state, action);
    default:
      return state;
  }
};

export default reducer;
