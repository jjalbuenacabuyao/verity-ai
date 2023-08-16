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
    <aside className="mb-16 pt-8 lg:mb-0 lg:pt-10">
      <div className="flex flex-col gap-4 lg:sticky lg:inset-x-auto lg:top-auto">
        <div className="group flex flex-col items-center rounded-lg border-2 border-dashed border-gray-300 py-6">
          <FiUpload size={36} className="group-hover:animate-bounce" />
          <h1 className="mb-6 mt-4">Upload pdf and docx files</h1>
          <label
            htmlFor="file"
            className="flex cursor-pointer items-center gap-2 rounded-full bg-blue-600 px-6 py-2 text-sm font-medium tracking-wide text-white transition-all hover:bg-blue-800 hover:shadow-md hover:shadow-slate-400">
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

        <div className="p-3 shadow-lg border rounded-lg">
          <p className="text-sm">
            <span className="font-medium">Important 🚨:</span> You can upload maximum of <span className="font-medium">20</span> files each time.
          </p>
        </div>

        <div className="p-3 shadow-lg border rounded-lg">
          <p className="text-sm">
            <span className="font-medium">Important 🚨:</span> Only <span className="font-medium">docx and pdf</span> files are supported.
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
