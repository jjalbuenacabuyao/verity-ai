import React, { ChangeEvent, Dispatch, SetStateAction } from "react";
import { FiUpload } from "react-icons/fi";

interface Props {
  setFiles: Dispatch<SetStateAction<File[]>>;
}

const Aside = ({ setFiles }: Props) => {
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileInput = event.target.files;
    if (fileInput) {
      if (fileInput.length > 50) {
        return;
      }

      const fileArray: File[] = [...fileInput];
      setFiles(fileArray);
    }
  };

  return (
    <aside className="mb-16 pt-8 lg:pt-10 lg:mb-0">
      <div className="flex flex-col items-center rounded-lg border-2 border-gray-300 border-dashed py-6 lg:sticky lg:top-28 lg:inset-x-auto">
        <FiUpload size={36} />
        <h1 className="mb-6 mt-4">Upload pdf and docx files</h1>
        <label
          tabIndex={17}
          htmlFor="file"
          className="flex items-center gap-2 rounded-full bg-blue-600 px-6 py-2 text-sm tracking-wide text-white font-medium cursor-pointer hover:shadow-md hover:bg-blue-800 hover:shadow-slate-400 transition-all">
          Browse Files
          <input
            className="hidden"
            id="file"
            type="file"
            onChange={handleFileChange}
            multiple
            accept=".doc,.docx,.pdf,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          />
        </label>
      </div>
    </aside>
  );
};

export default Aside;
