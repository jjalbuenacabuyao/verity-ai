import { render, screen } from "@testing-library/react";
import { ResultsAccordion } from "@/components/detector";
import "@testing-library/jest-dom";

describe("ResultsAccordion", () => {
  const component = (
    <ResultsAccordion
      data={[
        {
          filename: "Test.docx",
          result: {
            aiGeneratedPercentage: 100,
            texts: "AI-Generated",
          },
        },
      ]}
    />
  );

  const componentWithMultipleFiles = (
    <ResultsAccordion
      data={[
        {
          filename: "Test.docx",
          result: {
            aiGeneratedPercentage: 30,
            texts: "AI-Generated",
          },
        },
        {
          filename: "Test 2.docx",
          result: {
            aiGeneratedPercentage: 70,
            texts: "Human Written",
          },
        },
      ]}
    />
  );

  it("renders the filename", () => {
    render(component);
    expect(screen.getByText(/Test.docx/i)).toBeInTheDocument();
  });

  it("renders the correct percentages", () => {
    render(component);
    expect(screen.getByText("100%")).toBeInTheDocument();
    expect(screen.getByText("0%")).toBeInTheDocument();
  })

  it("renders multiple filenames", () => {
    render(componentWithMultipleFiles);
    expect(screen.getByText("Test.docx")).toBeInTheDocument();
    expect(screen.getByText("Test 2.docx")).toBeInTheDocument();
  });

  it("renders multiple percentages when there are multiple files", () => {
    render(componentWithMultipleFiles);
    expect(screen.getByText("30%")).toBeInTheDocument();
    expect(screen.getByText("70%")).toBeInTheDocument();
  })

  it("renders the AccordionItemSectionTitle's title", () => {
    render(component);
    expect(screen.getByText("Overall Result")).toBeInTheDocument();
  })

  it("renders the AccordionItemSectionTitle's description", () => {
    render(component);
    expect(
      screen.getByText(
        "This represents how much of the entire text in the document was likely created by an AI."
      )
    ).toBeInTheDocument();
  });
});
