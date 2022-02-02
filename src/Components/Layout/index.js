import React from "react";
import Aux from "../../hoc";
import { LayoutContainer } from "./Layout.styles";

const Layout = (props) => {
  return (
    <Aux>
      <LayoutContainer>
        <main>{props.children}</main>
      </LayoutContainer>
    </Aux>
  );
};

export default Layout;
