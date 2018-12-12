import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";
import { wrap } from "module";

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
});

it("has a text area and button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});

it("has a text area that user can type in", () => {
  wrapped.find("textarea").simulate("change", {
    target: { value: "new comment" }
  });
  wrapped.update();
  expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
});

// when we simulate we use normal HTML name event
it("when form is submitted, text area gets emptied", () => {
  wrapped.find("textarea").simulate("change", {
    target: { value: "new comment" }
  });
  wrapped.update();
  wrapped.find("form").simulate("submit");
  wrapped.update();
  expect(wrapped.find("textarea").prop("value")).toEqual("");
});
