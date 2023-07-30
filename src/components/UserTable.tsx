import { UserType } from "@/types";
import React from "react";

interface Props {
  users: UserType[];
}

const UserTable = ({ users }: Props) => {
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Role</th>
        <th>Actions</th>
      </tr>
      {users.map((user) => (
        <tr key={user.id}>
          <td>{`${user.name.firstName} ${user.name.middleName} ${user.name.lastName}`}</td>
          <td>{user.role}</td>
        </tr>
      ))}
    </table>
  );
};

export default UserTable;
