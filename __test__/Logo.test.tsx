import { Logo } from "@/components/utilities";
import { Navbar } from "@nextui-org/navbar";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Logo", () => {
  it("renders the image", () => {
    render(
      <Navbar>
        <Logo />
      </Navbar>
    );
    expect(screen.getByAltText("VerityAI")).toBeInTheDocument();
  });

  it("renders the text in the logo", () => {
    render(
      <Navbar>
        <Logo />
      </Navbar>
    );
    expect(screen.getByText("VerityAI")).toBeInTheDocument();
  });
});
