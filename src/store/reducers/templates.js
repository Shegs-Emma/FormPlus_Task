import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  templates: null,
  error: null,
};

const fetchStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const fetchSuccess = (state, action) => {
  return updateObject(state, {
    templates: action.templates,
    loading: false,
  });
};

const fetchFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_START:
      return fetchStart(state, action);
    case actionTypes.FETCH_SUCCESS:
      return fetchSuccess(state, action);
    case actionTypes.FETCH_FAIL:
      return fetchFail(state, action);
    default:
      return state;
  }
};

export default reducer;
