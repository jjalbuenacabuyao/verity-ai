//@ts-ignore
import {
  Table,
  TableHeader,
  TableColumn,
  TableRow,
  TableCell,
  TableBody,
} from "@nextui-org/table";

interface Props {
  texts: {
    text: string;
    score: number;
    label: string;
  }[];
}

/**
 * Renders a table with paragraphs and their corresponding detection results.
 * The number of words in each paragraph is determined based on the screen width.
 * The table is populated with data from the `texts` prop.
 *
 * @component
 * @example
 * import { ResultBreakdownTable } from "./ResultBreakdownTable";
 *
 * const texts = [
 *   { text: "Lorem ipsum dolor sit amet", score: 80, label: "LABEL_0" },
 *   { text: "Consectetur adipiscing elit", score: 90, label: "LABEL_1" },
 *   // more text objects...
 * ];
 *
 * const App = () => {
 *   return (
 *     <div>
 *       <h1>Result Breakdown</h1>
 *       <ResultBreakdownTable texts={texts} />
 *     </div>
 *   );
 * };
 *
 * @param {Object[]} texts - An array of objects representing the paragraphs to be displayed in the table.
 * Each object should have the properties `text` (string), `score` (number), and `label` (string).
 * @returns {JSX.Element} - The rendered table component.
 */
const ResultBreakdownTable = ({ texts }: Props) => {
  const screenWidth = screen.width;
  let slicedWords: number;
  if (screenWidth < 640) {
    slicedWords = 20;
  } else if (screenWidth >= 640 && screenWidth < 1024) {
    slicedWords = 30;
  } else {
    slicedWords = 60;
  }

  return (
    <Table
      aria-label="Detection Result Breakdown"
      classNames={{
        wrapper: "mb-2",
      }}
    >
      <TableHeader>
        <TableColumn key="paragraph">Paragraphs</TableColumn>
        <TableColumn key="result">Result</TableColumn>
      </TableHeader>
      <TableBody>
        {texts?.map(({ text, score, label }, index) => (
          <TableRow key={index}>
            <TableCell>
              <p className="max-w-xl sm:text-justify">
                {text.split(" ").slice(0, slicedWords).join(" ") + "..."}
              </p>
            </TableCell>
            <TableCell>
              <p className="font-semibold">
                {`${score}% Probability of the paragraph being ${
                  label === "LABEL_0" ? "AI-Generated" : "Human Written"
                }`}
              </p>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ResultBreakdownTable;
