import React from "react";
import Template from "./Template";
import { USER_PER_PAGE } from "../../utils/Constants";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import {
  compareAscOrder,
  compareDscOrder,
  compareAscDate,
  compareDscDate,
} from "../../utils/HelperFunctions";

const Templates = ({
  templateItems,
  page,
  sorterOrd,
  sorterDat,
  selectedCat,
  searchItem,
  onPageChange,
}) => {
  let modifiedUsers = templateItems;

  if (sorterOrd === "Ascending") {
    modifiedUsers = templateItems.sort(compareAscOrder);
  }

  if (sorterOrd === "Descending") {
    modifiedUsers = templateItems.sort(compareDscOrder);
  }

  if (sorterDat === "Ascending") {
    modifiedUsers = templateItems.sort(compareAscDate);
  }

  if (sorterDat === "Descending") {
    modifiedUsers = templateItems.sort(compareDscDate);
  }

  if (selectedCat) {
    modifiedUsers = templateItems
      .filter((temp) => temp.category.includes(selectedCat))
      .map((item) => item);

    onPageChange(Math.ceil(modifiedUsers?.length / USER_PER_PAGE));
  }

  if (searchItem) {
    modifiedUsers = templateItems
      .filter((temp) => temp.name.includes(searchItem))
      .map((item) => item);

    setTimeout(() => {
      onPageChange(Math.ceil(modifiedUsers?.length / USER_PER_PAGE));
    }, 5000);
  }

  const startIndex = (page - 1) * USER_PER_PAGE;

  const selectedTemplate = modifiedUsers?.slice(
    startIndex,
    startIndex + USER_PER_PAGE
  );

  return selectedTemplate.map((temp, index) => (
    <Template
      key={index}
      id={index}
      name={temp.name}
      description={temp.description}
      link={temp.link}
    />
  ));
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPageChange: (page) => dispatch(actions.totalPageUpdater(page)),
  };
};

export default connect(null, mapDispatchToProps)(Templates);
