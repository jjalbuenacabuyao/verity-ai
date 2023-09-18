import { act, fireEvent, render, screen } from "@testing-library/react";
import { AccessDenied } from "@/components/utilities";
import "@testing-library/jest-dom";
import mockRouter from "next-router-mock";

jest.mock("next/navigation", () => jest.requireActual("next-router-mock"));

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("AccessDenied", () => {
  it("renders the image", () => {
    render(<AccessDenied />);
    expect(screen.getByAltText("Access denied")).toBeInTheDocument();
  });

  it("renders the source of the image", () => {
    render(<AccessDenied />);
    expect(screen.getByText("Image by pch.vector"));
    expect(screen.getByText("on Freepik")).toBeInTheDocument();
  });

  it("renders the heading", () => {
    render(<AccessDenied />);
    expect(screen.getByText("Access Denied")).toBeInTheDocument();
  });

  it("renders the paragraph", () => {
    render(<AccessDenied />);
    expect(screen.getByText("We're sorry, but the page you're trying to access requires you to be logged in. Please log in to your account to continue."))
  });

  it("renders the log in button", () => {
    render(<AccessDenied />);
    expect(screen.getByText("Log in")).toBeInTheDocument();
  });

  it("renders the back to homepage button", () => {
    render(<AccessDenied />);
    expect(screen.getByText("Back to homepage")).toBeInTheDocument();
  });

  it("opens the login modal when login button was pressed", () => {
    render(<AccessDenied />);
    const loginButton = screen.getByRole("button", { name: /Log in/i });
    act(() => fireEvent.click(loginButton));
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  })

  // it("navigates to homepage when back to homepage buttton was pressed", () => {
  //   render(<AccessDenied />);
  //   const backToHome = screen.getByRole("button", { name: /Back to homepage/i });
  //   act(() => {
  //     fireEvent.click(backToHome);
  //     mockRouter.push("/");
  //   });
  //   expect(mockRouter).toMatchObject({ pathname: "/" });
  // })
});
