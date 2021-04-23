import React from "react";
import ImageSlider from "./ImageSlider.js";

it("Renders the Image Slider component correctly", () => {
  const { container } = render(<ImageSlider />);
  expect(container).toMatchSnapshot();
});
