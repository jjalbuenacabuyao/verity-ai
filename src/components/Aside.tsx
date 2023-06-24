import React, { Dispatch, SetStateAction } from "react";
import FileUploadForm from "./FileUploadForm";
import { FiUpload } from "react-icons/fi";

const Aside = () => {
  return (
    <aside className="mt-20 mb-16">
      <div className="flex flex-col items-center rounded-lg border-2 border-dashed py-6">
        <FiUpload size={36} />
        <h1 className="mb-6 mt-4">Upload pdf and docx files</h1>
        <FileUploadForm />
      </div>
    </aside>
  );
};

export default Aside;
