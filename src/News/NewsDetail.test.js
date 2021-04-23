import React from "react";
import NewsDetail from "./NewsDetail.jsx";

describe("NewsDetail tests", () => {
    
    var newsDetail = '{ "newsId": "match-1-mi-rcb","title": "dummy title","datetime": "2021-04-09T15:30:00.000Z","datePublished": "April 9th 2021, 9:30 pm","newsImageUrl": "https://resources.platform.iplt20.com/photo-resources/2021/04/09/d4189aa6-da1a-41af-9132-53b23cdde606/Match01-_00532-1-.JPG?width=2000&height=1333","shortText": "Harshal Patel starred with the ball and scalped a five-wicket haul.","detailedText": "Test Text"}';


    var json = JSON.parse(newsDetail);
    it("renders correctly", () => {
      const { container } = render(<NewsDetail newsDetail={json} />);
      expect(container).toMatchSnapshot();
    });

});