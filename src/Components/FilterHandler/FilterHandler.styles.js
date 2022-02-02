import styled from "styled-components";

const FilterContainer = styled.div`
  width: 92%;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 22.563em) and (max-width: 23.438em) {
    width: 95%;
    margin: 1rem;
  }

  @media (min-width: 23.5em) and (max-width: 51.938em) {
    width: 90%;
    margin: 1rem;
  }

  @media screen and (min-width: 52em) {
    width: 90%;
    margin: 4rem 0 3rem 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: 57.938em) and (max-width: 64.313em) {
    margin: 3rem 0 1rem 1rem;
    width: 95%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const SearchInput = styled.div`
  display: flex;
  width: 100%;
  height: 45px;
  justify-content: space-between;
  margin-bottom: 2rem;

  border: 0.5px solid #bdbdbd;
  box-sizing: border-box;
  border-radius: 2px;

  @media screen and (min-width: 52em) {
    display: flex;
    width: 319px;
    height: 45px;
    justify-content: space-between;
    margin-bottom: 0;

    border: 0.5px solid #bdbdbd;
    box-sizing: border-box;
    border-radius: 2px;
  }

  @media (min-width: 57em) and (max-width: 64.313em) {
    margin-bottom: 0;
  }
`;

const FilterModal = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  @media screen and (min-width: 52em) {
    width: 50%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0;
  }

  @media (min-width: 57em) and (max-width: 64.313em) {
    width: 60%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
  }

  @media (min-width: 52em) and (max-width: 57.875em) {
    width: 57%;
  }
`;

const SearchIcon = styled.div`
  margin: auto;
  padding: 0.3rem 1.5rem 0 1.5rem;
  cursor: pointer;
`;

const FilterOptions = styled.div`
  display: flex;
`;

const FieldRow = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow-y: hidden;
  padding: 0;
  margin: 0;
`;

const FilterType = styled.div`
  position: absolute;
  top: 5.3rem;
  margin-left: 1rem;
  background-color: #fff;
  padding: 0;

  @media screen and (min-width: 52em) {
    position: absolute;
    top: 3.5rem;
    margin-left: 1rem;
    background-color: #fff;
    padding: 0;
  }

  @media (min-width: 57em) and (max-width: 64.313em) {
    position: absolute;
    top: 2.5rem;
  }
`;

export {
  FilterContainer,
  SearchInput,
  FilterModal,
  SearchIcon,
  FilterOptions,
  FieldRow,
  FilterType,
};
