import { ResultWithFilename } from "@/types";
import { createDetectionReportDocx } from "@/utils";
import { saveAs } from "file-saver";
import Button from "./Button";
import { Packer } from "docx";

interface Props {
  results: ResultWithFilename[];
}

const DownloadReportButton = ({ results }: Props) => {
  const generatedDocx = createDetectionReportDocx(results);

  const date = new Date();

  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "short" });
  const dateToday = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  const dateString = `${year}-${month}-${dateToday}`;
  const filename = `Detection Report - ${dateString}/${hour}${minute}${second}.docx`

  async function downloadDocx() {
    const buffer = await Packer.toBlob(generatedDocx);
    saveAs(buffer, filename);
  }
  return (
    <Button
      variant="secondary"
      text="Download Report"
      onClick={downloadDocx}
      disabled={results.length === 0 ? true : false}
    />
  );
};

export default DownloadReportButton;
