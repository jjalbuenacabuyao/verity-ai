import { ResultWithFilename } from "@/types";
import { createDetectionReportDocx } from "@/utils";
import { saveAs } from "file-saver";
import { Packer } from "docx";
import { Button } from "@nextui-org/button";

interface Props {
  results: ResultWithFilename[];
  isLoading: boolean;
}

const DownloadReportButton = ({ results, isLoading }: Props) => {
  const generatedDocx = createDetectionReportDocx(results);

  const date = new Date();

  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "short" });
  const dateToday = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  const dateString = `${year}-${month}-${dateToday}`;
  const filename = `Detection Report - (${dateString})_${hour}${minute}${second}.docx`;

  async function downloadDocx() {
    const buffer = await Packer.toBlob(generatedDocx);
    saveAs(buffer, filename);
  }
  return (
    <Button
      color="primary"
      variant="bordered"
      radius="full"
      isDisabled={results.length === 0 || isLoading}
      onPress={downloadDocx}
      className="text-xs tracking-wide font-medium hover:shadow-md"
    >
      Download Report
    </Button>
  );
};

export default DownloadReportButton;
