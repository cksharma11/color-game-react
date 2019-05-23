import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import Box from "../Box";

configure({ adapter: new Adapter() });

describe("Box", () => {
  const colors = ["red", "blue", "green", "yellow"];

  it("should render properly", () => {
    const props = {
      colors: colors,
    };

    const wrapper = shallow(<Box {...props} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
