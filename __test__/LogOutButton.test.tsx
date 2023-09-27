import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { signOut } from "next-auth/react";
import { LogOutButton } from "@/components/utilities";
import "@testing-library/jest-dom";

jest.mock("next-auth/react", () => ({
  signOut: jest.fn(),
}));

describe("LogOutButton", () => {
  it("renders correctly", () => {
    const { getByText } = render(<LogOutButton />);
    expect(getByText("Log out")).toBeInTheDocument();
  });

  it("calls signOut when clicked", () => {
    const { getByText } = render(<LogOutButton />);
    fireEvent.click(getByText("Log out"));
    expect(signOut).toHaveBeenCalledWith({ callbackUrl: "/" });
  });
});
