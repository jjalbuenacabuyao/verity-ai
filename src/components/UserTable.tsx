import { UserType } from "@/types";
import { Name, User } from "@prisma/client";
import React from "react";

interface Props {
  users: (User & {
    name: Name | null;
  })[];
}

const UserTable = ({ users }: Props) => {
  const tableHeadings = ["Name", "Role", "Actions"];

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
      </table>
    </div>
  );
};

export default UserTable;
