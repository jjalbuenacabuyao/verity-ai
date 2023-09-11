import { render, screen } from "@testing-library/react";
import { HeroIllustration } from "@/components/home";
import "@testing-library/jest-dom";

describe("Hero Illustration", () => {
  it("renders the photo of AI-detector", () => {
    render(<HeroIllustration />);
    const photo = screen.getByAltText("Photo of AI-detector");
    expect(photo).toBeInTheDocument();
  });

  it("renders the photo of detection report", () => {
    render(<HeroIllustration />);
    const photo = screen.getByAltText("Photo of detection report");
    expect(photo).toBeInTheDocument();
  });

  it("renders the pdf icon", () => {
    render(<HeroIllustration />);
    const pdfIcon = screen.getByAltText("PDF file icon");
    expect(pdfIcon).toBeInTheDocument();
  });

  it("renders the docx icon", () => {
    render(<HeroIllustration />);
    const docxIcon = screen.getByAltText("DOCX file icon");
    expect(docxIcon).toBeInTheDocument();
  });

  it("renders the avatars", () => {
    render(<HeroIllustration />);
    const avatars = screen.getAllByTestId("avatar");
    avatars.map((avatar) => {
      expect(avatar).toBeInTheDocument();
    });
  });

  it("renders the CircularProgress", () => {
    render(<HeroIllustration />);
    const circularProgress = screen.getAllByTestId("circularProgress");
    circularProgress.map((progress) => {
      expect(progress).toBeInTheDocument();
    });
  });

  it("renders the button", () => {
    render(<HeroIllustration />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
