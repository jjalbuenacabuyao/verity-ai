import React from "react";
import FileUploadForm from "../FileUploadForm/FileUploadForm";
import { FiUpload } from "react-icons/fi"
import styles from "./aside.module.css";

type Props = {};

const Aside = (props: Props) => {
  return (
    <aside className={styles.container}>
      <div className={styles.upload}>
        <FiUpload size={36} />
        <h1 className={styles.title}>Upload pdf and docx files</h1>
        <FileUploadForm />
      </div>
    </aside>
  );
};

export default Aside;
