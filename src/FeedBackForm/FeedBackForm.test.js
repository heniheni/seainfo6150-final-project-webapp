import React from "react";
import FeedBackForm from "./FeedBackForm";


describe("FeedBackForm tests", () => {
    const dummy = () => " ";
    it("renders correctly", () => {
      const { container } = render(<FeedBackForm Name="tryTest" E-mail="test@gmail.com" Phone No="2004001110" City="Surat" Zip Code="98121" Comments="Testing"  onClick={dummy}/>);
      expect(container).toMatchSnapshot();
    });
  });