import React from "react";
import styles from "./result.module.css";

type Props = {};

const Result = (props: Props) => {
  return (
    <div className={styles.container}>
      <span className={styles.text}>
        Results will be shown here.
      </span>
    </div>
  );
};

export default Result;
