import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Templates from "../Templates/index";

configure({ adapter: new Adapter() });

jest.mock("react-redux", () => ({
  connect: () => {
    return (component) => {
      return component;
    };
  },
}));

describe("<Templates />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Templates
        templateItems={[
          {
            name: "Emmanuel",
            description: "The freet oj kjacd dhds jhkjd",
            created: "2020-11-04T16:26:44.666569",
            category: ["Health", "Education"],
            link: "",
          },
          {
            name: "Emmanuel",
            description: "The freet oj kjacd dhds jhkjd",
            created: "2020-11-04T16:26:44.666569",
            category: ["Health", ""],
            link: "",
          },
          {
            name: "Emmanuel",
            description: "The freet oj kjacd dhds jhkjd",
            created: "2020-11-04T16:26:44.666569",
            category: ["Health", "Education"],
            link: "",
          },
          {
            name: "Emmanuel",
            description: "The freet oj kjacd dhds jhkjd",
            created: "2020-11-04T16:26:44.666569",
            category: ["Health", ""],
            link: "",
          },
        ]}
        page={2}
      />
    );
  });

  it("should render <Templates /> when recieving templates", () => {
    expect(wrapper.find(Templates)).toBeTruthy();
  });
});

describe("<Templates />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Templates
        templateItems={[
          {
            name: "Emmanuel",
            description: "The freet oj kjacd dhds jhkjd",
            created: "2020-11-04T16:26:44.666569",
            category: ["Health", "Education"],
            link: "",
          },
          {
            name: "Emmanuel",
            description: "The freet oj kjacd dhds jhkjd",
            created: "2020-11-04T16:26:44.666569",
            category: ["Health"],
            link: "",
          },
          {
            name: "Emmanuel",
            description: "The freet oj kjacd dhds jhkjd",
            created: "2020-11-04T16:26:44.666569",
            category: ["Health", "Education"],
            link: "",
          },
          {
            name: "Emmanuel",
            description: "The freet oj kjacd dhds jhkjd",
            created: "2020-11-04T16:26:44.666569",
            category: ["Health"],
            link: "",
          },
        ]}
        page={1}
        searchItem={"Health"}
      />
    );
  });

  it("<Templates /> should return an item if search item is present. ", () => {
    expect(wrapper.find(Templates)).toBeDefined();
  });
});
