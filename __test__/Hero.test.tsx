import { act, fireEvent, render, screen } from "@testing-library/react";
import { Hero } from "@/components/home";
import "@testing-library/jest-dom";
import CurrentUserContext from "@/hooks/userContext";
import mockRouter from "next-router-mock";

jest.mock("next/navigation", () => jest.requireActual("next-router-mock"));

jest.mock("@/hooks/userContext");

describe("Hero", () => {
  it("renders a heading", () => {
    render(<Hero />);

    const heading = screen.getByRole("heading", {
      name: /Advanced AI generated text detector/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("renders the description", () => {
    render(<Hero />);

    expect(
      screen.getByText(
        "Educator's partner in detecting Artificial Intelligence(AI) generated texts from academic submissions using state-of-the-art Large Language Model(LLM)."
      )
    ).toBeInTheDocument();
  });

  it("renders the button", () => {
    render(<Hero />);

    const button = screen.getByRole("button", {
      name: /Get Started/i,
    });

    expect(button).toBeInTheDocument();
  });

  it("renders the illustration", () => {
    render(<Hero />);

    const illustration = screen.getAllByRole("img");

    illustration.map((image) => {
      expect(image).toBeInTheDocument();
    });
  });

  test("opens the modal when the button is clicked and the user is not logged in", () => {
    render(<Hero />);
    const button = screen.getByRole("button", { name: /Get Started/i });
    fireEvent.click(button);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  test("navigates to the detector page when the button is clicked and the user is logged in", async () => {
    render(
      <CurrentUserContext.Provider
        value={{
          email: "joelcabuyao@gmail.com",
          name: "Joel Cabuyao",
          role: "ADMIN",
        }}
      >
        <Hero />
      </CurrentUserContext.Provider>
    );
    const button = screen.getByRole("button", { name: /Get Started/i });
    fireEvent.click(button);
    await act(() => mockRouter.push("/detector"))
    expect(mockRouter).toMatchObject({pathname: "/detector"})
  });
});
