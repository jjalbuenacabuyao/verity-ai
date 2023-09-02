import React from "react";
import { signOut } from "next-auth/react";
import { Button } from "@nextui-org/button";

const LogOutButton = () => {
  return (
    <Button
      onClick={() => signOut({ callbackUrl: "/" })}
      variant="solid"
      radius="full"
      className="bg-blue-500 text-sm font-semibold tracking-wide text-white">
      Log out
    </Button>
  );
};

export default LogOutButton;
