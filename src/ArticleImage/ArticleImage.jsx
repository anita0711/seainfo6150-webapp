import React from "react";
import PropTypes from "prop-types";
import styles from "./ArticleImage.module.css";

const ArticleImage = function (props) {
  return (
    <div>
      <img src={props.url} alt="" className={styles.image}></img>
      <h2 className={styles.title}>{props.title}</h2>
    </div>
  );
};

ArticleImage.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ArticleImage;
