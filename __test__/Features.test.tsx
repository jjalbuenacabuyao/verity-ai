import { render, screen } from "@testing-library/react";
import { Features } from "@/components/home";
import "@testing-library/jest-dom";

const intersectionObserverMock = () => ({
  observe: () => null,
});

window.IntersectionObserver = jest
  .fn()
  .mockImplementation(intersectionObserverMock);

describe("Features", () => {
  it("renders Fast title", () => {
    render(<Features />);
    expect(screen.getByText("Fast")).toBeInTheDocument();
  });

  it("renders Downloadable Detection Report title", () => {
    render(<Features />);
    expect(
      screen.getByText("Downloadable Detection Report")
    ).toBeInTheDocument();
  });

  it("renders Secure title", () => {
    render(<Features />);
    expect(screen.getByText("Secure")).toBeInTheDocument();
  });

  it("renders Cutting Edge LLM title", () => {
    render(<Features />);
    expect(screen.getByText("Cutting Edge LLM")).toBeInTheDocument();
  });

  it("Free", () => {
    render(<Features />);
    expect(screen.getByText("Free")).toBeInTheDocument();
  });

  it("renders fast feature description", () => {
    render(<Features />);
    expect(
      screen.getByText(
        "VerityAI is designed to provide fast and efficient way of detecting AI-generated text."
      )
    ).toBeInTheDocument();
  });

  it("renders Downloadable Detection Report feature description", () => {
    render(<Features />);
    expect(
      screen.getByText(
        "Detection result can be downloaded for more comprehensive view of the result and for future reference."
      )
    ).toBeInTheDocument();
  });

  it("renders Secure feature description", () => {
    render(<Features />);
    expect(
      screen.getByText(
        "Only authorized educators can access the website, ensuring the security of your data."
      )
    ).toBeInTheDocument();
  });

  it("renders Cutting Edge LLM feature description", () => {
    render(<Features />);
    expect(
      screen.getByText(
        "VerityAI uses RoBERTa Base Open AI detector, a modern Large Language Model(LLM), to analyze the texts and provide the detection results."
      )
    ).toBeInTheDocument();
  });

  it("renders Free feature description", () => {
    render(<Features />);
    expect(
      screen.getByText(
        "Best part? VerityAI is completely free to use as it built using Open-source LLM so enjoy our services without any cost."
      )
    ).toBeInTheDocument();
  });
});
