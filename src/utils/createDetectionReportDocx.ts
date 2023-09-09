import { ResultWithFilename } from "@/types";
import {
  Document,
  Paragraph,
  TextRun,
  Header,
  Table,
  TableRow,
  TableCell,
  WidthType,
  TabStopType,
  TabStopPosition,
  VerticalAlign,
  BorderStyle,
  AlignmentType,
  Footer,
  PageNumber,
} from "docx";

const TableCellMargin = 100;
const TableSize = 100;
const DefaultFont = "Segoe UI";
const TableHeadingFont = "Product Sans";

const Margin100 = {
  top: TableCellMargin,
  bottom: TableCellMargin,
  left: TableCellMargin,
  right: TableCellMargin,
}

const TableWidth = {
  size: TableSize,
  type: WidthType.PERCENTAGE,
}

const documentStyles = {
  paragraphStyles: [
    {
      id: "Normal",
      name: "Normal",
      basedOn: "Normal",
      next: "Normal",
      quickFormat: true,
      run: {
        font: DefaultFont,
      },
    },
  ],
};

const headerChildren = new Paragraph({
  children: [
    new TextRun({
      text: "VerityAI | Detection Report",
      font: TableHeadingFont,
      bold: true,
    }),
    new TextRun({
      text: "\t" + new Date().toLocaleDateString(),
      font: TableHeadingFont,
    }),
  ],
  tabStops: [
    {
      type: TabStopType.RIGHT,
      position: TabStopPosition.MAX,
    },
  ],
});

const header = {
  default: new Header({
    children: [headerChildren],
  }),
};

const tableHeadingTitles = [
  "Filenames",
  "Overall Percentage of AI-Generated Text",
  "Detection Result Breakdown",
];
const tableHeading = tableHeadingTitles.map(
  (title) =>
    new TableCell({
      verticalAlign: VerticalAlign.CENTER,
      children: [
        new Paragraph({
          children: [
            new TextRun({
              text: title,
              font: TableHeadingFont,
              bold: true,
            }),
          ],
          alignment: AlignmentType.CENTER,
        }),
      ],
    })
);

const innerTableHeadingTitles = ["Paragraphs", "Results"];
const innerTableHeading = innerTableHeadingTitles.map(
  (title) =>
    new TableCell({
      verticalAlign: VerticalAlign.CENTER,
      children: [
        new Paragraph({
          children: [
            new TextRun({
              text: title,
              font: TableHeadingFont,
              bold: true,
            }),
          ],
          alignment: AlignmentType.CENTER,
        }),
      ],
      margins: {
        bottom: TableCellMargin,
      }
    })
);

const createDetectionReportDocx = (data: ResultWithFilename[]) => {
  const detectionResultRow = data.map(({filename, result}) => {
    const tableRow = new TableRow({
      children: [
        new TableCell({
          children: [
            new Paragraph({
              text: filename,
              alignment: AlignmentType.CENTER,
            })
          ],
          margins: Margin100,
        }),

        new TableCell({
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: `${result.aiGeneratedPercentage}%`
                })
              ],
              alignment: AlignmentType.CENTER,
            })
          ],
        }),
      ]
    })

    if (typeof result.texts === "string") {
      tableRow.addChildElement(
        new TableCell({
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: `${result.texts}`,
                  bold: true,
                })
              ]
            })
          ],
          margins: {
            left: TableCellMargin,
          },
          verticalAlign: VerticalAlign.CENTER
        })
      )
    }

    else if (typeof result.texts === "object") {
      const breakdownResultRow = result.texts.map(({text, label, score}) => {
        const textLabel =
          label === "LABEL_0" ? "AI-Generated" : "Human Written";
        return new TableRow({
          children: [
            new TableCell({
              children: [new Paragraph({
                text: text,
                alignment: AlignmentType.JUSTIFIED,
              })],
              margins: Margin100,
            }),
            new TableCell({
              children: [new Paragraph({
                children: [
                  new TextRun({
                    text: `${score}% Probability of the paragraph being ${textLabel}`,
                    bold: true,
                  })
                ],
                alignment: AlignmentType.CENTER,
              })],
              verticalAlign: VerticalAlign.CENTER
            }),
          ],
        });
      });
  
      const innerTable = new Table({
        width: TableWidth,
        rows: [
          new TableRow({
            children: innerTableHeading
          }),
          ...breakdownResultRow,
        ],
        borders: {
          top: { size: 0, style: BorderStyle.NONE },
          bottom: { size: 0, style: BorderStyle.NONE },
          left: { size: 0, style: BorderStyle.NONE },
          right: { size: 0, style: BorderStyle.NONE },
        },
        margins: {
          top: 0,
          bottom: 0,
        }
      });

      tableRow.addChildElement(
        new TableCell({
          children: [innerTable],
          margins: {
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          },
        })
      )
    }

    return tableRow;
  });

  const generatedDocx = new Document({
    styles: documentStyles,
    sections: [
      {
        properties: {},
        headers: header,
        children: [
          new Table({
            width: TableWidth,
            rows: [
              new TableRow({
                children: tableHeading,
              }),
              ...detectionResultRow,
            ],
          }),
        ],
        footers: {
          default: new Footer({
            children: [
              new Paragraph({
                alignment: AlignmentType.RIGHT,
                children: [
                  new TextRun({
                    children: [PageNumber.CURRENT],
                    font: TableHeadingFont,
                  })
                ],
              }),
            ],
          }),
        }
      },
    ],
  });

  return generatedDocx;
};

export default createDetectionReportDocx;
