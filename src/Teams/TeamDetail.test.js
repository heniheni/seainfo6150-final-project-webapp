import React from "react";
import TeamDetail from "./TeamDetail.jsx";

describe("TeamDetail tests", () => {
    
    var team = '{"tag": "CSK","teamName": "Chennai Super Kings","teamReference": "chennai-super-kings","owner": "Chennai Super Kings Cricket Ltd","coach": "Stephen Fleming","teamDescription": "Text","captain": "MS Dhoni","venue": "M. A. Chidambaram Stadium","teamLogoUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Chennai_Super_Kings_Logo.svg/596px-Chennai_Super_Kings_Logo.svg.png","tournmentWon": "2010, 2011, 2018","squad":  ["MS Dhoni (c/wk)","Faf du Plessis","Ruturaj Gaikwad","Suresh Raina", "Ambati Rayudu","N. Jagadeesan (wk)","Robin Uthappa","Ravindra Jadeja","Sam Curran","Dwayne Bravo","Karn Sharma","R. Sai Kishore","Mitchell Santner","Imran Tahir","Deepak Chahar","Shardul Thakur","Lungi Ngidi","KM Asif","Moeen Ali","K Gowtham","Cheteshwar Pujara","M Harisankar Reddy","K. Bhagath Varma","C Hari Nishanth","Jason Behrendorff"]}';

    var json = JSON.parse(team);
    it("renders correctly", () => {
      const { container } = render(<TeamDetail team={json} />);
      expect(container).toMatchSnapshot();
    });

});