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
      return <a>{current}</a>;
    }

    if (type === "prev") {
      return (
        <button className="cursor-pointer disabled:cursor-not-allowed disabled:opacity-50">
          <BsChevronLeft size={16} />
        </button>
      );
    }

    if (type === "next") {
      return (
        <button className="cursor-pointer disabled:cursor-not-allowed disabled:opacity-50">
          <BsChevronRight size={16} />
        </button>
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
    <div className="relative overflow-x-auto rounded-xl border border-slate-400 pb-4">
      {/* To avoid purging of unused classes */}
      <span
        aria-hidden="true"
        className="rc-pagination-item rc-pagination-item-active rc-pagination-prev rc-pagination-next hidden"></span>
      <table className="w-full table-auto text-sm text-slate-500">
        <thead>
          <tr className="border-b border-b-slate-400 text-left">
            {tableHeadings.map((heading) => (
              <td
                key={heading}
                className="p-8 pb-4 font-semibold text-slate-800">
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
                className="flex items-center justify-end gap-2 pr-8 pt-4"
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
