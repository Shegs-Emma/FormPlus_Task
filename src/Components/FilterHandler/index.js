import React, { useState, useEffect } from "react";
import {
  FilterContainer,
  SearchInput,
  FilterModal,
  SearchIcon,
  FilterOptions,
  FieldRow,
  FilterType,
} from "./FilterHandler.styles";
import { RenderTextField } from "../shared";
import { SelectField } from "../shared/shared.styles";
import { FiSearch } from "react-icons/fi";
import { P, Span } from "../shared/typography";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

const FilterHandler = ({ onFilter }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [order, setOrder] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (search) {
      onFilter("search", search);
    }

    if (category) {
      onFilter("category", category);
    }

    if (order) {
      onFilter("order", order);
    }

    if (date) {
      onFilter("date", date);
    }
  }, [category, order, date, search, onFilter]);

  const categoryTypes = ["Education", "E-commerce", "Health"];
  const orderTypes = ["Ascending", "Descending"];
  const dateTypes = ["Ascending", "Descending"];

  return (
    <FilterContainer>
      <SearchInput>
        <RenderTextField
          search
          placeholder="Search Templates"
          name="name"
          type="text"
          value={search}
          valueSetter={setSearch}
          data-cy="search"
          maxLength="50"
        />
        <SearchIcon>
          <FiSearch color="#9a9a9a" size="1.2rem" />
        </SearchIcon>
      </SearchInput>
      <FilterModal>
        <P>Sort by:</P>
        <FilterOptions>
          <FilterType>
            <Span>Category</Span>
          </FilterType>
          <FieldRow>
            <SelectField
              noBorder
              data-cy="role"
              name="role"
              value={category}
              onChange={(event) => {
                setCategory(event.target.value);
                setOrder("");
                setDate("");
              }}
            >
              <option hidden>All</option>
              {categoryTypes.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </SelectField>
          </FieldRow>
        </FilterOptions>

        <FilterOptions>
          <FilterType>
            <Span>Order</Span>
          </FilterType>
          <FieldRow>
            <SelectField
              noBorder
              data-cy="role"
              name="role"
              value={order}
              onChange={(event) => {
                setOrder(event.target.value);
                setCategory("");
                setDate("");
              }}
            >
              <option hidden>Default</option>
              {orderTypes.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </SelectField>
          </FieldRow>
        </FilterOptions>

        <FilterOptions>
          <FilterType>
            <Span>Date</Span>
          </FilterType>
          <FieldRow>
            <SelectField
              noBorder
              data-cy="role"
              name="role"
              value={date}
              onChange={(event) => {
                setDate(event.target.value);
                setCategory("");
                setOrder("");
              }}
            >
              <option hidden>Default</option>
              {dateTypes.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </SelectField>
          </FieldRow>
        </FilterOptions>
      </FilterModal>
    </FilterContainer>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFilter: (name, type) => dispatch(actions.fetchFilter(name, type)),
  };
};

export default connect(null, mapDispatchToProps)(FilterHandler);
