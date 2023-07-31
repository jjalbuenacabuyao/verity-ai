import { UserType } from "@/types";
import React from "react";

interface Props {
  users: UserType[];
}

const UserTable = ({ users }: Props) => {
  const tableHeadings = ["Name", "Role", "Actions"];

  return (
    <div className="relative rounded-xl overflow-x-auto border pb-8">
      <table className="table-auto w-full text-sm text-slate-500">
        <thead>
          <tr className="text-left border-b">
            {tableHeadings.map(heading => (
              <td key={heading} className="p-8 pb-4 font-medium text-slate-400">{heading}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b border-b-gray-100">
              <td className="px-8 py-4 capitalize">{`${user.name.firstName} ${user.name.middleName} ${user.name.lastName}`}</td>
              <td className="px-8 py-4">{user.role.charAt(0) + user.role.substring(1).toLowerCase()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
