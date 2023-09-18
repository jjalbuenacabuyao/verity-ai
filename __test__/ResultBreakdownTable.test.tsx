import { render, screen } from "@testing-library/react";
import { ResultBreakdownTable } from "@/components/detector";
import "@testing-library/jest-dom";

describe("ResultBreakdownTable", () => {
  const component = (
    <ResultBreakdownTable
      texts={[{ text: "Hello World", score: 50, label: "LABEL_0" }]}
    />
  );

  const componentWithMultipleInputs = (
    <ResultBreakdownTable
      texts={[
        {
          text: "Hi",
          label: "LABEL_0",
          score: 60,
        },
        {
          text: "World",
          label: "LABEL_1",
          score: 40,
        },
      ]}
    />
  );

  it("renders the table headers", () => {
    render(component);
    expect(screen.getByText("Paragraphs")).toBeInTheDocument();
    expect(screen.getByText("Result")).toBeInTheDocument();
  });

  it("renders the correct label", () => {
    render(component);
    expect(
      screen.getByText("50% Probability of the paragraph being AI-Generated")
    ).toBeInTheDocument();

    render(
      <ResultBreakdownTable
        texts={[{ text: "Hello", score: 50, label: "LABEL_1" }]}
      />
    );
    expect(
      screen.getByText("50% Probability of the paragraph being Human Written")
    ).toBeInTheDocument();
  });

  it("renders the extracted text from the document", () => {
    render(component);
    expect(screen.getByText("Hello World...")).toBeInTheDocument();
  });

  it("renders all the text if there are multiple items in texts array", () => {
    render(componentWithMultipleInputs);

    expect(screen.getByText("Hi...")).toBeInTheDocument();
    expect(screen.getByText("World...")).toBeInTheDocument();
  });

  it("renders the correct labels on multiple items in texts array", () => {
    render(componentWithMultipleInputs);
    expect(
      screen.getByText("60% Probability of the paragraph being AI-Generated")
    ).toBeInTheDocument();
    expect(
      screen.getByText("40% Probability of the paragraph being Human Written")
    ).toBeInTheDocument();
  });
});
