"use client";

import { Header, AddUserModal } from "@/components";

const Dashboard = () => {
  return (
    <div>
      <div>
        <h1>Users</h1>
        <button>+ Add New User</button>
      </div>
      <AddUserModal />
    </div>
  );
};

export default Dashboard;
