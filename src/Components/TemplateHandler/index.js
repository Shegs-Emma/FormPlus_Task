import React, { useState, useEffect } from "react";
import { P, Span } from "../shared/typography";
import { BsInfoCircle } from "react-icons/bs";
import {
  TemplateContainer,
  NotifyHead,
  NotifyItem,
  TemplateDisplay,
  TemplateHead,
  TemplateBody,
} from "./TemplateHandler.styles";
import Spinner from "../Spinner";
import Pagination from "../Pagination";
import { USER_PER_PAGE } from "../../utils/Constants";
import Templates from "../Templates";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

const TemplateHandler = ({
  templates,
  loading,
  category,
  order,
  date,
  search,
  totalPages,
  onPageChange,
}) => {
  const [results, setResults] = useState([]);
  // const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [disablePrev, setDisablePrev] = useState(true);
  const [disableNext, setDisableNext] = useState(false);
  const [orderSorter, setOrderSorter] = useState("");
  const [dateSorter, setDateSorter] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchItem, setSearchItem] = useState("");

  // Check the amount of data to be displayed per page
  useEffect(() => {
    if (templates?.length > 0) {
      setResults(templates);
      onPageChange(Math.ceil(templates.length / USER_PER_PAGE));
    }
  }, [templates, onPageChange]);

  // Handle the order sorter
  useEffect(() => {
    if (order) {
      setOrderSorter(order);
      setDateSorter("");
      setSelectedCategory("");
      setSearchItem("");
    }

    if (date) {
      setDateSorter(date);
      setOrderSorter("");
      setSelectedCategory("");
      setSearchItem("");
    }

    if (category) {
      setSelectedCategory(category);
      setDateSorter("");
      setOrderSorter("");
      setSearchItem("");
    }

    if (search) {
      setSelectedCategory("");
      setDateSorter("");
      setOrderSorter("");
      setSearchItem(search);
    }
  }, [order, date, category, search]);

  // Handle pagination click buttons
  const handleClick = (num) => {
    setPage(num);
    if (num > 1) {
      setDisablePrev(false);
      setDisableNext(false);
    } else if (num === 1) {
      setDisablePrev(true);
    }

    if (page === totalPages - 1) {
      setDisableNext(true);
    }
  };

  // Display Spinner while data is loading
  let templatesList = <Spinner />;

  // Display templates once available
  if (!loading && results && results.length > 0) {
    templatesList = (
      <Templates
        templateItems={results}
        page={page}
        sorterOrd={orderSorter}
        sorterDat={dateSorter}
        selectedCat={selectedCategory}
        searchItem={searchItem}
      />
    );
  }

  return (
    <TemplateContainer>
      <NotifyHead>
        <NotifyItem>
          <BsInfoCircle color="#FC830A" />
          <Span red>
            Tada! Get started with a free template. Can’t find what you are
            looking for? Search from the 1000+ available templates
          </Span>
        </NotifyItem>
      </NotifyHead>

      <TemplateDisplay>
        <TemplateHead>
          <P>
            {selectedCategory
              ? `${selectedCategory} Templates`
              : "All Templates"}
          </P>
          <P right>{templates.length} templates</P>
        </TemplateHead>

        <TemplateBody>{templatesList}</TemplateBody>
      </TemplateDisplay>

      <Pagination
        totalPages={totalPages}
        handleClick={handleClick}
        currentPage={page}
        prev={disablePrev}
        next={disableNext}
      />
    </TemplateContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    totalPages: state.pagination.totalPages,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPageChange: (page) => dispatch(actions.totalPageUpdater(page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TemplateHandler);
