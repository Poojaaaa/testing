import React from "react";
import ReactDOM from "react-dom";
import App from "../App";

it("shows a comment box", () => {
  const div = document.create("div");
  ReactDOM.render(<App />, div);

  // Looks inside the div
  // and checks to see if comment box is in there

  ReactDOM.unmountComponentAtNode(div); // it cleans up after our tests run
});
