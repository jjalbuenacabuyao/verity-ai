import { render, screen } from "@testing-library/react";
import { FeatureCard } from "@/components/home";
import { IoFlash } from "react-icons/io5";
import "@testing-library/jest-dom";

const intersectionObserverMock = () => ({
  observe: () => null,
});

window.IntersectionObserver = jest
  .fn()
  .mockImplementation(intersectionObserverMock);

describe("Feature Card", () => {
  it("renders the title", () => {
    render(
      <FeatureCard title="Hello" description="World" icon={<IoFlash />} />
    );
    const title = screen.getByTestId("title");
    const description = screen.getByTestId("description");
    expect(title).toBeInTheDocument();
  });

  it("renders the description", () => {
    render(
      <FeatureCard title="Hello" description="World" icon={<IoFlash />} />
    );
    const description = screen.getByTestId("description");
    expect(description).toBeInTheDocument();
  });

  it("renders the icon", () => {
    render(
      <FeatureCard title="Hello" description="World" icon={<IoFlash />} />
    );
    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();
  });
});
