import React from "react";
import HTMLTest from "./HTMLText";


describe("HTMLText tests", () => {

    it("renders correctly", () => {
      const { container } = render(<HTMLTest text="dummytext" />);
      expect(container).toMatchSnapshot();
    });
  });