import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import CommentBox from "../CommentBox";

it("shows a comment box", () => {
  const wrapped = shallow(<App />); // shallow just render component but not children of it.
  expect(wrapped.find(CommentBox).length).toEqual(1);
});
