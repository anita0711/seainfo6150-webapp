import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./ArticleTextToggleButton.module.css";

const ArticleTextToggleButton = (props) => {
  return (
    <>
      <button className={styles.showMoreLessButton} onClick={props.onClick}>
        {props.buttonText}
      </button>
    </>
  );
};

ArticleTextToggleButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ArticleTextToggleButton;
