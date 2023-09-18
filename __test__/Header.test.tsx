import { render, screen } from "@testing-library/react";
import { Header } from "@/components/utilities";
import "@testing-library/jest-dom";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";
import { usePathname } from "next/navigation";
import CurrentUserContext from "@/hooks/userContext";
import { ToastProvider } from "@/providers";

jest.mock("next/navigation");
//@ts-ignore
usePathname.mockReturnValue("/");

describe("Header", () => {
  const header = <Header />;
  const headerWithUserContext = (
    <ToastProvider>
      <CurrentUserContext.Provider
        value={{
          email: "example@gmail.com",
          name: "Test",
          role: "USER",
        }}
      >
        <Header />
      </CurrentUserContext.Provider>
    </ToastProvider>
  );
  const headerWithAdminContext = (
    <ToastProvider>
      <CurrentUserContext.Provider
        value={{
          email: "example@gmail.com",
          name: "Test",
          role: "ADMIN",
        }}
      >
        <Header />
      </CurrentUserContext.Provider>
    </ToastProvider>
  );

  it("renders the logo", () => {
    render(header, {
      wrapper: MemoryRouterProvider,
    });
    expect(screen.getByAltText("VerityAI")).toBeInTheDocument();
  });

  it("renders the links but without the detector and dashboard link when the user is not logged in", () => {
    render(header);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Features")).toBeInTheDocument();
    expect(screen.getByText("Tutorial")).toBeInTheDocument();
    expect(screen.getByText("FAQs")).toBeInTheDocument();
  });

  it("renders the links but with the detector if the user have USER role", () => {
    render(headerWithUserContext);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Features")).toBeInTheDocument();
    expect(screen.getByText("Tutorial")).toBeInTheDocument();
    expect(screen.getByText("FAQs")).toBeInTheDocument();
    expect(screen.getByText("Detector")).toBeInTheDocument();
  });

  it("renders all the links", () => {
    render(headerWithAdminContext);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Features")).toBeInTheDocument();
    expect(screen.getByText("Tutorial")).toBeInTheDocument();
    expect(screen.getByText("FAQs")).toBeInTheDocument();
    expect(screen.getByText("Detector")).toBeInTheDocument();
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
  });
});
