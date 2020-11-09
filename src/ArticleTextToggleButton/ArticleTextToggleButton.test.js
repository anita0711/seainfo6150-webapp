import React from "react";
import ArticleTextToggleButton from "./ArticleTextToggleButton";

const showText = false;
function onClick() {
  showText = !showText;
}

describe("ArticleTextToggleButton tests", () => {
  it("renders correctly", () => {
    const { container } = render(
      <ArticleTextToggleButton buttonText="Show more" onClick={onClick} />
    );
    expect(container).toMatchSnapshot();
  });
});
