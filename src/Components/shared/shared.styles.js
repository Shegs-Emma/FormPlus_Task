import styled from "styled-components";

const TextField = styled.input.attrs({
  autoComplete: "off",
})`
  width: 100%;
  flex: 1;
  border: none;
  border-radius: 0.625rem;
  font-size: 75%;
  font-family: "Circular Std";
  background-color: #fff;
  padding: 0.7rem 0 0.7rem 0.875rem;

  &:focus {
    outline: none;
  }
`;

const SelectField = styled.select`
  flex: 1;
  font-size: 82.5%;
  background-color: #fff;
  padding: 0.7rem 0 0.7rem 0.875rem;
  cursor: pointer;

  width: 160px;
  height: 39px;
  border: 0.5px solid #c4c4c4;
  border-radius: 2px;

  /* Hide arrow icon in IE browsers */
  ::-ms-expand {
    display: none;
  }

  /* Focus style */
  &:focus {
    /* It'd be nice to use -webkit-focus-ring-color here but it doesn't work on box-shadow */
    box-shadow: 0 0 0 3px -moz-mac-focusring;
    outline: none;
  }

  /* Set options to normal weight */
  option {
    font-weight: normal;
  }

  @media (min-width: 52em) and (max-width: 57.875em) {
    width: 130px;
  }
`;

export { TextField, SelectField };
