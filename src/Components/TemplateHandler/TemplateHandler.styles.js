import styled from "styled-components";
import { Link } from "react-router-dom";

const TemplateContainer = styled.div`
  width: 95%;
  margin: 0 auto;
`;

const NotifyHead = styled.div`
  width: 90%;
  padding: 1rem;
  background: #fff4ea;
  border-radius: 2px;

  @media screen and (min-width: 52em) {
    width: 97%;
  }

  @media (min-width: 48em) and (max-width: 51.938em) {
    width: 97%;
  }
`;

const NotifyItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  width: 100%;

  @media screen and (min-width: 52em) {
    width: 47%;
  }

  @media (min-width: 48em) and (max-width: 51.938em) {
    width: 47%;
  }
`;

const TemplateDisplay = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
`;

const TemplateHead = styled.div`
  width: 97%;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 52em) {
    width: 98%;
  }
`;

const TemplateBody = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: auto auto;
  grid-gap: 40px;

  @media screen and (min-width: 52em) {
    grid-template-columns: auto auto auto;
    grid-gap: 90px;
  }

  @media (min-width: 48em) and (max-width: 51.938em) {
    grid-template-columns: auto auto auto;
    grid-gap: 70px;
  }
`;

const TemplateItem = styled.div`
  background: #ffffff;
  height: 229px;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.08);
  border-radius: 2px;

  text-align: left;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ShadeArea = styled.div`
  background: #f9f9f9;
  padding-left: 1rem;
  height: 41px;
`;

const UnshadedArea = styled.div`
  width: 90%;
  margin: 1rem 1rem 2rem 1rem;
`;

const TempLink = styled(Link)`
  font-family: "Circular Std";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  text-align: left;
  text-decoration: none;
  color: #08bd37;

  position: relative;
  top: 0.5rem;
`;

export {
  TemplateContainer,
  NotifyHead,
  NotifyItem,
  TemplateDisplay,
  TemplateHead,
  TemplateBody,
  TemplateItem,
  ShadeArea,
  UnshadedArea,
  TempLink,
};
