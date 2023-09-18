import { render, screen } from "@testing-library/react";
import { EyeSlashFilledIcon } from "@/components/utilities";
import "@testing-library/jest-dom";

describe("EyeFilledIcon", () => {
  it("renders the icon", () => {
    render(<EyeSlashFilledIcon />);
    expect(screen.getByTestId("eyeSlashFilledIcon")).toBeInTheDocument();
  });
});
