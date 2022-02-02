import * as actionTypes from "./actionTypes";
import axios from "axios";

export const fetchStart = () => {
  return {
    type: actionTypes.FETCH_START,
  };
};

export const fetchSuccess = (templateData) => {
  return {
    type: actionTypes.FETCH_SUCCESS,
    templates: templateData,
  };
};

export const fetchFail = (error) => {
  return {
    type: actionTypes.FETCH_FAIL,
    error: error,
  };
};

export const fetch = () => {
  return (dispatch) => {
    dispatch(fetchStart());

    axios
      .get(
        "https://front-end-task-dot-result-analytics-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates"
      )
      .then((res) => {
        const fetchedData = [];
        const templates = res.data;

        templates.forEach((template, index) => {
          fetchedData.push({
            id: index,
            name: template.name,
            created: template.created,
            category: template.category,
            description: template.description,
            link: template.link,
          });
        });
        dispatch(fetchSuccess(fetchedData));
      })
      .catch((err) => {
        dispatch(fetchFail(err));
      });
  };
};
