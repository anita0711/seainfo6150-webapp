import React from "react";
import ArticleList from "./ArticleList";

const article = [
  {
    "181118211616-banasthali-vidyapith-aviation-school-india": {
      author: "Roxie Parks",
      displayDate: "November 21st 2018, 6:43 pm",
      shortText:
        "On a dusty, 3,600-foot-long airstrip in Rajasthan, India, a two-seater white Cessna 152 pivots into position. A few moments later, it's soaring over the empty desert into a cloudless blue sky.",
      title: "Training India's next generation of female pilots",
    },
  },
];

describe("ArticleList tests", () => {
  it("renders correctly after array is passed", () => {
    const { container } = render(
      <ArticleList articles={Object.values(article)} />
    );
    expect(container).toMatchSnapshot();
  });
});
