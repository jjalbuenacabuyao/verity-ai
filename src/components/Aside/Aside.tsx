import React from "react";
import FileUploadForm from "../FileUploadForm/FileUploadForm";
import styles from "./aside.module.css";

type Props = {};

const Aside = (props: Props) => {
  return (
    <aside className={styles.container}>
      <FileUploadForm />
    </aside>
  );
};

export default Aside;
