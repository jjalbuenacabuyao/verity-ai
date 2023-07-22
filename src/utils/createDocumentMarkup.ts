import { ResultWithFilename } from "@/types";

export default function createDocumentMarkup(results: ResultWithFilename[]): string {
  const head: string = `
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="Expires" content="0" />
    <title>testTitle</title>
    <style>
      body {
        font-family: "Segoe UI";
      }

      table {
        width: 100%;
        border-collapse: collapse;
      }

      .root td,
      .root th {
        border: 1px solid black;
      }

      .root th {
        font-family: "Product Sans", "Segoe UI";
      }

      .inner td,
      .inner th {
        border: 0;
        border-bottom: 1px solid black;
      }

      .inner td {
        padding: 8px;
      }

      .inner th {
        border-top: 1px solid black;
      }
    </style>
  </head>`;

  const body: string = `
  <body>
    <table class="root">
      <tr>
        <th>Filename</th>
        <th>Overall Percentage of AI-Generated Text</th>
        <th>Detection result Breakdown</th>
      </tr>
      ${results.map(({ filename, result }) => {
    return `<tr>
          <td style="padding-left: 8px">${filename}</td>
          <td style="padding-left: 8px">${result.aiGeneratedPercentage}%</td>
          <td>
            ${typeof result.aiGeneratedTexts === "string" ? result.aiGeneratedTexts
        : result.aiGeneratedTexts.map(({ text, score, label }) => {
          return `<table class="inner" cellspacing="0" cellpadding="0">
              <tr>
                <th style="border-right: 1px solid black;">Phrase</th>
                <th>Detection Result</th>
              </tr>
              <tr>
                <td style="border-right: 1px solid black;">${text}</td>
                <td>${score}% ${label === "LABEL_0" ? "AI-Generated" : "Human Written"}</td>   
              </tr> 
            </table>`
        })}
          </td>
        </tr>`
  })}
    </table>
  </body >`;

  return `
  <!DOCTYPE html>
  <html lang="en">
    ${head}
    ${body}
  </html>`
}
