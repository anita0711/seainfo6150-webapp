import React from "react";
import ArticleListItem from "./ArticleListItem";

const article = {
  author: "Roxie Parks",
  displayDate: "November 21st 2018, 6:43 pm",
  shortText:
    "On a dusty, 3,600-foot-long airstrip in Rajasthan, India, a two-seater white Cessna 152 pivots into position. A few moments later, it's soaring over the empty desert into a cloudless blue sky.",
  title: "Training India's next generation of female pilots",
};

describe("ArticleListItem tests", () => {
  it("renders correctly after object is passed", () => {
    const { container } = render(<ArticleListItem article={article} />);
    expect(container).toMatchSnapshot();
  });
});
