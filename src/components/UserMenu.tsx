import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/dropdown";
import { Avatar } from "@nextui-org/avatar";
import { FaUserAlt } from "react-icons/fa";
import React from "react";
import { CurrentUser } from "@/types";
import { signOut } from "next-auth/react";

interface Props {
  currentUser: CurrentUser;
}

const UserMenu = ({ currentUser }: Props) => {
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
        <Avatar size="sm" icon={<FaUserAlt size={28} />} isBordered color="primary" />
      </DropdownTrigger>

      <DropdownMenu
        aria-label="User menu"
        variant="shadow"
        color="primary"
        onAction={(key) => {
          key === "logout" && signOut({ callbackUrl: "/" });
        }}>
        <DropdownItem key="profile" className="h-14 gap-2">
          <p className="text-sm font-semibold">{ currentUser.name }</p>
          <p className="text-xs font-semibold capitalize">{ currentUser.role.toLowerCase() }</p>
        </DropdownItem>
        <DropdownItem key="change-password">Change Password</DropdownItem>
        <DropdownItem key="logout" color="danger">Log out</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default UserMenu;
