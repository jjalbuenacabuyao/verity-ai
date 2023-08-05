"use client";

import { UserType } from "@/types";
import { Name, User } from "@prisma/client";
import React, { Dispatch, SetStateAction } from "react";
import Pagination from "rc-pagination";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import locale from "rc-pagination/es/locale/en_US";

interface Props {
  users: (User & {
    name: Name | null;
  })[];
  numOfUsers: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}

const UserTable = ({ users, numOfUsers, page, setPage }: Props) => {
  const usersPerPage = 5;
  const tableHeadings = ["Name", "Role", "Actions"];
  const itemRender = (current: number, type: any, element: any) => {
    if (type === "page") {
      return (
        <a
          className={`${current === page ? "bg-blue-500 text-white" : ""} p-2`}>
          {current}
        </a>
      );
    }
    if (type === "prev") {
      return (
        <a>
          <BsChevronLeft size={20} />
        </a>
      );
    }
    if (type === "next") {
      return (
        <a>
          <BsChevronRight size={20} />
        </a>
      );
    }
    if (type === "jump-prev" || type === "jump-next") {
      return <span>...</span>;
    }
    return element;
  };

  const onChangeHandler = (num: number) => {
    setPage(num);
  };

  return (
    <div className="relative overflow-x-auto rounded-xl border border-slate-400 pb-8">
      <table className="w-full table-auto text-sm text-slate-600">
        <thead>
          <tr className="border-b border-b-slate-400 text-left">
            {tableHeadings.map((heading) => (
              <td key={heading} className="p-8 pb-4 font-medium text-slate-500">
                {heading}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            if (user.name) {
              return (
                <tr key={user.id} className="border-b border-b-gray-300">
                  <td className="px-8 py-4 capitalize">{`${user.name.firstName} ${user.name.middleName} ${user.name.lastName}`}</td>
                  <td className="px-8 py-4">
                    {user.role.charAt(0) + user.role.substring(1).toLowerCase()}
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>
              <Pagination
                locale={locale}
                className="flex items-center justify-end gap-2"
                onChange={onChangeHandler}
                itemRender={itemRender}
                current={page}
                pageSize={usersPerPage}
                total={numOfUsers}
                showLessItems
              />
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default UserTable;
