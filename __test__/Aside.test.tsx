import { Aside } from "@/components/detector";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Aside", () => {
  it("renders the upload instruction", () => {
    const { getByText } = render(<Aside setFiles={() => {}} />);

    expect(getByText("Upload pdf and docx files")).toBeInTheDocument();
  });

  it("handles file change", () => {
    const mockSetFiles = jest.fn();
    const { getByLabelText } = render(<Aside setFiles={mockSetFiles} />);

    const fileInput = getByLabelText("Browse Files");
    const file = new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" });
    fireEvent.change(fileInput, { target: { files: [file] } });

    expect(mockSetFiles).toHaveBeenCalledWith([file]);
  });
});
