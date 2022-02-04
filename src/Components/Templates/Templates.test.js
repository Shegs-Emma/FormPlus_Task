import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Template from "./Template";

configure({ adapter: new Adapter() });

describe("<Template />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Template
        key={1}
        id={1}
        name={"Template Title"}
        description={"Thhjb kbsdkj dakdbfc jdkjh"}
        link={"kjnscjsdcnkds"}
      />
    );
  });

  it("should render <Template /> when recieving templates list", () => {
    expect(wrapper.find(Template)).toBeTruthy();
  });
});
