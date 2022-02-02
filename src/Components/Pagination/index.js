import React from "react";
import classes from "./Pagination.module.css";
import { BsChevronRight } from "react-icons/bs";

const Pagination = ({ totalPages, handleClick, currentPage, prev, next }) => {
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);

  let stylePrev = prev ? classes.Disabled : classes.Button;
  let styleNext = next ? classes.Disabled : classes.Button;

  const handleNext = () => {
    if (currentPage >= 1 || currentPage <= pages.length) {
      let nextPage = currentPage + 1;
      handleClick(nextPage);
    }
  };

  const handlePrev = () => {
    if (currentPage >= 1 || currentPage <= pages.length) {
      let prevPage = currentPage - 1;
      handleClick(prevPage);
    }
  };

  return (
    <React.Fragment>
      <div className={classes.Pagination}>
        <div className={stylePrev} onClick={handlePrev} disabled={prev}>
          Previous
        </div>

        <div className={classes.Middle}>
          <div className={classes.CurrentPage}>
            <span className={classes.Current}>{currentPage}</span>
          </div>
          <span className={classes.Current}>of</span>
          <span className={classes.Current}>{totalPages}</span>
        </div>

        <div className={styleNext} onClick={handleNext} disabled={next}>
          Next
          <BsChevronRight className={classes.Chev} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Pagination;
