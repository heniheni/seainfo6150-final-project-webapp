import React from "react";
import ContactUs from "./ContactUs";


describe("ContactUs tests", () => {

    it("renders correctly", () => {
      const { container } = render(<ContactUs />);
      expect(container).toMatchSnapshot();
    });
  });