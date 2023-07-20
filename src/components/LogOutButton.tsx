import React from "react";
import Button from "./Button";
import { signOut } from "next-auth/react";

const LogOutButton = () => {
  return (
    <Button
      onClick={() => signOut({ callbackUrl: "/" })}
      variant={"primary"}
      text="Log out"
    />
  );
};

export default LogOutButton;
