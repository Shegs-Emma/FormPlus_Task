import * as actionTypes from "./actionTypes";

export const pageUpdater = (pages) => {
  return {
    type: actionTypes.NEW_TOTAL_PAGES,
    pages: pages,
  };
};

export const totalPageUpdater = (pages) => {
  return (dispatch) => {
    dispatch(pageUpdater(pages));
  };
};
