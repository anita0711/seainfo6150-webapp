import React, { useState } from "react";
import PropTypes from "prop-types";
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton.jsx";
import styles from "./ArticleListItem.module.css";

const ArticleListItem = (props) => {
  const [text, setText] = useState(() => {
    return "Show more";
  });

  function toggleText() {
    setText((prevText) =>
      prevText === "Show more" ? "Show less" : "Show more"
    );
  }

  let content;
  if (text === "Show less") {
    content = (
      <>
        <p>{props.article.shortText}</p>
        <time dateTime={props.article.timeStamp} className={styles.displayDate}>
          {props.article.displayDate}
        </time>
        <br /> <br />
      </>
    );
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{props.article.title}</h2>
      {content}
      <ArticleTextToggleButton onClick={toggleText} buttonText={text} />
    </div>
  );
};

ArticleListItem.propTypes = {
  article: PropTypes.object.isRequired,
};
export default ArticleListItem;
