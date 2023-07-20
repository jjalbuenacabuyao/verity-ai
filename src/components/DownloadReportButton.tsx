import { saveAs } from "file-saver";
import { asBlob } from "html-docx-ts";

const HtmlStr = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
  <meta http-equiv="Pragma" content="no-cache" />
  <meta http-equiv="Expires" content="0" />
  <title>testTitle</title>
<body>
    <div style="color:red;font-family:Arial;font-weight:bold;">
        testContext
    </div >
    <table>
  <tr>
    <th>Month</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>January</td>
    <td>$100</td>
  </tr>
  <tr>
    <td>February</td>
    <td>$80</td>
  </tr>
</table>
</body >
</html >`;

const DownloadReportButton = () => {
  const date = new Date();

  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "short" });
  const dateToday = date.getDate();

  const option = { orientation: "portrait", margins: {}};

  const headerConfig = {
    leftStr: "VerityAI",
    rightStr: `${year} ${month} ${dateToday}`,
  };

  const footerConfig = {
    rightStr: "VerityAI",
  };

  async function downloadDocx() { //@ts-ignore
    asBlob(HtmlStr, option, headerConfig, footerConfig).then((blobData) => {
      saveAs(blobData as Blob, `Detection Result.docx`); // save as docx document
    });
  }
  return <button onClick={downloadDocx}>Download Report</button>;
};

export default DownloadReportButton;
