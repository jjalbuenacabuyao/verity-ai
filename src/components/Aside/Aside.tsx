import React from "react";
import FileUploadForm from "../FileUploadForm/FileUploadForm";
import { FiUpload } from "react-icons/fi"

type Props = {};

const Aside = (props: Props) => {
  return (
    <aside className="mt-20 mx-6">
      <div className="flex flex-col items-center py-6 border-2 border-dashed rounded-lg">
        <FiUpload size={36} />
        <h1 className="mt-4 mb-6">Upload pdf and docx files</h1>
        <FileUploadForm />
      </div>
    </aside>
  );
};

export default Aside;
