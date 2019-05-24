import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import Board from "../Board";

configure({ adapter: new Adapter() });

describe("Board", () => {
  it("should render properly", () => {
    const props = {};
    const wrapper = shallow(<Board {...props} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});

