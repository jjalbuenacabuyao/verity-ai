import React from "react";
import { render } from "@testing-library/react";
import { DownloadReportButton } from "@/components/detector";
import "@testing-library/jest-dom";

describe("DownloadReportButton", () => {
  it("renders the button", () => {
    const { getByText } = render(
      <DownloadReportButton results={[]} isLoading={false} />
    );
    expect(getByText("Download Report")).toBeInTheDocument();
  });

  it("is disabled when isLoading is true", () => {
    const { getByText } = render(
      <DownloadReportButton results={[]} isLoading={true} />
    );
    expect(getByText("Download Report")).toBeDisabled();
  });

  it("is disabled when there are no results", () => {
    const { getByText } = render(
      <DownloadReportButton results={[]} isLoading={false} />
    );
    expect(getByText("Download Report")).toBeDisabled();
  });
});
