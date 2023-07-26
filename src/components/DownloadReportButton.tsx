import { ResultWithFilename } from "@/types";
import { createDocumentMarkup } from "@/utils";
import { saveAs } from "file-saver";
import { asBlob } from "html-docx-ts";
import Button from "./Button";
import createDocxUsingDocxJs from "@/utils/createDocxUsingDocxJS";

interface Props {
  results: ResultWithFilename[];
}

const DownloadReportButton = ({ results }: Props) => {
  const html = createDocumentMarkup(results);

  const date = new Date();

  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "short" });
  const dateToday = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  const dateString = `${year}-${month}-${dateToday}`;

  const option = { orientation: "landscape", margins: {} };

  const headerConfig = {
    leftStr: "VerityAI",
    rightStr: dateString,
  };

  const footerConfig = {
    rightStr: "VerityAI",
  };

  async function downloadDocx() {
    //@ts-ignore
    asBlob(html, option, headerConfig, footerConfig).then((blobData) => {
      saveAs(
        blobData as Blob,
        `Detection Result (${dateString}) ${hour}${minute}${second}.docx`
      ); // save as docx document
    });
  }
  return (
    <Button
      variant="secondary"
      text="Download Report"
      onClick={createDocxUsingDocxJs}
      disabled={results.length === 0 ? true : false}
    />
  );
};

export default DownloadReportButton;
