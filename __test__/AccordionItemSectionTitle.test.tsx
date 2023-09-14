import { render, screen } from "@testing-library/react";
import { AccordionItemSectionTitle } from "@/components/detector";
import "@testing-library/jest-dom";

describe("AccordionItemSectionTitle", () => {
  it("renders the icon", () => {
    render(<AccordionItemSectionTitle title="Hello" description="Test" />);
    const terminalIcon = screen.getByTestId("terminalIcon");
    expect(terminalIcon).toBeInTheDocument();
  });

  it("renders the title", () => {
    render(<AccordionItemSectionTitle title="Hello" description="Test" />);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  })

  it("renders the description", () => {
    render(<AccordionItemSectionTitle title="Hello" description="Test" />);
    expect(screen.getByText("Test")).toBeInTheDocument();
  })
})