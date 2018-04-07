import React from "react";
import Enzyme, { shallow } from "enzyme";
import Search from "./";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Search component", () => {
  test("renders", () => {
    const wrapper = shallow(<Search />);

    expect(wrapper.exists()).toBe(true);
  });

  // test("user text is echoed", () => {
  //   const wrapper = shallow(<Search />);
  //
  //   wrapper.find("input").simulate("keyDown");
  // });

  test("when the form is submitted the event is cancelled", () => {
    const wrapper = shallow(<Search />);
    let prevented = false;
    wrapper.find("form").simulate("submit", {
      preventDefault: () => {
        prevented = true;
      }
    });
    expect(prevented).toBe(true);
  });
});
