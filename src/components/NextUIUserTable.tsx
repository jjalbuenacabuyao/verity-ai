import { Name, User } from "@prisma/client";
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

interface Props {
  users: (User & {
    name: Name | null;
  })[];
  numOfUsers: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}

const NextUIUserTable = ({ users, numOfUsers, page, setPage }: Props) => {
  const usersPerPage = 5;
  const pages = Math.ceil(numOfUsers / usersPerPage);
  const tableHeadings = ["Name", "Role", "Action"];

  return (
    <Table
      aria-label="Table of Users"
      bottomContent={
        <div className="flex w-full justify-end">
          <Pagination
            isCompact
            showControls
            showShadow
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      }>
      <TableHeader>
        {tableHeadings.map((heading) => (
          <TableColumn key={heading}>{heading}</TableColumn>
        ))}
      </TableHeader>
      <TableBody>
        {users.map(({ id, name, email, role }) => (
          <TableRow key={id}>
            <TableCell>
              <p className="font-medium">
                {`${name?.firstName} ${name?.middleName} ${name?.lastName}`}
              </p>
              <p className="text-xs">{email}</p>
            </TableCell>
            <TableCell>
              {role.charAt(0) + role.slice(1).toLocaleLowerCase()}
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Tooltip content="Edit user permission">
                  <span className="cursor-pointer text-lg text-default-400 active:opacity-50">
                    <EditIcon />
                  </span>
                </Tooltip>
                <Tooltip color="danger" content="Delete user">
                  <span className="cursor-pointer text-lg text-danger active:opacity-50">
                    <DeleteIcon />
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

export default NextUIUserTable;
