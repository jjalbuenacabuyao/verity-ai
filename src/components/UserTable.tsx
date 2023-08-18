"use client";

import React, { Dispatch, SetStateAction } from "react";
//@ts-ignore
import {
  Table,
  TableHeader,
  TableColumn,
  TableRow,
  TableCell,
  TableBody,
} from "@nextui-org/table";
import { Tooltip } from "@nextui-org/tooltip";
import { Pagination } from "@nextui-org/react";
import EditIcon from "./EditIcon";
import DeleteIcon from "./DeleteIcon";
import { Spinner } from "@nextui-org/spinner";
import { UserType } from "@/types";

interface Props {
  users: UserType;
  numOfUsers: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  isLoading: boolean;
  search: string;
  setUserDeleted: Dispatch<SetStateAction<boolean>>;
}

const UserTable = ({
  users,
  numOfUsers,
  page,
  setPage,
  isLoading,
  search,
  setUserDeleted
}: Props) => {
  const usersPerPage = 5;
  const pages = Math.ceil(numOfUsers / usersPerPage);
  const tableHeadings = ["Name", "Role", "Action"];

  return (
    <Table
      aria-label="Table of Users"
      bottomContent={
        search === "" && (
          <div className="flex w-full justify-end">
            <Pagination
              isCompact
              showControls
              showShadow
              page={page}
              total={pages}
              onChange={(page) => setPage(page)}
              isDisabled={isLoading}
            />
          </div>
        )
      }
      classNames={{
        table: `${isLoading ? "min-h-[300px]" : ""}`,
      }}>
      <TableHeader>
        {tableHeadings.map((heading) => (
          <TableColumn key={heading}>{heading}</TableColumn>
        ))}
      </TableHeader>
      <TableBody
        isLoading={isLoading}
        loadingContent={
          <Spinner size="lg" label="Loading..." className="pt-12 text-sm" />
        }>
        {users.map(({ id, name, email, role }) => (
          <TableRow key={id}>
            <TableCell className={`${isLoading ? "hidden" : ""}`}>
              <p className="font-medium">
                {`${name?.firstName} ${name?.middleName} ${name?.lastName}`}
              </p>
              <p className="text-xs">{email}</p>
            </TableCell>
            <TableCell className={`${isLoading ? "hidden" : ""}`}>
              {role.charAt(0) + role.slice(1).toLocaleLowerCase()}
            </TableCell>
            <TableCell className={`${isLoading ? "hidden" : ""}`}>
              <div className="flex items-center gap-2">
                <Tooltip content="Edit user permission">
                  <span className="cursor-pointer text-lg text-default-400 active:opacity-50">
                    <EditIcon />
                  </span>
                </Tooltip>
                <Tooltip color="danger" content="Delete user">
                  <span className="cursor-pointer text-lg text-danger active:opacity-50">
                    <DeleteIcon id={id} setUserDeleted={setUserDeleted} />
                  </span>
                </Tooltip>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UserTable;
