import { render, screen } from "@testing-library/react";
import { Subheading } from "@/components/home";
import "@testing-library/jest-dom";

describe("Subheading", () => {
  it("renders Features heading", () => {
    render(<Subheading title="Features" />)
    expect(screen.getByText("Features")).toBeInTheDocument();
  })

  it("renders Tutorial heading", () => {
    render(<Subheading title="Tutorial" />);
    expect(screen.getByText("Tutorial")).toBeInTheDocument();
  });

  it("renders FAQ heading", () => {
    render(<Subheading title="FAQ" />);
    expect(screen.getByText("FAQ")).toBeInTheDocument();
  });
});
