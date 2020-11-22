import React from "react";
import ArticleImage from "./ArticleImage";

describe("ArticleTextToggleButton tests", () => {
  it("renders correctly", () => {
    const { container } = render(
      <ArticleImage
        url="https://cdn.cnn.com/cnnnext/dam/assets/181116131343-garima-arora-michelin-super-169.jpg"
        title="India's first woman with a Michelin star"
      />
    );
    expect(container).toMatchSnapshot();
  });
});
