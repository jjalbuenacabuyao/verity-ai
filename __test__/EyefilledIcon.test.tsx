import { render, screen } from "@testing-library/react";
import { EyeFilledIcon } from "@/components/utilities";
import "@testing-library/jest-dom";

describe("EyeFilledIcon", () => {
  it("renders the icon", () => {
    render(<EyeFilledIcon />)
    expect(screen.getByTestId("eyeFilledIcon")).toBeInTheDocument();
  })
})