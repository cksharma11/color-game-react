import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import Board from "../Board";

configure({ adapter: new Adapter() });

describe("Board", () => {
  const colors = ["red", "blue", "green", "yellow"];

  it("should render properly", () => {
    const props = {
      colors: colors,
      currentColor: "red",
      score: { score: 0 },
      onClick: () => {}
    };

    const wrapper = shallow(<Board {...props} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
