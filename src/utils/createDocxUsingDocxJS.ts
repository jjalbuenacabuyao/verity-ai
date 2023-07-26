import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Header,
  Table,
  TableRow,
  TableCell,
  WidthType,
  AlignmentType,
  TabStopType,
  TabStopPosition,
  VerticalAlign,
} from "docx";
import { saveAs } from "file-saver";

const doc = new Document({
  styles: {
    paragraphStyles: [
      {
        id: "Normal",
        name: "Normal",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: {
          font: "Segoe UI",
        },
      },
    ],
  },

  sections: [
    {
      properties: {},
      headers: {
        default: new Header({
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: "VerityAI | Detaction Report",
                  font: "Product Sans",
                  bold: true,
                }),
                new TextRun({
                  text: "\t" + new Date().toLocaleDateString(),
                  font: "Product Sans",
                }),
              ],
              tabStops: [
                {
                  type: TabStopType.RIGHT,
                  position: TabStopPosition.MAX,
                },
              ],
            }),
          ],
        }),
      },
      children: [
        new Table({
          width: {
            size: `${""}${100}%`,
            type: WidthType.PERCENTAGE,
          },
          rows: [
            new TableRow({
              children: [
                new TableCell({
                  verticalAlign: VerticalAlign.CENTER,
                  children: [new Paragraph({
                    children: [
                      new TextRun({
                        text: "Filenames",
                        font: "Product Sans",
                        bold: true,
                      })
                    ]
                  })],
                }),
                new TableCell({
                  verticalAlign: VerticalAlign.CENTER,
                  children: [new Paragraph({
                    children: [
                      new TextRun({
                        text: "Overall Percentage of AI-Generated Text",
                        font: "Product Sans",
                        bold: true,
                      })
                    ]
                  })],
                }),
              ],
            }),
          ],
        }),
      ],
    },
  ],
});

const createDocxUsingDocxJs = async () => {
  const buffer = await Packer.toBlob(doc);
  saveAs(buffer, "Hello.docx");
};

export default createDocxUsingDocxJs;
