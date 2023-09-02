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
  aiGeneratedTexts: {
    text: string;
    score: number;
    label: string;
  }[];
}

const ResultBreakdownTable = ({ aiGeneratedTexts }: Props) => {
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
    <Table aria-label="Detection Result Breakdown" classNames={{
      wrapper: "mb-2",
    }}>
      <TableHeader>
        <TableColumn key="paragraph">Paragraphs</TableColumn>
        <TableColumn key="result">Result</TableColumn>
      </TableHeader>
      <TableBody>
        {aiGeneratedTexts?.map(({ text, score, label }, index) => (
          <TableRow key={index}>
            <TableCell>
              <p className="sm:text-justify">
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
