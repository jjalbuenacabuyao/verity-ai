import React from "react";
import { signOut } from "next-auth/react";
import { Button } from "@nextui-org/button";

/**
 * Renders a button component for logging out.
 * When the button is clicked, it calls the `signOut` function with a callback URL of "/".
 *
 * @returns {JSX.Element} The rendered button component.
 */

const LogOutButton = () => {
  return (
    <Button
      onClick={() => {
        localStorage.removeItem("userEmail");
        signOut({ callbackUrl: "/" });
      }}
      variant="solid"
      radius="full"
      className="bg-blue-500 text-sm font-semibold tracking-wide text-white">
      Log out
    </Button>
  );
};

export default LogOutButton;
