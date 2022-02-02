import React from "react";
import {
  TemplateItem,
  UnshadedArea,
  ShadeArea,
  TempLink,
} from "../../TemplateHandler/TemplateHandler.styles";
import { H2, P } from "../../shared/typography";

const Template = ({ name, description, link, id }) => {
  return (
    <TemplateItem key={id}>
      <UnshadedArea>
        <H2>{name}</H2>
        <P template>{description}</P>
      </UnshadedArea>
      <ShadeArea>
        <TempLink to={link}>Use Template</TempLink>
      </ShadeArea>
    </TemplateItem>
  );
};

export default Template;
