import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import Box from "../Box";

configure({ adapter: new Adapter() });

describe("Box", () => {
  it("should render properly", () => {
    const props = {
      color: "red",
      onClick: () => {}
    };

    const wrapper = shallow(<Box {...props} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
