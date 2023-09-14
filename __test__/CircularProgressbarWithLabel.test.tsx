import React from "react";
import { render, screen } from "@testing-library/react";
import { CircularProgressbarWithLabel } from "@/components/detector";
import "@testing-library/jest-dom";

describe("CircularProgressbarWithLabel", () => {
  it("renders the value", () => {
    render(
      <CircularProgressbarWithLabel
        value={50}
        icon={<div />}
        label="Test Label"
      />
    );
    expect(screen.getByText("50%")).toBeInTheDocument();
  });

  it("renders the label", () => {
    render(
      <CircularProgressbarWithLabel
        value={50}
        icon={<div />}
        label="Test Label"
      />
    );
    expect(screen.getByText("Test Label")).toBeInTheDocument();
  })

  it("renders red text if the label is AI-Generated", () => {
    render(
      <CircularProgressbarWithLabel
        value={50}
        icon={<div />}
        label="AI-Generated"
      />
    );
    expect(document.querySelector(".text-red-500")).toBeInTheDocument();
  });

  it("renders blue text if the label is not AI-Generated", () => {
    render(
      <CircularProgressbarWithLabel
        value={50}
        icon={<div />}
        label="Human-Written"
      />
    );
    expect(document.querySelector(".text-blue-500")).toBeInTheDocument();
  })
});
