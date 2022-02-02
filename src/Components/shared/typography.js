import styled from "styled-components";

const P = styled.p`
  font-family: "Circular Std";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  font-size: ${({ right }) => (right ? "10px" : "")};
  line-height: 18px;
  text-align: center;
  text-align: ${({ template, shade }) => (template || shade ? "left" : "")};

  color: #989898;
  color: ${({ shade }) => (shade ? "#08BD37" : "")};
`;

const Span = styled.span`
  font-family: "Circular Std";
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 13px;
  letter-spacing: 0.01em;

  color: #8f8b8b;

  margin-left: ${({ red }) => (red ? "1rem" : "")};
  text-align: ${({ red }) => (red ? "center" : "")};
`;

const H2 = styled.h2`
  font-family: "Circular Std";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;

  padding: 0;
  margin: 0;

  color: #333447;
`;

export { P, Span, H2 };
