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
import { Spinner } from "@nextui-org/spinner";
import { UserType } from "@/types";
import DeleteButton from "./DeleteButton";
import { useCurrentUserContext } from "@/hooks/userContext";

interface Props {
  users: UserType;
  numOfUsers: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  isLoading: boolean;
  search: string;
  setUserDeleted: Dispatch<SetStateAction<boolean>>;
}

/**
 * Renders a table of users.
 *
 * @param {Object} props - The props object.
 * @param {Array} props.users - The list of users to display in the table.
 * @param {number} props.numOfUsers - The total number of users.
 * @param {number} props.page - The current page number.
 * @param {function} props.setPage - A function to update the current page.
 * @param {boolean} props.isLoading - A flag indicating if the table is currently loading.
 * @param {string} props.search - The search query entered by the user.
 * @param {function} props.setUserDeleted - A function to handle user deletion.
 * @returns {JSX.Element} The rendered table component.
 */
const UserTable = ({
  users,
  numOfUsers,
  page,
  setPage,
  isLoading,
  search,
  setUserDeleted,
}: Props) => {
  const currentUser = useCurrentUserContext();

  const usersPerPage = 5;
  const pages = Math.ceil(numOfUsers / usersPerPage);
  let tableHeadings = ["Name", "Role", "Action", "Log Time"];

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
      }}
    >
      <TableHeader>
        {tableHeadings.map((heading) => {
          if (
            currentUser?.role === "ADMIN" &&
            (heading === "Action" || heading === "Log Time")
          ) {
            return <TableColumn className="hidden" key={heading}>None</TableColumn>;
          } else {
            return <TableColumn key={heading}>{heading}</TableColumn>;
          }
        })}
      </TableHeader>
      <TableBody
        isLoading={isLoading}
        loadingContent={
          <Spinner size="lg" label="Loading..." className="pt-12 text-sm" />
        }
      >
        {users.map(({ id, name, email, role, logtime }) => (
          <TableRow key={id}>
            <TableCell className={`${isLoading ? "hidden" : ""}`}>
              <p className="font-medium">
                {`${name?.firstName} ${name?.middleName} ${name?.lastName}`}{" "}
                {currentUser?.email === email && (
                  <span className="font-bold">(You)</span>
                )}
              </p>
              <p className="text-xs">{email}</p>
            </TableCell>
            <TableCell className={`${isLoading ? "hidden" : ""}`}>
              {role.charAt(0) + role.slice(1).toLocaleLowerCase()}
            </TableCell>
            {currentUser?.role === "SUPERADMIN" ? (
              <TableCell className={`${isLoading ? "hidden" : ""}`}>
                <div className="flex items-center gap-2">
                  <Tooltip content="Edit user's role">
                    <span className="cursor-pointer text-lg text-default-400 active:opacity-50">
                      <EditIcon
                        firstName={name!.firstName}
                        role={role}
                        id={id}
                      />
                    </span>
                  </Tooltip>
                  <Tooltip color="danger" content="Delete user">
                    <span className="cursor-pointer text-lg text-danger active:opacity-50">
                      <DeleteButton
                        id={id}
                        username={`${name?.firstName} ${name?.lastName}`}
                        setUserDeleted={setUserDeleted}
                      />
                    </span>
                  </Tooltip>
                </div>
              </TableCell>
            ) : (
              <TableCell className="hidden">None</TableCell>
            )}

            {currentUser?.role === "SUPERADMIN" ? (
              <TableCell className={`${isLoading ? "hidden" : ""}`}>
                {logtime ? new Date(logtime).toLocaleString() : "..."}
              </TableCell>
            ) : (
              <TableCell className="hidden">None</TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UserTable;
