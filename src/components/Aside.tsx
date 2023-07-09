import React, { ChangeEvent, Dispatch, SetStateAction } from "react";
import { FiUpload } from "react-icons/fi";

interface Props {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setFiles: Dispatch<SetStateAction<File[]>>;
}

const Aside = ({ setIsLoading, setFiles }: Props) => {
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);
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
    <aside className="mb-16 mt-20">
      <div className="flex flex-col items-center rounded-lg border-2 border-dashed py-6">
        <FiUpload size={36} />
        <h1 className="mb-6 mt-4">Upload pdf and docx files</h1>
        <label
          htmlFor="file"
          className="flex items-center gap-2 rounded-full bg-sky-500 px-6 py-2 text-sm text-white">
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
