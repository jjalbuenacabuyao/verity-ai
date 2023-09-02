import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Avatar } from "@nextui-org/avatar";
import React from "react";
import { CurrentUser } from "@/types";
import { signOut } from "next-auth/react";

interface Props {
  currentUser: CurrentUser;
}

const UserMenu = ({ currentUser }: Props) => {
  const userNameArray = currentUser.name.split(" ");
  const initials =
    userNameArray[0].charAt(0) +
    userNameArray[userNameArray.length - 1].charAt(0);

  return (
    <Dropdown
      showArrow
      radius="sm"
      placement="bottom"
      trigger="press"
      shouldBlockScroll={false}
      classNames={{
        base: "border-small border-divider bg-background",
      }}>
      <DropdownTrigger>
        <Avatar
          size="sm"
          name={initials}
          isBordered
          color="primary"
          classNames={{
            base: "cursor-pointer hover:scale-90 hover:ring-offset-[3px] transition-all",
            name: "font-bold uppercase",
          }}
        />
      </DropdownTrigger>

      <DropdownMenu
        aria-label="User menu"
        variant="shadow"
        color="primary"
        onAction={(key) => {
          key === "logout" && signOut({ callbackUrl: "/" });
        }}>
        <DropdownItem key="profile" className="h-14 gap-2">
          <p className="text-sm font-semibold">{currentUser.name}</p>
          <p className="text-xs font-semibold capitalize">
            {currentUser.role.toLowerCase()}
          </p>
        </DropdownItem>
        <DropdownItem key="change-password">Change Password</DropdownItem>
        <DropdownItem key="logout" color="danger">
          Log out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default UserMenu;
